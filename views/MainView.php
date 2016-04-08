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
    
   
    public function setProcesses($processes)
    {
        $this->html->getElementById("processTableBody")->innertext = $processes ;
        echo $this->html;
    }
    
    public function answer($answer)
    {
        echo $answer;
    }
    
    public function loadTemplate()
    {
        $this->html = file_get_html('templates/mainPage.html');
    }
}
