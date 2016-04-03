<?php
require_once 'adapters/HtmlOutputAdapter.php';
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
        $htmlAdapter = new HtmlOutputAdapter();
        $mainView->setProcesses($htmlAdapter->convertProcesses($this->mainModel->getAllProcesses()));
    }
}
