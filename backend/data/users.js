import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("83284", 10),
    isAdmin: true,
  },
  {
    name: "Jan Kowalski",
    email: "jankowalski@gmail.com",
    password: bcrypt.hashSync("83284", 10),
  },
  {
    name: "Antonina Krupa",
    email: "antoninakrupa@gmail.com",
    password: bcrypt.hashSync("83284", 10),
  },
];

export default users;
