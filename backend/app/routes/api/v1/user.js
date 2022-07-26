import {Router} from 'express'
import * as UsersController from '../../../controllers/api/v1/usersController' 
import { usersRequestValidator } from '../../../requests/usersRequestValidator'
const UsersV1 = Router()
UsersV1.get('/', UsersController.fetchUsers)
UsersV1.get('/:id', UsersController.fetchUser)
UsersV1.post('/', usersRequestValidator, UsersController.createUser)
UsersV1.post('/:id', usersRequestValidator, UsersController.updateUser)
UsersV1.delete('/:id', UsersController.deleteUser)
export default UsersV1
