const express = require('express')
const cookieParser = require('cookie-parser')()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express();



app.use(cookieParser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const options = {
    username: 'pushsms',
    apiKey: '57d552a23557ec7a4a3e15ef86c38105126d4d9ec873177d6dce02e763f53946',

};
const AfricasTalking = require('africastalking')(options);
var sms = AfricasTalking.SMS;

app.post('/smsnotify', function (req, res) {

    console.log(req.body)
    if (!req.body.phones) {
        res.status(422).send({ "message": "phones is missing" })
    }
    else {
        const optionn = {
            from: "INUUA",
            to: req.body.phones,
            message: "BEST PRICE Quality \n Cement KP SILVER  Mombasa Cement  510/-  \n Ex-Factory Athi River  540/-  \n Delivered Nairobi Area    \n MinOrder:200 bags  \nwww.offers.inuua.net Tel:  0701220004  Inuua Office "
        }

        try {
            sms.send(optionn)
                .then(re => console.log(re))
                .catch(err => console.log(`error${err}`))

        } catch (error) {
            console.log(error)
        }


    }

})


app.post('/testmail', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.seamlessbooking.co.za',
        port: 26,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'no-reply@seamlessbooking.co.za', // generated ethereal user
            pass: 'Noahjames2012'// generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    transporter.sendMail({
        from: '"Seamless Booking 👻" no-reply@seamlessbooking.co.za', // sender address
        to: 'heidikrau@gmail.com, Ejgithinji@gmail.com', // list of receivers
        subject: 'Hello 😃 FromSeamless Booking', // Subject line
        text: 'Hello world?', // plain text body
        html: '<html xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <head>
        < meta name = "viewport" content = "width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Actionable emails e.g. reset password</title>
    <style type="text/css">
        img {
            max - width: 100%;
        }
        body {
            -webkit - font - smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
        }
        body {
            background - color: #f6f6f6;
        }
        @media only screen and (max-width: 640px) {
            body {
            padding: 0 !important;
      }
          h1 {
            font - weight: 800 !important; margin: 20px 0 5px !important;
      }
          h2 {
            font - weight: 800 !important; margin: 20px 0 5px !important;
      }
          h3 {
            font - weight: 800 !important; margin: 20px 0 5px !important;
      }
          h4 {
            font - weight: 800 !important; margin: 20px 0 5px !important;
      }
          h1 {
            font - size: 22px !important;
      }
          h2 {
            font - size: 18px !important;
      }
          h3 {
            font - size: 16px !important;
      }
          .container {
            padding: 0 !important; width: 100% !important;
      }
          .content {
            padding: 0 !important;
      }
          .content-wrap {
            padding: 10px !important;
      }
          .invoice {
            width: 100% !important;
      }
    }
        </style>
        </head >

        <body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

            <table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
                <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
                    <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                        <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                            <meta itemprop="name" content="Confirm Email" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" /><table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                Please confirm your email address by clicking the link below.
                                            </td>
                            </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                We may need to send you critical information about our service and it is important that we have an accurate email address.
                                            </td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                    <a href="http://www.mailgun.com" class="btn-primary" itemprop="url" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">Confirm email address</a>
                                </td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                                    &mdash; The Mailgunners
                                            </td>
                                </tr></table></td>
                        </tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
                            <table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">Follow <a href="http://twitter.com/mail_gun" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">@Mail_Gun</a> on Twitter.</td>
                            </tr></table></div></div>
                </td>
                <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
            </tr></table></body>
        </html > ' 
    })
    .then(work => console.log(work))
    .catch(error => console.log(error))

})
app.listen(3000, () => console.log(`app listening on port 3000!`))