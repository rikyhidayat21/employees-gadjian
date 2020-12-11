const router = require("express").Router();
const employeeController = require("../controllers/employeeController");

router.post("/employees", employeeController.create);
router.get("/employees", employeeController.findAll);
router.get("/employees/:id", employeeController.findById);
router.put("/employees/:id", employeeController.update);
router.delete("/employees/:id", employeeController.delete);
module.exports = router;
