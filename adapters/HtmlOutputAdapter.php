<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of HtmlOutputAdapter
 *
 * @author maksim
 */
class HtmlOutputAdapter 
{
    public function convertProcesses($processes) 
    {
        $innerHtml=""; 
        $procesIds = array();
        foreach ($processes as $key => $value) 
        {
            if (!in_array($value['processesid'],$procesIds))
            {
                $innerHtml.= ""
                    . "<tr id='process{$value['processesid']}' onclick='onProcessesClick(this.id);return false;' class='process'>"
                    . " <td>{$value['processesname']}</td>"
                    . "<td>{$value['processescomment']}</td>"
                    . "<td>{$value['processesupdated']}</td>"
                    . "</tr>";
                array_push($procesIds, $value['processesid']);
            }
            
            if ($value['approachid']!="")            
            {$innerHtml.= ""
                    . "<tr id='approach{$value['approachid']}' onclick='onProcessesClick(this.id);return false;' class='approach'>"
                    . " <td>{$value['approachname']}</td>"
                    . "<td>{$value['approachcomment']}</td>"
                    . "<td>{$value['approachupdated']}</td>"
                    . "</tr>";
            }
        }
        return $innerHtml;
    }
}
