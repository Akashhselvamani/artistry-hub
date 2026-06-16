import { Resend } from 'resend';

export const handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
    //console.log("BODY:", event.body);
    //console.log("PARSED:", JSON.parse(event.body));
    const { fullName, phone, email, eventDate, eventType, message } = JSON.parse(event.body || '{}');

    // console.log(fullName);
    // console.log(email);
    // console.log(phone);
    // console.log(message);
    //console.log(process.env.RESEND_API_KEY); 
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      //to: ['saranyavikat@saranyavikartmakeover.art'],
      to: ['saranyavikart@gmail.com'],
      subject: 'New Event Details',
      html: `
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email Address:</b> ${email}</p>
        <p><b>Wedding / Event Date:</b> ${eventDate}</p>
        <p><b>Required Makeup</b> ${eventType}</p>
       <p><b>Event Details:</b>  ${message}</p>
      `,
    });

    // const resend = new Resend('re_CpPKuefM_wtx8GoVQmoFPijpTNCvWnKV2');

    // await resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to: ['akashselva11@gmail.com'],
    //   subject: 'hello world',
    //   html: '<p>it works!</p>',
    // });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Send mail error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
