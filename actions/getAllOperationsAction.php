<?php
require_once 'abstractActions.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of getAllOperationsAction
 *
 * @author maksim
 */
class getAllOperationsAction extends abstractActions
{
    private $approachId;
    
    public function __construct($approachId) 
    {
        $this->approachId = $approachId;
    }
    
    
    public function run()
    {
        $operations = $this->dataBase->getOperations($this->approachId);
        $adapter = new HtmlOutputAdapter();
        $this->view->answer($adapter->convertOperations($operations));
    }
}
