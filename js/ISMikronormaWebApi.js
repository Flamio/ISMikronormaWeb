/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ISMikronormaWebApi =
{
    getOperationsCount: function(processId, onAnswer)
    {
         xhr.getAjaxData(view,"api.php?action=getOperationsCount&id="+processId, null, onAnswer);  
    },
    getAvarageTimePerProcess: function (processId, onAnswer) 
    {
	 xhr.getAjaxData(view,"api.php?action=getAverageTimePerProcess&id="+processId, null, onAnswer);  
    },
    getLastOperationPosition: function(idApproach,onAnswer)
    {
        xhr.getAjaxData(view,"api.php?action=getLastOperationPosition&idApproach="+idApproach,"",onAnswer);
    },
    
    getAllDirectories: function(onAnswer)
    {
        xhr.getAjaxData(view,"api.php?directories=getAllDirectories","",onAnswer);
    },
    
    getChilds: function(id,onAnswer)
    {
        xhr.getAjaxData(view,"api.php?directories=getChilds","id="+id,onAnswer);
    },
    
    getProcessesAndApproaches: function(onAnswer)
    {
        xhr.getAjaxData(view,"api.php?action=3","",onAnswer);
    },
    addProcess: function(name,comment,directory,onAnswer)
    {
        xhr.getAjaxData(view, "api.php?action=2", "name=" + name + "&comment=" + comment + "&directory=" + directory, onAnswer);
    },
    
    loadVariants: function(idApproach,onAnswer)
    {
        xhr.getAjaxData(view, "api.php?action=1", "approachId=" + idApproach, onAnswer);
    },
    addApproach: function(name,comment,idProcess,onAnswer)
    {
        xhr.getAjaxData(view, "api.php?action=addApproach", "name=" + name + "&comment=" + comment + "&idProcess=" + idProcess, onAnswer);
    },
    
    updateApproach: function(id,name,comment, onAnswer)
    {
        xhr.getAjaxData(view, "api.php?action=updateApproach&id=" + id, "name=" + name + "&comment=" + comment, onAnswer);
    },
    
    updateProcess: function (id,name,comment,directory,onAnswer)
    {
        xhr.getAjaxData(view, "api.php?action=updateProcess&id=" + id, "name=" + name + "&comment=" + comment + "&directory=" + directory, onAnswer);
    },
    getApproach: function(id,onAnswer)
    {
        xhr.getAjaxData(view, "api.php?action=getApproach&id=" + id, null, onAnswer);
    },
    getProcess: function(id,onAnswer)
    {
        xhr.getAjaxData(view, "api.php?action=getProcess&id=" + id, null, onAnswer);
    },
    addOperation: function(idApproach, comment, name, directoriesValueId, calcTime, actualTime, position, onAnswerFunc)
    {
        xhr.getAjaxData(view, "api.php?action=addOperation", "calcTime=" + calcTime + "&idApproach=" + idApproach + "&comment=" + comment + "&name=" + name + "&directoriesValueId=" + directoriesValueId + "&actualTime=" + actualTime + "&position=" + position, onAnswerFunc);
    },
    exportAvarage: function(idProcess)
    {
        window.location = "api.php?action=exportAnalysis&id=" + idProcess;
    },

    exportGysto: function(idProcess)
    {
        window.location = "api.php?action=exportGysto&id=" + idProcess;
    }
}
