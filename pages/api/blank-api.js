// Import resources

// Import custom files

// EXPORT HANDLER
export default async function handler(req, res) {
  if (req.method === "POST") {
    // HANDLE POST REQUEST
    // Get request data from body
    const reqData = req.body.data;

    // Send result
    res.send("POST request works!");
  } else if (req.method === "GET") {
    // HANDLE GET REQUEST
    // Send result
    res.send("GET request works!");
  } // close if reqMethod
} // close handler
