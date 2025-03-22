




//API for adding lawyer
const addlawyer = async (req, res) => {
  try {
    const { name, email, password, practice, degree, experience, about, fees,  address } = req.body;
    const imageFile = req.file;

    console.log({ name, email, password, practice, degree, experience, about, fees,  address },imageFile);
  }
  catch (error) {
    console.log(error)
  }
}

export { addlawyer }