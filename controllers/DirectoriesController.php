<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DirectoriesController
 *
 * @author maksim
 */
class DirectoriesController 
{
    public function __construct($value,$directoriesAPI, $view) 
    {
        switch ($value)
        {
            case "getAllDirectories":
            {
                $answer = $directoriesAPI->getAllDirectories();
                $view->answer($answer);
                break;
            }
            case "getChilds":
            {
                
                $result['nodes']= json_decode($directoriesAPI->getChildNodes($_POST['id']));
                $result['values']= json_decode($directoriesAPI->getValues($_POST['id']));
                $view->answer(json_encode($result));
                break;
            }
            
        }
    }
}
