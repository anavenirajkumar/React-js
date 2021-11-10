const express = require("express");
const router = express.Router();
const authenticate = require('../middlewares/authenticate');  /// import for Get User Information

// controller
const {
    addUser,
    getUsers,
    getUserById,
    editUser,
    deleteUser,
  } = require("../controllers/user");
  
router.post('/add', authenticate, addUser);
router.get('/users', getUsers);
router.get('/:id', authenticate, getUserById);
router.put('/:id', authenticate, editUser);
router.delete('/:id', authenticate, deleteUser);

module.exports = router;
