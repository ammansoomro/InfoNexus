const router = require("express").Router();
const userController = require("../controllers/userController");

router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/find/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.get("/stats", userController.getUserStats);
router.put("/changePassword/:id", userController.changePassword);

module.exports = router;
