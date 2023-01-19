const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserWithTasks,
  createUser,
  updateUser,
  deleteUser, 
} = require("../controllers/users.controller");

const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

// app.get
// app.post
// app.put
// app.delete

// localhost:8000/users
// controlador
router.get("/users", authMiddleware,  getAllUsers);

router.get("/users/:id", authMiddleware, getUserById);

// obtener a un usuario con sus tareas
router.get("users/:id/todos", authMiddleware, getUserWithTasks);

router.post("/users", createUser);

router.put("/users/:id", authMiddleware, updateUser);

router.delete("/users/:id", authMiddleware, deleteUser);

module.exports = router;