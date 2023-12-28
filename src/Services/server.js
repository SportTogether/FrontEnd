// server.js
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Điều hướng GET cho trang chính
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Điều hướng POST để xử lý gửi email
app.post('/send-email', (req, res) => {
    const { username, phone, email, address, content } = req.body;
    // Thiết lập thông tin email và gửi nó
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'akwiuit2023@gmail.com',
            pass: 'deptraicogisai',
        },
    });

    const mailOptions = {
        from: 'akwiuit2023@gmail.com',
        to: email,
        subject: 'Test Send Mail',
        text: <>
            <h1>Hello My Name is {username}</h1>
            <h1>Hello My Phone Number is {phone}</h1>
            <h1>Hello My Address is {address}</h1>
            <h1>My complain is {content}</h1>
        </>,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
