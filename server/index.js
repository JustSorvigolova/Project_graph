const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express()

app.listen(5000, ()=>console.log('server started.....'))