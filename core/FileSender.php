<?php

/**
 * FileSender short summary.
 *
 * FileSender description.
 *
 * @version 1.0
 * @author Maksim
 */
class FileSender
{
    private $data;
    private $fileSize;
    private $fileName;

    public function __construct($data, $fileName, $fileSize)
    {
        $this->data = $data;
        $this->fileName = $fileName;
        $this->fileSize = $fileSize;
    }

    public function send()
    {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header("Content-Disposition: attachment; filename={$this->fileName}.csv");
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header("Content-Length: {$this->fileSize}");
        echo $this->data;
    }
}