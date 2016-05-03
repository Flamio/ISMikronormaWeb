<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author maksim
 */
interface IDirectoriesAPI 
{
    function getAllDirectories();
    function getChildNodes($id);
    function getValues($id);
}
