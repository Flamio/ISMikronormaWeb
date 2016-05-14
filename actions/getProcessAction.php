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

require_once('IInternalSharable.php');

class getProcessAction extends abstractActions implements IInternalSharable
{

    private $processValue;

    public function __construct($processId) 
    {
        $process = new Process();
        $this->processValue = $process->getValues(array('name','comment','directoryId'), "id={$processId}");
    }
    public function run() 
    {
        $this->view->answer(json_encode($this->processValue));
    }

    public function getResult()
    {
        return $this->processValue;
    }
}
