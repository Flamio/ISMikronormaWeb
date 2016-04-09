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
        foreach ($processes as $key => $value) 
        {
            $innerHtml.= ""
                    . "<tr id='process{$key}' onclick='onProcessesClick(this.id);return false;' class='process'>"
                    . " <td>{$value->name}</td>"
                    . "<td>{$value->comment}</td>"
                    . "<td>{$value->updated}</td>"
                    . "</tr>";
            foreach ($value->approaches as $keyApproach => $approach) 
            {
                $innerHtml.= ""
                    . "<tr id='approach{$keyApproach}' onclick='onProcessesClick(this.id);return false;' class='approach belongprocess{$key}'>"
                    . " <td>{$approach->name} <input type='hidden' value='{$approach->videoFileName}'></td>"
                    . "<td>{$approach->comment}</td>"
                    . "<td>{$approach->updated}</td>"
                    . "</tr>";
            }
        }
        return $innerHtml;
    }
    
    public function convertOperations($operations)
    {
        $innerHtml="";
        foreach ($operations as $key => $value) 
        {
            $innerHtml.= ""
                    . "<tr id='operation{$key}' onclick='onOperationsClick(this.id);' class='operation'>"
                    . " <td>{$value->name}</td>"
                    . " <td>&nbsp;</td>"
                    . " <td>&nbsp;</td>"
                    . " <td>&nbsp;</td>"
                    . "<td>{$value->updated}</td>"
                    . " <td>&nbsp;</td>"
                    . "</tr>";
        }
        return $innerHtml;
    }
}
