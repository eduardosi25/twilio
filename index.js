require('dotenv').config()
//console.log(process.ev.TO_NUMBER)
const express= require('express')
const morgan= require('morgan')
const messaingResponse = require('twilio').twiml.MessagingResponse;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const my_phone = process.env.TO_NUMBER
const from_phone = process.env.FROM_NUMBER
const app = express();
app.use(morgan('dev'));
app.post('/sms',(req,res)=>{
   // const twiml = new messaingResponse();
   // twiml.message('He recibido tu mensaje');
   // res.writeHead(200,{'Content-Type': 'text/xml'});
   // res.end(twiml.toString());
   const client = require('twilio')(accountSid, authToken);

        console.log(from_phone)
        client.messages 
            .create({         
                to: my_phone,
                from:from_phone,
                body: 'Hello edu!'
            }) 
            .then(message => console.log(message.sid)) 
            .done();
    res.end("SE ENVIO MENSAJE");
})

app.post('/whats',(req,res)=>{
    // const twiml = new messaingResponse();
    // twiml.message('He recibido tu mensaje');
    // res.writeHead(200,{'Content-Type': 'text/xml'});
    // res.end(twiml.toString());

    const client = require('twilio')(accountSid, authToken); 
     
    client.messages 
          .create({ 
             body: 'Your appointment is coming up on July 21 at 3PM', 
             from: 'whatsapp:+14155238886',       
             to: 'whatsapp:+5215545883023' 
           }) 
          .then(message => console.log(message.sid)) 
          .done();
    
     res.end("SE ENVIO MENSAJE");
 })



app.listen(4000,()=> {
console.log('server on port 4000')

})

