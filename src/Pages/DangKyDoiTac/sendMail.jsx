import nodemailer from "nodemailer";
import fs from "fs";
import ejs from "ejs";
// import { convert } from "html-to-text";
import juice from "juice";

const smtp = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.ADMIN_EMAIL_TK,
        pass: process.env.ADMIN_EMAIL_MK,
    },
});

export const sendMail = ({
    template: templateName,
    templateVars,
}) => {
    const templatePath = `/index.html`; // đường dẫn tới template
    const options = {
        from: process.env.ADMIN_EMAIL_TK,
        to: to,
        subject: "Test Send Mail", // Tiêu đề của mail
        html: htmlContent
    }

    if (templateName && fs.existsSync(templatePath)) {
        const template = fs.readFileSync(templatePath, "utf-8");
        const html = ejs.render(template, templateVars);
        // templateVars là các biến được truyền vào template thông qua hàm render
        // const text = convert(html);
        const htmlWithStylesInlined = juice(html);

        options.html = htmlWithStylesInlined;
        //options.text = text;
    }

    // hàm smtp.sendMail() này sẽ trả về cho chúng ta một Promise
    return smtp.sendMail(options);
};


