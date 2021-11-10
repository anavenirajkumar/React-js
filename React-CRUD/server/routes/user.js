const express = require("express");
const router = express.Router();

// controller
const {
    addUser,
    getUsers,
    getUserById,
    editUser,
    deleteUser,
  } = require("../controllers/user");
  
router.post('/add', addUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
