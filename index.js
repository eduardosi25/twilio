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
let port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.post('',(req,res)=>{
    // const twiml = new messaingResponse();
    // twiml.message('He recibido tu mensaje');
    // res.writeHead(200,{'Content-Type': 'text/xml'});
    // res.end(twiml.toString());
     res.send("hello");
 })
app.post('/sms',(req,res)=>{
   // const twiml = new messaingResponse();
   // twiml.message('He recibido tu mensaje');
   // res.writeHead(200,{'Content-Type': 'text/xml'});
   // res.end(twiml.toString());
   console.log("req",req)
   console.log("res",res)
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
             to: 'whatsapp:+525545883023' 
           }) 
          .then(message => console.log(message.sid)) 
          .done();
    
     res.end("SE ENVIO MENSAJE");
 })

 app.listen(port, () => {
    console.log("App is running on port " + port);
});
