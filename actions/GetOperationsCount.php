<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of GetOperationsCount
 *
 * @author maksim
 */
class GetOperationsCount extends abstractActions
{
    private $result;
    public function __construct($processId) 
    {
        $approachAA = new Approach();
        $operationAA = new operation();
        $processApproaches = $approachAA->getValues(array('id', 'name'), "idProcess = {$processId}");
        foreach ($processApproaches as $key => $value) 
        {
            $directoryValueIds = $operationAA->getValues(array('directoryValueId', 'name'), "idApproach={$value['approachid']}");
            foreach ($directoryValueIds as $keyDirectoryValue => $valueDirectoryValue) 
            {
                $this->result[$value['approachname']]['value'.$valueDirectoryValue['operationsdirectoryValueId']]['name'] = $valueDirectoryValue['operationsname'];
                $this->result[$value['approachname']]['value'.$valueDirectoryValue['operationsdirectoryValueId']]['count']++;
            }
        }
    }
    public function run()
    {
        $this->view->answer(json_encode($this->result));
    }

//put your code here
}
