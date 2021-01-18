const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: [process.env.GMAIL_USR], pass: [process.env.GMAIL_PW] },
  });

  const cleanString = (string) => (string ? string.toString() : 'no value');
  const validEmail = () => {
    const rx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return rx.test(data.email)
      ? cleanString(data.email)
      : 'invalid email address';
  };

  if (data.nm_key === process.env.NM_KEY) {
    transporter.sendMail(
      {
        from: [process.env.GMAIL_USR],
        to: [process.env.MAIL_RECIPIENT],
        subject: `Subject: ${data.subject} From: ${cleanString(data.name)}`,
        html: `
      <h3>From: ${cleanString(data.name)}</h3>
      
      <p>Reply to: ${validEmail()}</p>

      <p>Message: ${cleanString(data.message)}</p>

      <p>---------------</p>

      <p>This is an automatically generated message</p>
      `,
      },
      function (error, info) {
        if (error) {
          callback(error);
        } else {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              result: 'success',
            }),
          });
        }
      }
    );
  } else {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({
        result: 'unauthorized',
      }),
    });
  }
};
