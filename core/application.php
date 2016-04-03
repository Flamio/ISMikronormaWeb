<?php
require_once 'factories/ControllerFactory.php';
require_once 'views/MainView.php';
require_once 'core/dataBaseConnection.php';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Application
{
    public function execute() 
    {
        ControllerFactory::create($_GET, new DataBaseConnection(), new MainView());
    }
    
}
