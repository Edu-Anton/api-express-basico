const { Router } = require('express');
const userController = require('../resource/user.controller')
const {createUserValidate, editUserValidate} = require('./user.validator');

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', createUserValidate, userController.createUser);
router.put('/:id', editUserValidate, userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;