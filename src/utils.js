var config = new Object()
var apiTest = new Object()


fetch('../config/config.json')
.then((data)=>{
    return(data.json())
})
.then((obj)=>{
    config = obj
    apiTest = new WapiBusiness(config.id, config.wabaid, config.version, config.bearer)
})


function getInfoAccount() {
    apiTest.getInfoAccount()
}

function getAllBusinessNumbers(){
    apiTest.getAllBusinessNumbers()
}

function getSubscribedApps(){
    apiTest.getSubscribedApps()
}

function getAllTemplates(){
    apiTest.getAllTemplates()
}

function whatsappBusinessMessaging(){
    apiTest.whatsappBusinessMessaging()
}