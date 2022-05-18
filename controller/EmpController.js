const EmpModel = require("../models/EmpModel");

exports.showIndex = (req, res) => {
  res.send("Running Node API");
};

exports.addEmp = (req, res) => {
  const emp = new EmpModel({
    EmpId: req.body.EmpId,
    EmpName: req.body.EmpName,
    Mobile: req.body.Mobile,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  emp
    .save()
    .then((data) => res.send(data))
    .catch((error) => res.send(error));
};

exports.getEmp = (req, res) => {
  EmpModel.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};

exports.showEmps = (req, res) => {
    EmpModel.find()
      .then((result) => res.send(result))
      .catch((error) => res.status(400).send(error));
  };

exports.deleteEmp = (req, res) => {
  EmpModel.deleteOne({ id: req.params.id }, (error) => {
    if (error) {
      res.send(error);
    }
    res.json({
      status: "Success",
      message: "Successfully deleted emp " + req.params.id,
    });
  });
};

exports.modifyEmp = (req, res) => {
  EmpModel.findById(req.params.id , (error, emp) => {
    if (error) {
      res.send(error);
    }
    emp.EmpName = req.body.EmpName ? req.body.EmpName : emp.EmpName;
    emp.Mobile = req.body.Mobile ? req.body.Mobile : emp.Mobile;

    emp.save((error) => {
      if (error) {
        res.send(error);
      }
      res.json({
        message: "emp updated successfully",
        data: emp,
      });
    });
  });
};