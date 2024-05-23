import WapiBusiness from './classWapi.js'

const id = '103785315793824'
const wabaid = '102818189225798'
const version = 'v19.0'
const bearer = 'EAAORpbNZAEZAQBO3uGR4VIIvT6gxCkpYHtAiVnXy1n1DIo52BL7fK2Fxgz3m3FzZACcu5O2OtecJ8GC5eBSVeUIu8Py8kK9ulvalCgE08nMKIZAgwkjC1UG3NJOuDMIdNfdDhsevUG1t23Fs9ZCe2E4SfIDzZBMV4XvT3Sru7w0jI8yxRxKvmlNPhkDZAPFZCR3ajH3EDQWOP3UjAZBlyLkgm'

const apiTest = new WapiBusiness(id, wabaid, version, bearer)

apiTest.getInfoAccount()
//apiTest.getAllBusinessNumbers()