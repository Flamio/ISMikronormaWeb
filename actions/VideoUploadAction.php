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
        $this->file = $this->file['videoFile'];
        if (empty($this->file['tmp_name']))
        {
            $this->view->answer("
            <script language='javascript' type='text/javascript'>
                alert('Failed!');
            </script>");
            return;
        }

        $this->view->answer("
            <script language='javascript' type='text/javascript'>
                alert('{$_FILES['videoFile']['tmp_name']}');
            </script>   ");

        $approach = new Approach();
        $videofile = $approach->getValues(array("videoFilename"), "id={$this->get['approachId']}");
        $videofile = $videofile[0];
        @unlink($videofile['approachvideoFilename']);

        
        $hash = hash_file("md5",$this->file['tmp_name']);
        $filePath = "WorkingDirectory/{$hash}";
        move_uploaded_file($this->file['tmp_name'],$filePath);
        
        $approach->update(array($filePath), array('videoFilename'), "id={$this->get['approachId']}");
        $this->view->answer("
            <script language='javascript' type='text/javascript'>
                alert('Успешно!');
            </script>   ");
    }
}
