const router = require("express").Router();
const formController = require("../controller/formController");

router.post("/create", formController.createForm);

module.export = router;

