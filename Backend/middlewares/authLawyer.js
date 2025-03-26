import jwt from "jsonwebtoken"

//lawyer authentication middleware
const authLawyer = (req, res, next) => {
  try {

    const {ltoken} = req.headers
    if (!ltoken) {
      return res.json({ success: false, message: "Not Authorized Personnel, Please login Again" })
    }
    const token_decode = jwt.verify(ltoken, process.env.JWT_SECRET_KEY)

    req.body.lawyerId = token_decode.id

    next()
  }
  catch(error){
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authLawyer