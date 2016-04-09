<?php

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
    protected $database;
    protected $insertingValues;
    protected $tableName;
    
    public function __construct() 
    {
        $this->database = mysql_connect(DataBaseConnectionConsts::server, DataBaseConnectionConsts::username, DataBaseConnectionConsts::password);
            mysql_select_db("ISMikronormaDB",  $this->database);
    }
    
    abstract protected function fillInsertingValues();
    abstract protected function fillTableName();
    

    public function save()
    {
        $this->fillInsertingValues();
        $this->fillTableName();
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
         mysql_query($saveQuery) or $result = die(mysql_error());;
         $result = 'ok';
         return $result; 
    }
   
}
