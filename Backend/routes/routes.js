const express = require("express");
const router = express.Router();

// model
const Model = require("../model/model");

/**
 * posting data to database
 * getting all data from database
 * get one data from database
 * update data by id
 * delete data by id
 */

// posting data to database
router.post("/post", async (req, res) => {
  //   res.send("Posting the data");
  //   console.log(req.body); // without cors we cannot get the req.body
  const studentData = new Model({
    RollNum: req.body.rollnum,
    Name: req.body.name,
    Group: req.body.Group,
    PhoneNum: req.body.PhoneNum,
    Email: req.body.email,
  });

  try {
    const dataToSave = await studentData.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//get All data
router.get("/getAll", async (req, res) => {
  //   res.send("getting all data");

  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get one data by id
router.get("/getOne/:id", async (req, res) => {
  //   res.send("getting data from one id");
  // we can get id by using params.id
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update data by id
router.patch("/update/:id", async (req, res) => {
  //   res.send("updating data by id");
  console.log(req.body);
  console.log(req.params.id);
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//delete data by id
router.delete("/delete/:id", (req, res) => {
  //   res.send("deleting data by id");
  try {
    const id = req.params.id;
    const data = Model.findByIdAndDelete(id);
    res.send(`Data has been deleted from ${data.name} from the database`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
