<?php
require_once 'consts/DatabaseConnectionConsts.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of abstractActiveRecord
 *
 * @author Maksim
 */
abstract class abstractActiveRecord 
{
    private $database;
    protected $insertingValues;
    protected $tableName;
   
    
    abstract protected function fillInsertingValues();
    abstract protected function fillTableName();
    
    /*select Approach.`name` as approachName, Processes.`Name` as processesName, Processes.Comment as processesComment, 
                    Processes.id as processId, Processes.updated as processUpdated,Approach.comment as approachComment, 
     * Approach.updated as approachUpdated,
                    Approach.id as approachId, Approach.videoFilename as video from Processes left join
     *  Approach on Processes.id=Approach.idProcess */
    
    public function join($type, $activeRecord,$condition,$fieldArrayLeft, $fieldArrayRight)
    {
        $query=" select ";
        foreach ($fieldArrayLeft as $key => $value) 
        {
            $query.=" {$this->tableName}.{$value} as {$this->tableName}{$value},";
        }
        foreach ($fieldArrayRight as $key => $value) 
        {
            $query.=" {$activeRecord->tableName}.{$value} as {$activeRecord->tableName}{$value},";
        }
        $query = rtrim($query,',');
        $query.=" from {$this->tableName} {$type} join {$activeRecord->tableName} on {$condition}";
        return $this->convertfromResToArray($query);
    }
    
    public function getValues($paramArray, $condition)
    {
       // $query = "select * from Operations where idApproach={$approachId}";
       $query = "select ";
       foreach ($paramArray as $key => $value) 
        {
            $query.=" {$this->tableName}.{$value} as {$this->tableName}{$value},";
        }
        $query = rtrim($query,',');
        
        $query.=" from {$this->tableName}";
        if ($condition!="")
        {
            $query.=" where {$condition}";
        }
        return $this->convertfromResToArray($query);
    }
    
    private function convertfromResToArray($query)
    {
        $this->database = mysql_connect(DataBaseConnectionConsts::server, DataBaseConnectionConsts::username, DataBaseConnectionConsts::password);
        mysql_select_db("ISMikronormaDB",  $this->database);
        
        $result = array();
        $res = mysql_query($query, $this->database) or $result = "failed";
        $counter = 0;
        while ($row = mysql_fetch_assoc($res))
        {
            $result[$counter] = $row;
            $counter++;
        }
        mysql_close($this->database);
        return $result;
    }
    
    public function getTableName()
    {
        return $this->tableName;
    }
    
    public function save()
    {
        $this->database = mysql_connect(DataBaseConnectionConsts::server, DataBaseConnectionConsts::username, DataBaseConnectionConsts::password);
        mysql_select_db("ISMikronormaDB",  $this->database);

        $this->fillInsertingValues();
        $saveQuery = "insert into {$this->tableName} (";
        foreach ($this->insertingValues as $key => $value) 
        {
            $saveQuery.="{$key},";
        }
        $saveQuery = rtrim($saveQuery,',');
        $saveQuery.=") values (";
        
        foreach ($this->insertingValues as $key => $value) 
        {
            $saveQuery.="'{$value}',";
        }
        $saveQuery = rtrim($saveQuery,',');
        $saveQuery.=')';
        
        $result;
        
         mysql_query($saveQuery,$this->database) or $result = die(mysql_error());;   
         $result = 'ok';
         mysql_close($this->database);
         return $result; 
    }
   
}