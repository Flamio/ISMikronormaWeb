<?php
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
    
    public function answer($answer)
    {
        echo $answer;
    }
    
    
    public function flushMainPage($model)
    {
        $htmlMainPage = file_get_contents('templates/mainPage.html');
        $this->answer($htmlMainPage);
    }
}
