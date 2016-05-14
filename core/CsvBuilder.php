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
            $counter = 0;
            foreach($row as $keyRow => $value)
            {
                $diff = $keyRow - $counter;  
                for ($i = 0; $i<$diff;$i++)
                {
                    $this->result.=" ;";
                }
                $value = iconv('utf-8','windows-1251',$value);
                $this->result.="{$value};";
                $counter++;
            }
            $this->result.="\n";
        }
    }

    public function getData()
    {
        return $this->result;
    }
    
}