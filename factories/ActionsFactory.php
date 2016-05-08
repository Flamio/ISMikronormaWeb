<?php
require_once 'consts/ActionsConsts.php';
require_once 'actions/getAllOperationsAction.php';
require_once 'actions/AddProcessAction.php';
require_once 'actions/UpdateProcessTree.php';
require_once 'actions/VideoUploadAction.php';
require_once 'actions/getProcessAction.php';
require_once 'actions/UpdateProcessAction.php';
require_once 'actions/UpdateApproachAction.php';
require_once 'actions/AddApproachAction.php';
require_once 'actions/getApproachAction.php';
require_once 'actions/AddOperationAction.php';
require_once 'actions/GetLastOperationPositionAction.php';
require_once 'actions/getAvarageTimePerProcess.php';
require_once 'actions/GetOperationsCount.php';
require_once 'actions/exportAnalisys.php';
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
            case ActionsConsts::addProcess:
                return new AddProcessAction($post["name"],$post["comment"], $post["directory"]);
                
            case ActionsConsts::updateProcessTree:
                return new UpdateProcessTree();
            case ActionsConsts::videoUpload:
                return new VideoUploadAction($_FILES,$_GET);
            case 'getProcess':
            {
                return new getProcessAction($_GET['id']);
            }
            case 'updateProcess':
                return new UpdateProcessAction($_GET['id'],$post);
            case 'addApproach':
                return new AddApproachAction($post);
            case 'getApproach':
                return new getApproachAction($_GET['id']);
             case 'updateApproach':
                return new UpdateApproachAction($_GET['id'],$post);
            case 'addOperation':
                return new AddOperationAction($post['idApproach'], $post['comment'], $post['name'], $post['directoriesValueId'], $post['calcTime'], $post['actualTime'],$post['position']);
            case 'getLastOperationPosition':
                return new GetLastOperationPositionAction($_GET['idApproach']);
            case 'getAverageTimePerProcess':
                return new getAvarageTimePerProcess($_GET['id']);
            case 'getOperationsCount':
                return new GetOperationsCount($_GET['id']);
            case 'exportAnalysis':
                return new exportAnalisys($_GET['id']);
            default: 
                break;
        }
    }
}

