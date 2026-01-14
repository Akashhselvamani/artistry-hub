import { Resend } from 'resend';

export const handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
    console.log("BODY:", event.body);
    console.log("PARSED:", JSON.parse(event.body));
    const { fullName, email,phone, message } = JSON.parse(event.body || '{}');

    // console.log(name);
    // console.log(email);
    // console.log(message);
        
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ['saranyavikat@saranyavikartmakeover.art'],
      subject: 'New Contact Form',
      html: `
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p>${message}</p>
      `,
    });

    // const resend = new Resend('re_NeFwcJ48_PQ9BaspnnxYXFEmaqafdkFpQ');

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
