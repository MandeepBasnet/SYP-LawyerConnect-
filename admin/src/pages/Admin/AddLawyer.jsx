import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";


const AddLawyer = () => {
  const [lawImg, setLawImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [practice, setPractice] = useState("Property Law");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const {backendUrl, aToken} = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault(); //dosent reload the web page

    try {
      if (!lawImg) {
        return toast.error("Lawyer Image is required");
    } 

    const formData = new FormData();
    formData.append("image", lawImg);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("experience", experience);
    formData.append("fees", Number(fees));
    formData.append("about", about);
    formData.append("practice", practice);
    formData.append("degree", degree);
    formData.append("address", JSON.stringify({line1:address1,line2:address2}));

    // Console Log formData
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    })

    const {data} = await axios.post(backendUrl + '/api/admin/add-lawyer', formData, {headers: {aToken}})

    if (data.success) {
      toast.success(data.message);
      setLawImg(false);
      setName("");
      setEmail("");
      setPassword("");
      setFees("");
      setAbout("");
      setDegree("");
      setAddress1("");
      setAddress2("");
    } else {
      toast.error(data.message);
    }
  }catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Lawyer</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="law-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={lawImg ? URL.createObjectURL(lawImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setLawImg(e.target.files[0])}
            type="file"
            id="law-img"
            hidden
          />
          <p>
            Upload Lawyer <br /> Image
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Your Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Lawyer Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Lawyer Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
                <option value="11 Year">11 Year</option>
                <option value="12 Year">12 Year</option>
                <option value="13 Year">13 Year</option>
                <option value="14 Year">14 Year</option>
                <option value="15 Year">15 Year</option>
                
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Practice</p>
              <select
                onChange={(e) => setPractice(e.target.value)}
                value={practice}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="Property Law">Property Law</option>
                <option value="Labour Law">Labour Law</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="International Law">International Law</option>
                <option value="Contract Law">Contract Law</option>
                <option value="Family Law">Family Law</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Lawyer</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded"
            placeholder="Write about doctor"
            rows={6}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#4682B4] text-white px-10 py-3 mt-4 rounded-full"
        >
          Add Lawyer
        </button>
      </div>
    </form>
  );
};

export default AddLawyer;
