<?php

/**
 * CsvBuilder short summary.
 *
 * CsvBuilder description.
 *
 * @version 1.0
 * @author Maksim
 */
class CsvBuilder
{
    private $result;
    public function __construct($rows)
    {
        foreach ($rows as $key => $row) 
        {
            foreach($row as $keyRow => $value)
            {
                $this->result.="{$value};";
            }
            $this->result.="\n";
        }
    }

    public function getData()
    {
        return $this->result;
    }
    
}