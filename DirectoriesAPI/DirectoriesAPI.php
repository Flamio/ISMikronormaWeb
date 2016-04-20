<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DirectoriesAPI
 *
 * @author maksim
 */
require_once 'IDirectoriesAPI.php';

class DirectoriesAPI implements IDirectoriesAPI
{
    private $disablingCert = array(
    "ssl" => array(
    "verify_peer"      => false,
    "verify_peer_name" => false,
    ),
   );
    
    private $templateUrl = "https://sa:46e6098e6637e6fb4de7b65a109c5a50@norma.istu.ru:8750";
    private function builUrl($path)
    {
        return $this->templateUrl.$path;
    }

    public function getAllDirectories() 
    {
        return file_get_contents($this->builUrl("/Specifications/nodes/27532/childs"), false,  stream_context_create($this->disablingCert));
    }

    public function getChildNodes($id) 
    {
        return file_get_contents($this->builUrl("/Specifications/nodes/{$id}/childs"), false,  stream_context_create($this->disablingCert));
    }
    
    public function getValues($id)
    {
        return file_get_contents($this->builUrl("/Specifications/nodes/{$id}/values"), false,  stream_context_create($this->disablingCert));
    }

}
