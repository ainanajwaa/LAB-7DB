const MongoClient = require("mongodb").MongoClient;
const User = require("./user");

MongoClient.connect(
	// TODO: Connection
	"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.bitzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ useNewUrlParser: true },
).catch(err => {
	console.error(err.stack)
	process.exit(1)
}).then(async client => {
	console.log('Connected to MongoDB');
	User.injectDB(client);
})

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Post/Create
app.post('/new', async (req, res) => {
	console.log(req.body)
	const hotel = await User.register(req.body.booking, req.body.type, req.body.name,req.body.pass);
	res.json(hotel);
})

//Get/Read
app.get('/get', async (req, res) => {
	console.log(req.body)
	const hotel = await User.check(req.body.booking, req.body.type, req.body.name);
	res.json(hotel);
	});

//Patch/Update
app.patch('/update', async (req, res) => {
	console.log(req.body)
	const hotel = await User.update(req.body.booking, req.body.type, req.body.name);
	res.json(hotel)
})

//Delete/Delete
app.delete('/delete', async (req, res) => {
	console.log(req.body)
	const benr = await User.delete(req.body.booking, req.body.type, req.body.name);
	res.json(benr)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
