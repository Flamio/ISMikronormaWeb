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

    private $position;
    private $calcTime;
    private $actualTime;
    private $name;
    private $comment;
    private $idApproach;
    private $updated;

    public function __construct($idApproach, $comment, $name, $actualTime, $calcTime, $position) 
    {
        
        $this->idApproach = $idApproach;
        $this->comment = $comment;
        $this->name = $name;
        $this->actualTime = $actualTime;
        $this->calcTime = $calcTime;
        $this->position = $position;
        $this->updated = $this->generateCurrentDate();
    }

    public function run() 
    {
        $operationAA = new operation();
        $operationAA->actualTime  =  $this->actualTime;
        $operationAA->name  =  $this->name;
        $operationAA->comment  =  $this->comment;
        $operationAA->idApproach  =  $this->idApproach;
        $operationAA->position = $this->position;
        $operationAA->updated = $this->updated;
        $operationAA->calcTime = $this->calcTime;
        $this->view->answer($operationAA->save());
    }

//put your code here
}
