const express = require("express");
const router = express.Router();
const professionalsController = require("../controllers/professionalsController")

router.post("/", professionalsController.createProfessional);
router.get("/", professionalsController.getProfessionals);
router.get("/:id", professionalsController.getProfessionalById);
router.put("/:id", professionalsController.updateProfessional);
router.delete("/:id", professionalsController.deleteProfessional)

module.exports = router;