const express = require('express')
const yaml = require('js-yaml')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true, limit: '50mb' })) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/convert', (req, res)=>{
	var str=req.body;
	var contract = Object.keys(str)[0];
	var data = yaml.load(contract);
	console.log(JSON.stringify(data, null, 2).length)
	Object.values(data.paths).forEach(path=> {
	    Object.values(path).forEach(op=>{
	      delete op.responses;
	      delete op.security;
	      op.summary=op.operationId;
	    })
	  })
	var json = JSON.stringify(data, null, 2);
	res.send(json)
	
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
