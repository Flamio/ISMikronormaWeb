<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of abstractActions
 *
 * @author Maksim
 */
abstract class abstractActions 
{
    protected $view;
    protected $mainModel;


    public function setView($view)
    {
        $this->view = $view;
    }
    
    protected function generateCurrentDate()
    {
        $date = date('Y-m-d');
        return $date;
    }
    
    abstract public function run();
}
