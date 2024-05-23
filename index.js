import WapiBusiness from './classWapi.js'

const id = ''
const wabaid = ''
const version = ''
const bearer = ''

const apiTest = new WapiBusiness(id, wabaid, version, bearer)

//apiTest.getInfoAccount()
//apiTest.getAllBusinessNumbers()
//apiTest.getSubscribedApps()
//apiTest.getAllTemplates()
apiTest.whatsappBusinessMessaging()