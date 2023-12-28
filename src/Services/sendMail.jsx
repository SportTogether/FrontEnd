import { sendMail } from "../Pages/DangKyDoiTac/sendMail";

module.exports.sendMail = async (req, res) => {
    const data = req.body; // data nhận từ client
    try {
        await sendMail({ template: "template", ...data });
        res.send("Send mail successfully !");
    } catch (error) {
        res.status(500).send("Send mail fail !");
    }
};
