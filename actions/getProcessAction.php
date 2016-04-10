<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of getProcessAction
 *
 * @author maksim
 */
class getProcessAction extends abstractActions
{

    private $processId;

    public function __construct($processId) {
        $this->processId = $processId;
    }
    public function run() 
    {
        $process = new Process();
        $processValue = $process->getValues(array('name','comment'), "id={$this->processId}");
        $this->view->answer(json_encode($processValue));
    }

}
