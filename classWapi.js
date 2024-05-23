export default class WapiBusiness {
    
    constructor(idNum, wabaid, version, bearer){
        this.idNum = idNum
        this.wabaid = wabaid
        this.version = version
        this.bearer = bearer
    }


    /// Retorna informações da conta/numero /API Business
    getInfoAccount(){
        var options = {
            headers: {
                Authorization: `Bearer ${this.bearer}`,
            }
        }
        
        fetch(`https://graph.facebook.com/${this.version}/${this.idNum}`, options)
        .then((res)=>{
            if(res.status == '200'){
                return(res.json())
            } else{
                return (`${res.status} ${res.statusText}`)
            }
            
        })
        .then((text)=>{
            console.log('-'.repeat(10) + 'Info Account' + '-'.repeat(10))
            console.log(text)
            console.log('-'.repeat(40))
        })
    }


    // Retorna todos os numero da conta que são do whatsapp business
    getAllBusinessNumbers(){
        var options = {
            headers: {
                Authorization: `Bearer ${this.bearer}`,
            }
        }
        
        fetch(`https://graph.facebook.com/${this.version}/${this.wabaid}`, options)
        .then((res)=>{
            if(res.status == '200'){
                return(res.json())
            } else{
                return (`${res.status} ${res.statusText}`)
            }
            
        })
        .then((text)=>{
            console.log('-'.repeat(10) + 'All Business Numbers' + '-'.repeat(10))
            console.log(text)
            console.log('-'.repeat(40))
        })
    }

    getSubscribedApps(){
        var options = {
            headers: {
                Authorization: `Bearer ${this.bearer}`,
            }
        }

        fetch(`https://graph.facebook.com/${this.version}/${this.wabaid}/subscribed_apps`, options)
        .then((res)=>{
            if(res.status == '200'){
                return(res.json())
            } else{
                return (`${res.status} ${res.statusText}`)
            }
            
        })
        .then((text)=>{
            console.log('-'.repeat(10) + 'All Business Numbers' + '-'.repeat(10))
            console.log(text.data)
            console.log('-'.repeat(40))
        })
    }

    getAllTemplates(){
        var options = {
            headers: {
                Authorization: `Bearer ${this.bearer}`,
            }
        }

        fetch(`https://graph.facebook.com/${this.version}/${this.wabaid}/message_templates`, options)
        .then((res)=>{
            if(res.status == '200'){
                return(res.json())
            } else{
                return (`${res.status} ${res.statusText}`)
            }
            
        })
        .then((text)=>{
            console.log('-'.repeat(10) + 'Get all templates' + '-'.repeat(10))
            console.log(text)
            console.log('-'.repeat(40))
        })
    }


    whatsappBusinessMessaging(){
        var options = {
            headers: {
                Authorization: `Bearer ${this.bearer}`,
            }
        }

        fetch(`https://graph.facebook.com/${this.version}/${this.wabaid}/whatsapp_business_messaging`, options)
        .then((res)=>{
            if(res.status == '200'){
                return(res.json())
            } else{
                return (`${res.status} ${res.statusText}`)
            }
            
        })
        .then((text)=>{
            console.log('-'.repeat(10) + 'All messages' + '-'.repeat(10))
            console.log(text)
            console.log('-'.repeat(40))
        })
    }

}