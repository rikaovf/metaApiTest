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

function sendMessageTo(){
    const numero = document.getElementById('number')
    const mensagem = document.getElementById('msg')
    
    if(apiTest.isValid(numero.value, mensagem.value)){
        apiTest.sendMessageTo(mensagem.value, numero.value)
        
        mensagem.value = ''
    } else{
        alert("Existem inconsistências nos parâmetros de mensagens. Confira e envie novamente!")
        
        numero.value = ''
    }
    
}