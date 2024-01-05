const express = require("express");
const router = express.Router();
const Checklist = require("../models/checklist");

router.get("/", async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.status(200).json(checklists);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  console.log("ola mundo2");
  let { name } = { name: "nova tarefa" };
  try {
    let checklist = await Checklist.create({ name: "nova tarefa" });
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
