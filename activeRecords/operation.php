<?php
require_once 'activeRecords/abstractActiveRecord.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of operation
 *
 * @author Maksim
 */
class operation extends abstractActiveRecord
{
    public function __construct() 
    {
        $this->fillTableName();
    }
    protected function fillInsertingValues() 
    {
        
    }

    protected function fillTableName() 
    {
        $this->tableName = 'operations';
    }
}
