// Import resources
import bcryptjs from "bcryptjs";

// Export handler
export default async function handler(req, res) {
  // If req.method === POST
  if (req.method === "POST") {
    // HANDLE POST REQUEST
    // Get request data from body
    const reqData = req.body.data;
    const reqCode = reqData?.code;

    // Debug
    //console.log("Debug api: ", typeof reqCode);

    // If reqCode is empty
    if (typeof reqCode != "string" || reqCode === "") {
      res.status(400).send();
    } else {
      // Define hashed reqCode
      const hashedCode = bcryptjs.hashSync(reqCode, 5);
      res.status(200).send(hashedCode);
    } // close if empty
  } else if (req.method === "GET") {
    // HANDLE GET REQUEST
    // Send result
    res.status(200).send("GET request works!");
  }
}
