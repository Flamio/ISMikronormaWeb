<?php
require_once 'abstractActions.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of UpdateProcessTree
 *
 * @author Maksim
 */
class UpdateProcessTree extends abstractActions
{
    public function run() 
    {
        $processes = $this->database->getProcesses();
        $adapter = new HtmlOutputAdapter();
        $this->view->answer($adapter->convertProcesses($processes));
    }

}
