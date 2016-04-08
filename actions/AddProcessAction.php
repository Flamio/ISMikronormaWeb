<?php
require_once 'abstractActions.php';
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
    private $name;
    private $comment;
    public function __construct($name, $comment) 
    {
        $this->name = $name;
        $this->comment = $comment;
    }
    public function run() 
    {
        $this->view->answer($this->database->addProcess($this->name, $this->comment));
    }

//put your code here
}
