<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of UpdateProcessAction
 *
 * @author maksim
 */
class UpdateProcessAction extends abstractActions
{

    private $post;
    private $id;

    public function __construct($id,$post) 
    {
        $this->id = $id;
        $this->post = $post;
    }
    public function run() 
    {
        $process = new Process();
        $answer = $process->update(array($this->post['name'],$this->post['comment'], $this->post['directory']), array('name','comment','directoryId'), "id={$this->id}");
        $this->view->answer($answer);
    }

//put your code here
}
