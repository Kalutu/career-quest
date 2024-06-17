import Users from "../models/users.js";

export const register = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  //validate fields

  if (!firstname) {
    next("First Name is required");
  }
  if (!lastname) {
    next("Last Name is required");
  }
  if (!email) {
    next("Email is required");
  }
  if (!password) {
    next("Password is required");
  }

  try {
    const userExist = await Users.findOne({ email });

    if (userExist) {
      next("Email Already Exists");
      return;
    }

    const user = await Users.create({
      firstname,
      lastname,
      email,
      password,
    });

    //user token
    const token = user.createToken();
    res.stattus(201).send({
      success: true,
      message: "Account created successfully",
      user: {
        _id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        accountType: user.accountType,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
export const signIn = async (req, res, next) => {};
