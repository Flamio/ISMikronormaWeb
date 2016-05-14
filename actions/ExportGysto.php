<?php

/**
 * ExportGysto short summary.
 *
 * ExportGysto description.
 *
 * @version 1.0
 * @author Maksim
 */


class ExportGysto extends abstractActions
{
    private $rows = array();
    private $idProcess;

    public function __construct($idProcess)
    {
        $this->idProcess = $idProcess;
        $this->rows[0][0] = " ";
        $operations = array();
        $approachesNames = array();
        $operationCountAction = new GetOperationsCount($idProcess);
        $approaches= $operationCountAction->getResult();
        foreach($approaches as $keyApproaches => $approach)
        {
            array_push($this->rows[0], $keyApproaches);
            array_push($approachesNames, $keyApproaches);
            foreach($approach as $keyOperation => $operation)
            {
               
                if ($operation['name'] != null)                
                    $operations[$keyOperation][$keyApproaches]['name'] = $operation['name'];
                $operations[$keyOperation][$keyApproaches]['count'] = $operation['count'];
            }
        }

        


        
        foreach($operations as $keyOperation => $operation)
        {
            $row  = array();
            $previousName = "";
            $counter = 1;
            foreach($approachesNames as $keyApproachName => $approachName)
            {
                if (!empty($operation[$approachName]['name']))
                {
                    $row[0] = $operation[$approachName]['name'];
                    $previousName = $row[0];
                }
                else if(!empty($previousName))
                {
                    $row[0] = $previousName;    
                }

                //array_push($row,$operation[$approachName]['count']);
                if (!empty($operation[$approachName]['count']))
                    $row[$counter] = $operation[$approachName]['count'];

                $counter++;
            }
            array_push($this->rows, $row);
        }

    }



    public function run()
    {
        $csvBuilder = new CsvBuilder($this->rows);
        $csvData = $csvBuilder->getData();

        $getProcessAction = new getProcessAction($this->idProcess);
        $processName = $getProcessAction->getResult();
        $processName = $processName[0]["processesname"];
        
        $fileSender = new FileSender($csvData,'Êîë-âî îïåğàöèé çà ïğîöåññ "'.$processName.'"',100);
        $fileSender->send();
    }
}