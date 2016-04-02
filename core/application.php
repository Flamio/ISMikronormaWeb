<?php
require_once 'controllers/mainPageController.php';
require_once 'models/MainModel.php';
require_once 'views/MainView.php';
require_once 'dataBaseConnection.php';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Application
{
    public function execute() 
    {
        $mainPageController = new MainPageController(new MainModel(new DataBaseConnection()), new MainView());
    }
    
}
