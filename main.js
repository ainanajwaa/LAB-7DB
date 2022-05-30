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
	// if (search == null){
	// 	console.log('Not Registered!')
	// 	res.status(401).send({
	// 		error: "Not Registered!"
	// 	})
	// 	}
	// else{
	// 	console.log("Booking is successfully registered")
	// 	res.status(200).json({
	// 		booking: search[0].booking,
	// 		type: search[0].type,
	// 		name: search[0].name

	// 	})
	// }
})

//Get/Read
app.get('/get', async (req, res) => {
	console.log(req.body)
	const hotel = await User.check(req.body.booking, req.body.type, req.body.name);
	res.json(hotel);
	// if (search == null){
	// 	console.log('No registration found!')
	// 	res.status(404).json()
	// 	}	
	// else{
	// 	console.log("Registration found")
	// 	res.status(200).json({
	// 		booking: search[0].booking,
	// 		type: search[0].type,
	// 		name: search[0].name

	// 	})
	// }
	});

//Patch/Update
app.patch('/update', async (req, res) => {
	console.log(req.body)
	const hotel = await User.update(req.body.booking, req.body.type, req.body.name);
	res.json(hotel)
	// if (search == null){
	// 	console.log('Booking not found')
	// 	res.status(401).send({
	// 		error: "No booking updated!"
	// 	})
	// 	}	
	// else{
	// 	console.log("Booking is successfully updated")
	// 	res.status(200).json({
	// 		booking: search[0].booking,
	// 		type: search[0].type,
	// 		name: search[0].name

	// 	})
	// }
})

//Delete/Delete
app.delete('/delete', async (req, res) => {
	console.log(req.body)
	const benr = await User.delete(req.body.booking, req.body.type, req.body.name);
	res.json(benr)
	// if (benr == null){
	// 	console.log('Booking not found')
	// 	res.status(404).send({
	// 		error: "No booking found!"
	// 	})
	// 	}	
	// else{
	// 	console.log("Booking deleted")
	// 	res.status(200).json({
	// 		booking: search[0].booking,
	// 		type: search[0].type,
	// 		name: search[0].name

	// 	})
	// }
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})