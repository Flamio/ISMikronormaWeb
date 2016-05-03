<?php

require_once 'controllers/ActionController.php';
require_once 'DirectoriesAPI/DirectoriesAPI.php';
require_once 'controllers/DirectoriesController.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ControllerFactory
 *
 * @author maksim
 */
class ControllerFactory 
{
    public static function create($get, $mainView)
    {
        foreach ($get as $key => $value) 
        {
            if ($key == "action")
            {
                $actionController = new ActionController($mainView);
                $actionController->setActionId($value);
                return $actionController;
            }
            elseif ($key == 'directories') 
            {
                $directoriesController = new DirectoriesController($value, new DirectoriesAPI(), $mainView);    
            }
        }
    }
}
