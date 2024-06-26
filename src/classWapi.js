class WapiBusiness {
    
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
        
        fetch(`https://graph.facebook.com/${this.version}/${this.wabaid}/phone_numbers`, options)
        .then((res)=>{
            if(res.status == '200'){
                return(res.json())
            } else{
                return (`${res.status} ${res.statusText}`)
            }
            
        })
        .then((obj)=>{
            console.log('-'.repeat(10) + 'All Business Numbers' + '-'.repeat(10))
            
            if(typeof(obj) == 'string'){
                describeError(obj)
                return
            }
            
            obj.data.map((numbers)=>{
                console.log(numbers)
            })
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
        .then((obj)=>{
            console.log('-'.repeat(10) + 'All Subscribed apps' + '-'.repeat(10))

            if(typeof(obj) == 'string'){
                describeError(obj)
                return
            }
            
            obj.data.map((apps)=>{
                console.log(apps.whatsapp_business_api_data) 
            })

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
        .then((obj)=>{
            console.log('-'.repeat(10) + 'Get all templates' + '-'.repeat(10))
            
            if(typeof(obj) == 'string'){
                describeError(obj)
                return
            }
            
            obj.data.map((tpl)=>{
                console.log(tpl) 
            })
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
            
            if(typeof(obj) == 'string'){
                describeError(obj)
                return
            }
            
            console.log(text)
            console.log('-'.repeat(40))
        })
    }


    
    sendMessageTo(text, to){
        const data = {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: to,
            text: { body: text },
        }

        var options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.bearer}`,
                'Content-Type': 'application/json',
            },            
            body: JSON.stringify(data)
        }

        
        fetch(`https://graph.facebook.com/${this.version}/${this.idNum}/messages`, options)
        .then((res)=>{
            return(res.json())
        })
        .then((obj)=>{
            console.log('-'.repeat(10) + 'send message to' + '-'.repeat(10))
            if(obj.error){
                alert(obj.error.error_data.details)    
            }
            console.log(obj)
            console.log('-'.repeat(40))

            if(obj.messaging_product){
                const dataRead = {
                    messaging_product: "whatsapp",
                    status: "read",
                    message_id: obj.messaging_product,
                }

                options.body = JSON.stringify(dataRead)
                
                fetch(`https://graph.facebook.com/${this.version}/${this.idNum}/messages`, options)
                .then((res)=>{
                    return(res.json())
                })
                .then((read)=>{
                    console.log('-'.repeat(10) + 'message marked as read' + '-'.repeat(10))
                    console.log(obj)
                    console.log('-'.repeat(40))
                })
            }

        })
    }


    
    isValid(number, message){
        if( isNaN(number) || number == '' || message == ''){
            return false
        } else{
            return true   
        }
    }
    
    
    
    #describeError(error){
        console.log(error)
    }

}