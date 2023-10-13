const express = require("express"); 
const app = express();

app.use((req, res) => {
  console.log("WE GOT A NEW REQUEST!!");
  // console.dir(req)
// res.send("Hello, WE GOT A NEW REQUEST! THIS IS A RESPONSE")
res.send("<h1>This ")
})

app.get('/cats')

app.listen(8080, () => {
  console.log("LISTINING ON PORT 8080");
  
}) 