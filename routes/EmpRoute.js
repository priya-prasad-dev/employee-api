const express = require("express");
const router = express.Router();
const controller = require("../controller/EmpController");
const cors = require("cors");

// API Paths
router.get("/", controller.showIndex);

router.post("/add-emp", cors(), controller.addEmp);

router.get("/get-emp/:id", cors(), controller.getEmp);

router.get("/show-emp", cors(), controller.showEmps);

router.put("/modify-emp/:id", cors(), controller.modifyEmp);

router.delete("/delete-emp/:id", cors(), controller.deleteEmp);

module.exports = router;