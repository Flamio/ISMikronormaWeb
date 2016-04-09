<?php
require_once 'abstractActions.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of VideoUploadAction
 *
 * @author Maksim
 */
class VideoUploadAction extends abstractActions
{

    private $file;

    public function __construct($file) 
    {
        $this->file = $file;
    }
    public function run()
    {
        if (empty($this->file['videoFile']['tmp_name']))
        {
            return;
        }
        $hash = hash_file("md5",$this->file['videoFile']['tmp_name']);
        move_uploaded_file($this->file['videoFile']['tmp_name'],"WorkingDirectory/{$hash}");
        header("Location:{$_SERVER['HTTP_REFERER']}");
    }
}
