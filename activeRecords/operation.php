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
    public $idApproach;
    public $name;
    public $updated;
    public $comment;
    public $position;
    public $idOperationInDirectory;
    public $actualTime;
    public $calcTime;
    
    public function __construct() 
    {
        $this->fillTableName();
    }
    protected function fillInsertingValues() 
    {
         $this->insertingValues = array("name" => $this->name,"updated" => $this->updated, "comment" => $this->comment, "idApproach"=>  $this->idApproach,
             "position" => $this->position, "actualTime" => $this->actualTime, "calcTime" => $this->calcTime);
    }

    protected function fillTableName() 
    {
        $this->tableName = 'operations';
    }
}
