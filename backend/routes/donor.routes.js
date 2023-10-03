let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  

let donorSchema = require("../models/Donors");
  
// CREATE Student
router.post("/create-donor", (req, res, next) => {
  donorSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
  

router.get("/", (req, res) => {
  donorSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
  
// UPDATE student
router
  .route("/update-donor/:id")
  // Get Single Donor
  .get((req, res) => {
    donorSchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  
  
  .put((req, res, next) => {
    donorSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Donor updated successfully !");
        }
      }
    );
  });
  
// Delete Donor
router.delete("/delete-donor/:id", 
(req, res, next) => {
  donorSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
  
module.exports = router;
