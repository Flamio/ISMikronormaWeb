<?php
require_once 'consts/DataBaseConnectionConsts.php';
require_once 'structs/ApproachesStruct.php';
require_once 'structs/ProcessesStruct.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of dataBaseConnection
 *
 * @author maksim
 */
class DataBaseConnection 
{
    private $database;
    
    public function __construct() 
    {
        $this->database = mysql_connect(DataBaseConnectionConsts::server, DataBaseConnectionConsts::username, DataBaseConnectionConsts::password);
        mysql_select_db("ISMikronormaDB",  $this->database);
    }
    
    public function getProcesses()
    {
        $query = "select Approach.`name` as approachName, Processes.`Name` as processesName, Processes.Comment as processesComment, 
                    Processes.id as processId,Approach.comment as approachComment, Approach.updated as approachUpdated,
                    Processes.updated as processUpdated,
                    Approach.id as approachId from Processes left join Approach on Processes.id=Approach.idProcess
                    ";
        $result = mysql_query($query,$this->database);
        
        $processes = Array();
        
        while ($row = mysql_fetch_assoc($result))
        {
            if (!isset($processes[$row['processId']]))
            {
                $processes[$row['processId']] = new ProcessesStruct();
            }
            $processes[$row['processId']]->comment = $row['processesComment'];
            $processes[$row['processId']]->name = $row['processesName'];
            $processes[$row['processId']]->updated = $row['processUpdated'];
            
            if (!isset($processes[$row['processId']]->approaches[$row['approachId']]))
            {
                $processes[$row['processId']]->approaches[$row['approachId']] = new ApproachesStruct();
            }
            $processes[$row['processId']]->approaches[$row['approachId']]->name = $row['approachName'];
            $processes[$row['processId']]->approaches[$row['approachId']]->comment = $row['approachComment'];
            $processes[$row['processId']]->approaches[$row['approachId']]->updated = $row['approachUpdated'];
            
            
        }
        return $processes;
        
    }
}
