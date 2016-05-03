<?php
require_once 'factories/ActionsFactory.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ActionController
 *
 * @author maksim
 */
class ActionController 
{
    private $mainView;
    public function __construct($mainView) 
    {
        $this->mainView = $mainView;
    }
    public function setActionId($id)
    {
        $action = ActionsFactory::create($id, $_POST);
        $action->setView($this->mainView);
        $action->run();
    }
}
