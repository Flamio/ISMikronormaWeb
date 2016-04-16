
var partOfVideo = 
{
}

var model = 
{
    currentProcess: -1,
    currentApproach: -1,
    isVideoPlaying: false,
    partsOfVideo:[],
    
    loadProcessesAndApproaches: function (answerFunc)
    {
        ISMikronormaWebApi.getProcessesAndApproaches(answerFunc);
    },
    addProcess: function (name,comment,answerFunc)
    {
        ISMikronormaWebApi.addProcess(name,comment,answerFunc);
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
    
    updateProcess: function(name, comment, onAnswer)
    {
        ISMikronormaWebApi.updateProcess(this.currentProcess,name,comment,onAnswer);
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
