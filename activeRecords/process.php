<?php
require_once 'abstractActiveRecord.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of process
 *
 * @author Maksim
 */
class Process  extends abstractActiveRecord
{
    public $name;
    public $updated;
    public $comment;
    public $directoryId;
    
    public function __construct() 
    {
        $this->fillTableName();
    }
    protected function fillInsertingValues() 
    {
        $this->insertingValues = array("name" => $this->name,"updated" => $this->updated, "comment" => $this->comment, "directoryId" => $this->directoryId);
    }

    protected function fillTableName() 
    {
        $this->tableName = "processes";
    }

//put your code here
}
