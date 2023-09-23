const { Router } = require("express")
const {
  getAllToDo,
  createToDo,
  updateToDo,
  deleteToDo
} = require("../controllers/ToDoController")

const router = Router()

router.get("/", getAllToDo)
router.post("/", createToDo)
router.put("/:id", updateToDo)
router.delete("/:id", deleteToDo)

module.exports = router
