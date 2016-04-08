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
    protected $database;
    
    public function setDataBaseAndView($dataBase,$view)
    {
        $this->database = $dataBase;
        $this->view = $view;
    }
    
    abstract public function run();
}
