import jwt from "jsonwebtoken"

//user authentication middleware
const authUser = (req, res, next) => {
  try {

    const {token} = req.headers
    if (!token) {
      return res.json({ success: false, message: "Not Authorized Personnel, Please login Again" })
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

    req.body.userId = token_decode.id

    next()
  }
  catch(error){
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authUser