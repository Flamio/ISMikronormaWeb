<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of UpdateApproachAction
 *
 * @author maksim
 */
class UpdateApproachAction extends abstractActions
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
        $approach = new Approach();
        $answer = $approach->update(array($this->post['name'],$this->post['comment']), array('name','comment'), "id={$this->id}");
        $this->view->answer($answer);
    }

    //put your code here
}
