const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const plaintextPassword = "commonpassword";
// const hashedPassword =
//   "$2b$12$yzXUrBUWQtJV2AQslSTO5um/WwYtPy1v7krApfSceV/d.I1rS2bTe";
//   "$2b$12$ONQy7QsEjNF2iCl5LwrFK.qaEGpKUCwYSj.Sm1syHtf9863MCj6ry";

const comparePasswords = async (plaintextPassword) => {
  try {
    // const salt = await bcrypt.genSalt(12);
    // console.log("salt is " + salt);
    // const password = await bcrypt.hash(
    //   plaintextPassword,
    //   "$2b$12$YtgpRMfJ15hBT4y.TzHBlu"
    // );
    // console.log("password is " + password);

    const isMatch = await bcrypt.compare(
      plaintextPassword,
      //   "$2b$12$YtgpRMfJ15hBT4y.TzHBluf9fNZwgYwCQVjzOxy8eOSzD86/2W8Ym"
      "$2b$12$mqgFRrhgfq2K7wbQuxQOIeKkS1xWIAncKT1GyrT.yGzjmFH4fGR.C"
    );
    // const hashPass = await bcrypt.hash(plaintextPassword, 12);
    // console.log(hashPass);
    console.log(isMatch); // true if the passwords match, false otherwise
  } catch (error) {
    console.error("Error comparing passwords:", error);
  }
};

comparePasswords(plaintextPassword);

// salt is $2b$12$mqgFRrhgfq2K7wbQuxQOIe
// password is $2b$12$mqgFRrhgfq2K7wbQuxQOIeKkS1xWIAncKT1GyrT.yGzjmFH4fGR.C

const generateToken = async () => {
  const token = jwt.sign(
    {
      data: "foobar",
    },
    "secret",
    { expiresIn: "1h" }
  );

  console.log(token);
};

generateToken();
