
var partOfVideo = 
{
}

var model = 
{
    currentProcess: -1,
    currentApproach: -1,
    isVideoPlaying: false,
    partsOfVideo:[],
    
    getAllDirectories: function(answerFunc)
    {
       ISMikronormaWebApi.getAllDirectories(answerFunc);
    },
    loadProcessesAndApproaches: function (answerFunc)
    {
        ISMikronormaWebApi.getProcessesAndApproaches(answerFunc);
    },
    addProcess: function (name,comment, directory,answerFunc)
    {
        ISMikronormaWebApi.addProcess(name,comment,directory,answerFunc);
    },
    
    addApproach: function(name,comment,onAnswer)
    {
       ISMikronormaWebApi.addApproach(name,comment,this.currentProcess,onAnswer);
    },
    
    getApproach:function(id,onAnswer)
    {
        ISMikronormaWebApi.getApproach(id,onAnswer);
    },
    
    getProcess:function(id,onAnswer)
    {
        ISMikronormaWebApi.getProcess(id,onAnswer);
    },
    
    updateProcess: function(name, comment, directory, onAnswer)
    {
        ISMikronormaWebApi.updateProcess(this.currentProcess,name,comment, directory,onAnswer);
    },
    
    updateApproach: function(name, comment, onAnswer)
    {
        ISMikronormaWebApi.updateApproach(this.currentApproach,name,comment,onAnswer);
    },
    
    
    loadVariants: function(idApproach, answerFunc)
    {
        ISMikronormaWebApi.loadVariants(idApproach,answerFunc);
    }
    
}
