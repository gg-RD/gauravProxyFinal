const express = require('express');
const morgan = require('morgan');
const request = require('request');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/flyknit', function(req, res){
		// send client side data from db to http://localhost:3003/flyknit
		const options = {
			url: 'http://ec2-18-222-153-53.us-east-2.compute.amazonaws.com/flyknit'
		}

		request(options, (error, response, body) => {
			res.send(body);
		});
	})


app.get('/shoes/shoe', function(req, res){
    const options = {
      url: 'http://ec2-18-222-248-171.us-east-2.compute.amazonaws.com/shoes/shoe'
    }
    request(options, (error, response, body) => {
      res.send(body);
    });
})
app.post('/shoes/shoe', function(req, res){
    const options = {
      url: 'http://ec2-18-222-248-171.us-east-2.compute.amazonaws.com/shoes/shoe'
    }
    request(options, (error, response, body) => {
      res.send(body);
    });
})

app.get('/description/air_force_1', function(req, res){
  const options = {
    url: 'http://ec2-52-53-149-223.us-west-1.compute.amazonaws.com/description'
  }
  
  request(options, (error, response, body) => {
    res.send(body)
  })

});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});