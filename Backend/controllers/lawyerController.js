import lawyerModel from "../models/lawyerModel.js"


const changeAvailability = async (req, res) => {
  try {
    const {lawId} = req.body

    const lawData = await lawyerModel.findById(lawId)
    await lawyerModel.findByIdAndUpdate(lawId, {available: !lawData.available})
    res.json({success: true,message: "Availability changed successfully"})
  } catch (error) {
    console.log(error)
    res.json({success:false, message: error.message})
    
  }
}

const lawyerList = async (req, res) => {
  try {
    const lawyers = await lawyerModel.find({}).select(['-password','-email'])
    res.json({success: true, lawyers})
  } catch (error) {
    console.log(error)
    res.json({success:false, message: error.message})
  }
}

export {changeAvailability, lawyerList}