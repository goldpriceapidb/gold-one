const nodemailer = require("nodemailer");
exports.handler = async (event, context, callback) => {

  let data  = JSON.parse(event.body)
  const date = new Date();

  console.log("data : " ,data)
  if(!(data.email && data.name && data.type && data.phone && data.query)) {
    return {
      statusCode: 200,
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
        /* Required for cookies, authorization headers with HTTPS */
        'Access-Control-Allow-Credentials': true
      }, 
      body: JSON.stringify(
        {
          success:false,
          message: 'Fill the form properly or contact admin',
        }
      ),
    };
  }


  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // port: 465,
    secure: true,
    auth: {
      user: '',
      pass: ''
    },
    logger: true,
    tls: {
      rejectUnauthorized: false
  }
  
  });

  // console.log("Transporter : ",transporter)

  let message = `
      <div style="color:#4b337f; width:100vw; padding-bottom: 1rem;">
      <div style="margin-bottom:40px;padding:10px; background-color:#4b337f; width:100%;">
          <img src="cid:logoSinewave" alt="Sinewave Creatives" height="68" width="196">
      </div>
      <div style="padding-left:50px; margin-bottom: 40px;">
          <table style="margin-top:20px;font-size:1.3rem;">
              <tr>
                  <td>Name  </td>
                  <td>: `+data.name+`</td>
              </tr>
              <tr>
                  <td>Phone  </td>
                  <td>: `+data.phone+`</td>
              </tr>
              <tr>
                  <td>Email  </td>
                  <td>: `+data.email+`</td>
              </tr>
              <tr>
                  <td>Type  </td>
                  <td>: `+data.type+`</td>
              </tr>
            
              <tr>
                <td>Query  </td>
                <td>: `+data.query+`</td>
              </tr>

              <tr>
                  <td>Date  </td>
                  <td>: `+date.toDateString()+`</td>
              </tr>
          </table>
      </div>
    </div>
  `
  
  const mailOptions = {
    from: 'vinokrish001@gmail.com',
    to: 'vinokrish001@gmail.com',
    // to: 'vinokrish001@gmail.com,sud@sinewave.design',
    subject: 'Sinewave Enquiry from '+data.name+' ( '+data.type+' ) + Website Testing',
    attachments: [{
      filename: 'insta.png',
      path: `https://sinewavedemo.netlify.com/logo.png`,
      cid: 'logoSinewave' //same cid value as in the html img src

    }],
    html: message,

  };
  
  // This await is the goldd 
  await transporter.sendMail(mailOptions);


  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(
      {
        success:true,
        message: 'Mail sent successfully L3 , we will soon reachout to you!',
      }
    ),
  };


};