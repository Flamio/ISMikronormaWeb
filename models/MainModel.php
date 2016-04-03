<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of MainModel
 *
 * @author maksim
 */
class MainModel 
{
    private $database;
    public function __construct($database) 
    {
        $this->database = $database;
    }
    public function getAllProcesses() 
    {
        return $this->database->getProcesses();
    }
}
