<?php
require_once 'abstractActions.php';
require_once 'activeRecords/process.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of AddOperationAction
 *
 * @author Maksim
 */
class AddProcessAction extends abstractActions
{
    private $process;
    
    public function __construct($name, $comment, $directory) 
    {
        $this->process = new Process();
        $this->process->comment = $comment;
        $this->process->name = $name;
        $date = date('Y-m-d');
        $this->process->updated = $date;
        $this->process->directoryId = $directory;
    }
    public function run() 
    {
        $answer = $this->process->save();
        $this->view->answer($answer);
    }

//put your code here
}
