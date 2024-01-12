const express = require("express");
const router = express.Router();
const Checklist = require("../models/checklist");

router.get("/", async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.status(200).json(checklists);
  } catch (error) {
    console.log("erro no get")
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

router.put("/:id", async (req, res) => {
  let { name } = { name: "ola mundo3" };
  try {
    let checklist = await Checklist.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    res.status(200).json(checklist);
  } catch (error) {
    res.status(433).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id)
    const checklist = await Checklist.findByIdAndDelete(req.params.id);
    
    res.status(200).json(checklist);
  } catch (error) {
    res.status(433).json(error)
  }
});

module.exports = router;
