// Import resources
import mailjet from "node-mailjet";
import { baseURL } from "../../src/config/appConfig";

// Connect to mailjet
const mailjetConn = mailjet.connect(
  process.env.NEXT_PUBLIC_MAILJET_API_KEY,
  process.env.NEXT_PUBLIC_MAILJET_SECRET_KEY
);

// EXPORT HANDLER
export default async function handler(req, res) {
  // If req.method === POST
  if (req.method === "POST") {
    // HANDLE POST REQUEST
    // Get request data from body
    const reqData = req.body.data;
    const reqToName = reqData?.toName;
    const reqToEmail = reqData?.toEmail;
    const reqMsg = reqData?.msg;
    const reqFromName = reqData?.fromName;
    const reqFromEmail = reqData?.fromEmail;
    const reqFooterName = reqData?.footerName;

    // Send email and await request
    await mailjetConn
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: reqFromEmail,
              Name: reqFromName,
            },
            To: [
              {
                Email: reqToEmail,
                Name: reqToName,
              },
            ],
            Subject: "Welcome to Bulkahia",
            HTMLPart: `
              <div style="font-size: 14px;">
              <h3>Hi, ${reqToName}</h3>
              <p>I want to personally welcome you to Bulkahia.</p>
              <p>Our mission is to provide the best way for brands & freelancers to reach more customers and make money with status views.</p>
              <p>Remember to <a href="https://bit.ly/bulkahians" style="font-weight: 600">join our Telegram community (Bulkahians)</a> for latest updates & faster support.</p>
              <br />
              <div>Best regards,</div>
              <div>Chinaemerem Obodoefula.</div>
              <div>Founder, Bulkahia</div>
              </div>
            `,
          },
        ],
      })
      .then((apiRes) => {
        // Define resData
        const resData = apiRes?.body;
        const status = resData?.Messages?.[0]?.Status;
        //console.log("Debug apiWelcomeEmail: ", status);
        // Send result
        res.send(status);
      })
      .catch((err) => {
        //console.log("Error apiWelcomeEmail: ", err.message);
        res.send(err.statusCode);
      });
  } else if (req.method === "GET") {
    // HANDLE GET REQUEST
    res.send("GET request works!");
  } // close if reqtype
} // close handler
