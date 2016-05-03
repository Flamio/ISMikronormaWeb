 <?php
require_once 'abstractActions.php';
require_once 'activeRecords/Approach.php';
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
        
        $process = new Process();
        $approach = new Approach();
        $processes = $process->join('left', $approach ,"{$process->getTableName()}.id={$approach->getTableName()}.idProcess" ,array("name",'comment', 'id', 'updated'), 
               array('name','comment','updated','id'),"{$process->getTableName()}id");
        $this->view->answer(json_encode($processes));
    }

}
