const express = require("express");
const router = express.Router();
const Service = require("../../models/Services_models");
const objectId = require("mongoose").Types.ObjectId;

router.post("/add", (req, res) => {
  const {
    title: v_title,
    description: v_description,
    service_Provider: v_service_Provider,
    phone_number: v_phone_number,
  } = req.body;
  if (
    v_title == null ||
    v_description == null ||
    v_service_Provider == null ||
    v_phone_number == null
  ) {
    res.json({
      error: { code: -5, message: "one or multiple arguments are missing" },
    });
  } else {
    const newService = new Service({
      title: v_title,
      description: v_description,
      service_Provider: v_service_Provider,
      phone_number: v_phone_number,
    });
    newService
      .save()
      .then((data) => res.json({ service: data }))
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
  }
});

router.get("/", (req, res) => {
  Service.find()
    .then((data) => res.json({ services: data }))
    .catch((err) =>
      res.json({
        error: { code: -1, message: "failed to connect/access to database" },
      })
    );
});

router.get("/getOne/:id", (req, res) => {
  const { id: v_id } = req.params;
  if (objectId.isValid(v_id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    Service.findOne({ _id: v_id })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -2, message: "failed to find service" },
          });
        } else {
          res.json({
            result: { service: data },
          });
        }
      })
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
  }
});

router.delete("/delete/:id", (req, res) => {
  const { id: v_id } = req.params;
  if (objectId.isValid(v_id) == false) {
    res.json({
      error: { code: -6, message: "check id input" },
    });
  } else {
    Service.findOneAndDelete({ _id: v_id })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -3, message: "failed to delete service" },
          });
        } else {
          res.json({
            result: { message: "service deleted successfully" },
          });
        }
      })
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
  }
});

router.put("/update/:id", (req, res) => {
  const { id: v_id } = req.params;
   if (objectId.isValid(v_id) == false) {
     res.json({
       error: { code: -6, message: "check id input" },
     });
   } else {
    Service.findOneAndUpdate({ _id: v_id }, { $set: req.body })
      .then((data) => {
        if (data == null) {
          res.json({
            error: { code: -3, message: "failed to update service" },
          });
        } else {
          res.json({
            result: { message: "service updated successfully" },
          });
        }
      })
      .catch((err) =>
        res.json({
          error: { code: -1, message: "failed to connect/access to database" },
        })
      );
   }
});

module.exports = router;