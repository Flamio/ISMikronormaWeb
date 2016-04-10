<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of AddApproachAction
 *
 * @author maksim
 */
class AddApproachAction extends abstractActions
{

    private $post;

    public function __construct($post) 
    {
        $this->post = $post;
    }
    public function run() 
    {
        $approachAA = new Approach();
        $approachAA->name = $this->post['name'];
        $approachAA->idProcess = $this->post['idProcess'];
        $date = date('Y-m-d');
        $approachAA->updated = $date;
        $approachAA->comment = $this->post['comment'];
        $answer = $approachAA->save();
        
        $this->view->answer($answer);
    }

//put your code here
}
