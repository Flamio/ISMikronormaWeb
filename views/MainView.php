<?php
require_once 'lib/simplehtmldom_1_5/simple_html_dom.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of MainView
 *
 * @author maksim
 */
class MainView 
{
    private $html;
    
    public function __construct() 
    {
        $this->html = file_get_html('templates/mainPage.html');
    }
    
    public function setProcesses($processes)
    {
        $innerHtml="";
        foreach ($processes as $key => $value) 
        {
            $innerHtml.= ""
                    . "<tr id='process{$key}' class='process'>"
                    . " <td>{$value->name}</td>"
                    . "<td>{$value->comment}</td>"
                    . "<td>{$value->updated}</td>"
                    . "</tr>";
            foreach ($value->approaches as $keyApproach => $approach) 
            {
                $innerHtml.= ""
                    . "<tr id='approach{$keyApproach}' class='approach'>"
                    . " <td>{$approach->name}</td>"
                    . "<td>{$approach->comment}</td>"
                    . "<td>{$approach->updated}</td>"
                    . "</tr>";
            }
        }
        $this->html->getElementById("processTableBody")->innertext = $innerHtml ;
        echo $this->html;
    }
}
