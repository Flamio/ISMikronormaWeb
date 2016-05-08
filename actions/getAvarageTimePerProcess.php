<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of getAvarageTimePerProcess
 *
 * @author maksim
 */

require_once('IInternalSharable.php');
class getAvarageTimePerProcess extends abstractActions implements IInternalSharable
{

    private $result;

    public function __construct($idProcess) 
    {
        $this->result['approachesAvarage'] = array();
        $approachAA = new Approach();
        $operationAA = new operation();
        $processApproaches = $approachAA->getValues(array('id', 'name'), "idProcess = {$idProcess}");
        $sumAvarageCalc = 0;
        $sumAvarageActual = 0;
        foreach ($processApproaches as $key => $value) 
        {
            $times = $operationAA->getValues(array('actualTime','calcTime'), "idApproach={$value['approachid']}");
            $averageActualTime = 0;
            $averageCalcTime = 0;
            $counter = 0;
            foreach ($times as $keyTime => $valueTime)
            {
                $averageActualTime += $valueTime['operationsactualTime'];
                $averageCalcTime += $valueTime['operationscalcTime'];
                $counter++;
            }
            if ($counter == 0)
            {
                continue;
            }
            $averageActualTime /= $counter;
            $averageCalcTime /= $counter;
            $sumAvarageActual += $averageActualTime;
            $sumAvarageCalc += $averageCalcTime;
            $averageTimes['averageActualTime'] = $averageActualTime;
            $averageTimes['averageCalcTime'] = $averageCalcTime;
            $averageTimes['approachName']  = $value['approachname'];
            array_push($this->result['approachesAvarage'], $averageTimes);
        }
        $this->result['sumAvarageActual'] = $sumAvarageActual;
        $this->result['sumAvarageCalc'] = $sumAvarageCalc;
    }
    
    public function run() 
    {
        
        $this->view->answer(json_encode($this->result));
    }

    public function getResult()
    {
        return $this->result;
    }

}

