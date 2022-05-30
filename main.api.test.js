const supertest = require('supertest');
const request = supertest('http://localhost:3000');


const User = {
		booking: "12345678910MY",
		type: "Single Room",
		name: "Chris Evans",
		pass: "12345"
	}
describe('Express Route Test', function () {
	 it('POST', async () => {
	 	return request
			.post('/new')
	 		.send(User)
			.expect('Content-Type',/json/)
			.expect(200).then(res =>{
				expect(res.body).toEqual("Registration successful!")
			})
		});
	
     it('GET', async () => {
		return request
        .get('/get')
        .send(User)
        .expect('Content-Type', /json/)
        .expect(200).then(res => {
			expect(res.body).toEqual(
				false)
            
        })
	});

	it('PATCH', async () => {
		return request
       .patch('/update')
       .send(User)
       .expect('Content-Type', /json/)
       .expect(200).then(res => {
			expect(res.body).toEqual(false)
            
       })
	});

	it('DELETE', async () => {
		return request
        .delete('/delete')
        .send(User)
        .expect('Content-Type', /json/)
        .expect(200).then(res => {
			expect(res.body).toEqual("delete unsuccessfull")
            
        })
	});
});