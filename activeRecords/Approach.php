<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Approach
 *
 * @author Maksim
 */
class Approach extends abstractActiveRecord
{
    public $comment;
    public $name;
    public $idProcess;
    public $updated;
    
    public function __construct() 
    {
        $this->fillTableName();
    }
    protected function fillInsertingValues() 
    {
        $this->insertingValues = array("name" => $this->name,"updated" => $this->updated, "comment" => $this->comment, "idProcess"=>  $this->idProcess);
    }

    protected function fillTableName() 
    {
        $this->tableName = "approach";
    }

//put your code here
}
