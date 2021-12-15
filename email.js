"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing


    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', //configuracion echa desde account de gmail  constraseña de app generadas
        port: 465,
        auth: {
            user: 'kevin.revelo@correounivalle.edu.co',
            pass: 'uzcsarlmacxmexfv'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'kevin.revelo@correounivalle.edu.co', // sender address
        to: "kevinreve096@gmail.com", // list of receivers
        subject: "nuevo mensaje para ti", // Subject line
        text: "hola como estas", // plain text body
        html: "<b>hola como estas</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
