import {Router} from 'express'
import * as UsersController from '../../../controllers/api/v1/usersController' 
import { usersRequestValidator } from '../../../requests/UsersRequestValidator'
const UsersV1 = Router()
const UsersRequestValidator = require('../../../requests/usersRequestValidator')
UsersV1.get('/', UsersController.fetchUsers)
UsersV1.get('/:id', UsersController.fetchUser)
UsersV1.post('/', usersRequestValidator, UsersController.createUser)
UsersV1.post('/:id', usersRequestValidator, UsersController.updateUser)
UsersV1.delete('/:id', UsersController.deleteUser)
export default UsersV1
