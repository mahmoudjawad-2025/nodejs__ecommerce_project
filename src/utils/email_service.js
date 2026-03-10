import nodemailer from "nodemailer";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  sendEmail

export async function sendEmail(to, subject, html) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: `"${process.env.project_title || 'Ecommerce App'}" <${process.env.EMAIL_USER || 'no-reply@example.com'}>`,
        to,
        subject,
        html,
    });

    return info;
}



