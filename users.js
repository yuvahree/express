import express from "express";

const router = express.Router();

const users = [
  {
    firstname: "xxx",
    secondname: "yyy",
    city: "vellore",
  },
  {
    firstname: "aaaa",
    secondname: "bbbb",
    city: "pune",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  res.send("post method is called");
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push(user);
  res.send(`User with the name ${user.firstName} added!`);
});

export default router;
