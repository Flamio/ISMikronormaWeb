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

    private $get;
    private $file;

    public function __construct($file,$get) 
    {
        $this->file = $file;
        $this->get = $get;
    }
    public function run()
    {
        if (empty($this->file['videoFile']['tmp_name']))
        {
            $this->view->answer("failed");
        }
        $approach = new Approach();
        $videofile = $approach->getValues(array("videoFilename"), "id={$this->get['approachId']}");
        @unlink($videofile[0]['approachvideoFilename']);
        
        $hash = hash_file("md5",$this->file['videoFile']['tmp_name']);
        $filePath = "WorkingDirectory/{$hash}";
        move_uploaded_file($this->file['videoFile']['tmp_name'],$filePath);
        
        $approach->update(array($filePath), array('videoFilename'), "id={$this->get['approachId']}");
        $this->view->answer("
            <script language='javascript' type='text/javascript'>
                alert('Успешно!');
            </script>   ");
    }
}
