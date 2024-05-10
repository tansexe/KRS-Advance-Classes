const User = require("../models/Users");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const getAllUsers = async (req, res) => {
  try {
    const name = "Tanisha";
    const users = await User.find({ name: name });
    const mappedUser = users.map((element) => {
      return {};
      name: element.name;
      email: element.email;
      image: element.image;
    });
    res.send(users);
  } catch (e) {
    console.log(e);
  }
};

const login = (req, res) => {
  res.send("all users");
};

const register = async (req, res) => {
  // res.send("all users");
  // name
  // image;
  // email;
  // dob;
  // phone;
  // password;
  // {
  //     name : "Taniya"
  //     email: "taniya@gmail.com"
  //     image: "link"
  //     password: "hgeghhe"

  // password has to be hashed

  //     phone: "123333328"

  // phone needs to be change into number
  //     dob: "89-09-89"
  // string to date
  // }
  try {
    // const {name,image,email,password,phone,dob} = req.body;
    const data = req.body;
    const hashpassword = await bcrypt.hash(data.password, 1);

    const phone = Number(data.phone);

    const dateDOB = new Date(data.dob);

    const newUser = new User({
      name: data.name,
      email: data.email,
      image: data.image,
      phone: phone,
      password: hashpassword,
      dob: dateDOB,
    });

    await newUser.save();

    console.log("user added");
    res.send({ mes: "user added", id: newUser._id });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllUsers,
  login,
  register,
};
