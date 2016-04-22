<?php
require_once 'consts/DataBaseConnectionConsts.php';
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
    protected $insertingValues;
    protected $tableName;
   
    
    abstract protected function fillInsertingValues();
    abstract protected function fillTableName();
    
    
    public function join($type, $activeRecord,$condition,$fieldArrayLeft, $fieldArrayRight, $order)
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
        $query.=" from {$this->tableName} {$type} join {$activeRecord->tableName} on {$condition} order by {$order}";
        return $this->convertfromResToArray($query);
    }
    
    public function getValues($paramArray, $condition)
    {
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
    
    public function getMaxValues($paramArray, $condition)
    {
       $query = "select ";
       foreach ($paramArray as $key => $value) 
        {
            $query.=" max({$this->tableName}.{$value}) as {$this->tableName}{$value},";
        }
        $query = rtrim($query,',');
        
        $query.=" from {$this->tableName}";
        if ($condition!="")
        {
            $query.=" where {$condition}";
        }
        return $this->convertfromResToArray($query)[0];
    }
    
    
    private function convertfromResToArray($query)
    {
        $database = $this->getConnection();
        
        $result = array();
        $res = mysql_query($query, $database) or $result = "failed";
        $counter = 0;
        while ($row = mysql_fetch_assoc($res))
        {
            $result[$counter] = $row;
            $counter++;
        }
        mysql_close($database);
        return $result;
    }
    
    public function getTableName()
    {
        return $this->tableName;
    }
    
    public function update($updateParams,$columns,$condition) 
    {
        /*update approach set name = 'app1' where approach.id = 1*/
        $query = "update {$this->tableName} set ";
        for ($i=0;$i<count($columns);$i++)
        {
            $query.=" {$columns[$i]}='{$updateParams[$i]}',";
        }
        
        $query = rtrim($query,',');
        if (!empty($condition))
        {
            $query.=" where {$condition}";
        }

        $database = $this->getConnection();
        mysql_query($query,$database) or $result = mysql_error();   
         $result["success"] = 'ok';
         mysql_close($database);
         return json_encode($result);
    }
    
    public function save()
    {
        $database = $this->getConnection();
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
        
         mysql_query($saveQuery,$database) or $result = mysql_error();   
         $result['success'] = 'ok';
         mysql_close($database);
         return json_encode($result); 
    }
    
    private function getConnection()
    {
        $database = mysql_connect(DataBaseConnectionConsts::server, DataBaseConnectionConsts::username, DataBaseConnectionConsts::password);
        mysql_select_db("ISMikronormaDB",  $database);
        return $database;
    }
   
}
