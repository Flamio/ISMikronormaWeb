<?php
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class MainPageController
{
    public function __construct($mainModel, $mainView) 
    {
        $mainView->flushMainPage($mainModel);
    }
    
}
