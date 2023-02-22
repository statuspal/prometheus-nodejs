const express = require('express')
const promBundle = require("express-prom-bundle");

const app = express()
const metricsMiddleware = promBundle({includeMethod: true});
const port = 3000

app.use(metricsMiddleware);

app.get('/', (req, res) => {
  res.send('I\'m generating Prometheus metrics!')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})