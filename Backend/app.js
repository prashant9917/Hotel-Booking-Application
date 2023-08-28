
const express = require("express")
const userData = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())



app.get("/", cors(), (req, res) => {
   res.status(200).json({ success: true, message: "/ route hit" });
})


app.post("/", async (req, res) => {
   const { name, email, phone, password, cpassword } = req.body

   try {
      const check = await userData.inserMany({ name, email, phone, password, cpassword })

      if (check) {
         res.json("exist")
      }
      else {
         res.json("notexist")
      }

   }
   catch (e) {
      res.json("fail")
   }

})



app.post("/signup", async (req, res) => {
   console.log(req.body)

   try {
      const check = await userData.findOne({ name: req.body.name })
      console.log("check", check)
      if (check) {
         res.json({ success: false, message: "data already exist" })
      }

      let user = new userData({
         name: req.body.name,
         email: req.body.email,
         phone: req.body.phone,
         password: req.body.password,
         cpassword: req.body.cpassword
      })
      await user.save();
      res.json({ success: true, message: "data saved success" })


   }
   catch (e) {
      console.log(e)
      res.json("fail")
   }

})

app.listen(4500, () => {
   console.log("port connected");
})

