<?php
require_once 'consts/ActionsConsts.php';
require_once 'actions/getAllOperationsAction.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ActionsFactory
 *
 * @author maksim
 */
class ActionsFactory 
{
    public static function create($actionId, $post)
    {
        switch ($actionId) 
        {
            case ActionsConsts::getOperations:
                return new getAllOperationsAction($post["approachId"]);
                break;

            default:
                break;
        }
    }
}
