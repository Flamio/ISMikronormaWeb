<?php
require_once 'abstractActions.php';
require_once 'activeRecords/operation.php';
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
        $opearation = new operation();
        $operations = $opearation->getValues(array('id','idApproach','name','updated','comment','actualTime', 'calcTime','position'), "{$opearation->getTableName()}.idApproach={$this->approachId}");
        $approach = new Approach();
        $videoFileName = $approach->getValues(array('videoFilename'), "id={$this->approachId}")[0]['approachvideoFilename'];
        $result['videoFilename'] = $videoFileName;
        
        if (!empty($operations))
        {
            $result["variants"] = $operations;
        }
                
        $this->view->answer(json_encode($result));
    }
}
