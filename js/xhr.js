/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xhr = 
{
    getXmlHttp: function()
    {
          var xmlhttp;
            try {
              xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
              try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
              } catch (E) {
                xmlhttp = false;
              }
            }
            if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
              xmlhttp = new XMLHttpRequest();
            }
            return xmlhttp;
     },
              
    getAjaxData: function(view,url, request, onResponse)
    {
        var req = this.getXmlHttp();
        req.onreadystatechange = function() 
        {
            if (req.readyState == 4) 
            {
                if(req.status == 200) 
                {
                    if (onResponse!=null)
                    {
                        view.closeDialog('load');
			            console.log(req.responseText);
                        onResponse(JSON.parse(req.responseText));
                    }
                }
            }
        }
        view.openDialog('load');
        req.open('POST', url, true); 
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        req.send(request);
    }
}
