const ToDoModel = require("../models/ToDoModels")

const getAllToDo = async (req, res) => {
  const toDo = await ToDoModel.find()
  res.status(200).json(toDo)
}

const createToDo = async (req, res) => {
  const text = req.body
  const bin = await ToDoModel.create(text)
  res.status(200).json(bin)
}

const updateToDo = async (req, res) => {
  try {
    const text = req.body.text
    const id = req.params.id
    console.log(text)
    console.log(id)
    if (id.length !== 24) {
      return res.status(400).json({ message: "Not a valid id" })
    }
    const bin = await ToDoModel.findByIdAndUpdate(id, { text }, { new: true })
    console.log(bin)
    if (!bin) {
      return res.status(400).json({ message: "Not found" })
    }
    return res.status(200).json(bin)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
}

const deleteToDo = async (req, res) => {
  const { id } = req.params
  const bin = await ToDoModel.findByIdAndDelete(id, { new: true })
  console.log(bin)
  if (!bin) {
    return res.status(400).json({ message: "Not found" })
  }
  return res.status(200).json(bin)
}

module.exports = {
  getAllToDo,
  createToDo,
  updateToDo,
  deleteToDo
}
