<?php
require_once 'activeRecords/Approach.php';
require_once 'activeRecords/process.php';
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
    public function getAllProcesses() 
    {
       $process = new Process();
       $approach = new Approach();
      return ($process->join('left', $approach ,"{$process->getTableName()}.id={$approach->getTableName()}.idProcess" ,array("name",'comment', 'id', 'updated'), 
               array('name','comment','updated','id','videoFilename')));
    }
}
