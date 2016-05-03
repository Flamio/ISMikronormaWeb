<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of AddOperationAction
 *
 * @author maksim
 */
class AddOperationAction extends abstractActions
{

    private $directoryValueId;
    private $position;
    private $actualTime;
    private $name;
    private $comment;
    private $idApproach;
    private $updated;
    private $calcTime;

    public function __construct($idApproach, $comment, $name, $directoryValueId, $calcTime, $actualTime, $position) 
    {
        
        $this->idApproach = $idApproach;
        $this->comment = $comment;
        $this->name = $name;
        $this->directoryValueId = $directoryValueId;   
        $this->actualTime = $actualTime;
        $this->position = $position;
        $this->updated = $this->generateCurrentDate();
        $this->calcTime = $calcTime;
    }

    public function run() 
    {
        $operationAA = new operation();
        $operationAA->directoryValueId  =  $this->directoryValueId;
        $operationAA->name  =  $this->name;
        $operationAA->comment  =  $this->comment;
        $operationAA->idApproach  =  $this->idApproach;
        $operationAA->position = $this->position;
        $operationAA->updated = $this->updated;
        $operationAA->actualTime = $this->actualTime;
        $operationAA->calcTime = $this->calcTime;
        $this->view->answer($operationAA->save());
    }

//put your code here
}
