<?php
require_once 'abstractActions.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of GetLastOperationPositionAction
 *
 * @author maksim
 */
class GetLastOperationPositionAction extends abstractActions
{

    private $idApproach;

    public function __construct($idApproach) 
    {
        
        $this->idApproach = $idApproach;
    }
    public function run() 
    {
        $operationAA = new operation();
        $lastPosition = $operationAA->getMaxValues(array('position'), "{$operationAA->getTableName()}.idApproach={$this->idApproach}");
        $this->view->answer(json_encode($lastPosition));
    }
}
