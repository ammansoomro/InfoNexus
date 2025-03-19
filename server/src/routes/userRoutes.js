const router = require("express").Router();
const userController = require("../controllers/userController");
const verify = require("../middleware/verifyToken"); 

router.put("/:id", verify, userController.updateUser);
router.delete("/:id", verify, userController.deleteUser);
router.get("/find/:id", verify, userController.getUserById);
router.get("/", verify, userController.getAllUsers);
router.get("/stats", verify, userController.getUserStats);
router.put("/changePassword/:id", verify, userController.changePassword);

module.exports = router;
