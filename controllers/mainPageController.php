<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class MainPageController
{
    private $mainModel;
    public function __construct($mainModel, $mainView) 
    {
        $this->mainModel = $mainModel;
        $mainView->setProcesses($this->mainModel->getAllProcesses());
    }
}
