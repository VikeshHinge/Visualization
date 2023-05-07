const express = require ('express')
const {connection} = require('./Connection/db.js')
const {dataRoute} = require('./routs/DataRoutes.js')
const cors = require('cors')

const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json())

app.use('/data',dataRoute)

app.listen(4040, async()=>{
    try{
       await connection;
       console.log('DB is Connected')
    }
    catch(err){
        console.log(err)
    }
    console.log('server running on 4040')
})