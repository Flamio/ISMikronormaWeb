/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ISMikronormaWebApi =
{
    getProcessesAndApproaches: function(onAnswer)
    {
        xhr.getAjaxData("api.php?action=3","",onAnswer);
    },
    addProcess: function(name,comment,onAnswer)
    {
        xhr.getAjaxData("api.php?action=2", "name="+name+"&comment="+comment, onAnswer);
    },
    
    loadVariants: function(idApproach,onAnswer)
    {
        xhr.getAjaxData("api.php?action=1","approachId="+idApproach,onAnswer);
    },
    addApproach: function(name,comment,idProcess,onAnswer)
    {
        xhr.getAjaxData("api.php?action=addApproach", "name="+name+"&comment="+comment+"&idProcess="+idProcess, onAnswer);
    },
    
    updateApproach: function(id,name,comment, onAnswer)
    {
        xhr.getAjaxData("api.php?action=updateApproach&id="+id,"name="+name+"&comment="+comment,onAnswer);
    },
    
    updateProcess: function (id,name,comment,onAnswer)
    {
        xhr.getAjaxData("api.php?action=updateProcess&id="+id,"name="+name+"&comment="+comment, onAnswer);
    },
    getApproach: function(id,onAnswer)
    {
        xhr.getAjaxData("api.php?action=getApproach&id="+id,null,onAnswer);
    },
    getProcess: function(id,onAnswer)
    {
        xhr.getAjaxData("api.php?action=getProcess&id="+id,null,onAnswer);
    }
}
