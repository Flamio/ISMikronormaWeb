<?php

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
class getAllOperationsAction 
{
    private $approachId;
    private $dataBase;
    private $view;
    
    public function __construct($approachId) 
    {
        $this->approachId = $approachId;
    }
    
    public function setDataBaseAndView($dataBase,$view)
    {
        $this->dataBase = $dataBase;
        $this->view = $view;
    }
    public function run()
    {
        $operations = $this->dataBase->getOperations($this->approachId);
        $adapter = new HtmlOutputAdapter();
        $this->view->setOperations($adapter->convertOperations($operations));
    }
}
