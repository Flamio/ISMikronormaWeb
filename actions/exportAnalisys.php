<?php
/**
 * exportAnalisys short summary.
 *
 * exportAnalisys description.
 *
 * @version 1.0
 * @author Maksim
 */
require_once('core/CsvBuilder.php');
require_once('core/FileSender.php');

class exportAnalisys extends abstractActions
{
    private $outputAvarageData = array();
    private $idProcess;

    public function __construct($idProcess)
    {
        $avarageTimesAction = new getAvarageTimePerProcess($idProcess);
        $avarageTimes = $avarageTimesAction->getResult();
        $this->idProcess = $idProcess;

        $headerRow = array('Ïîäõîä','Ñğåäíåå ôàêòè÷åñêîå âğåìÿ','Ñğåäíåå ğàñ÷åòíîå âğåìÿ');
        array_push($this->outputAvarageData,$headerRow);

        foreach($avarageTimes['approachesAvarage'] as $key => $avarageTime)
        {

            $row = array(iconv('utf-8','windows-1251', $avarageTime['approachName']),
                iconv('utf-8','windows-1251',$avarageTime['averageActualTime']),
                iconv('utf-8','windows-1251',$avarageTime['averageCalcTime']));
            array_push($this->outputAvarageData,$row);
        }
        $row = array('Èòîãî',$avarageTimes['sumAvarageActual'],$avarageTimes['sumAvarageCalc']);
        array_push($this->outputAvarageData,$row);


    }
    public function run()
    {
        $csvBuilder = new CsvBuilder($this->outputAvarageData);
        $csvData = $csvBuilder->getData();
        $fileSender = new FileSender($csvData,'Ñğåäíèå çíà÷åíèÿ çà ïğîöåññ "'.$this->idProcess.'"',100);
        $fileSender->send();
    }

     
}