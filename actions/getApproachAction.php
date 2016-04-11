<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of getApproachAction
 *
 * @author maksim
 */
class getApproachAction extends abstractActions
{

    private $approachId;

    public function __construct($approachId) 
    {
        ;
        $this->approachId = $approachId;
    }
    public function run() 
    {
        $approachAA = new Approach();
        $approach = $approachAA->getValues(array('name','comment'), "id={$this->approachId}");
        $this->view->answer(json_encode($approach));
    }

}
