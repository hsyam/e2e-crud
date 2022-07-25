import createUserServices from "../../../services/userServices/createUserServices"
import deleteUserServices from "../../../services/userServices/deleteUserServices"
import getAllUsersServices from "../../../services/userServices/getAllUsersServices"
import getUserServices from "../../../services/userServices/getUserServices"
import updateUserServices from "../../../services/userServices/updateUserServices"

/**
 * @GET
 * /api/v1/users
 */
export const fetchUsers = async (req,res)=>{
    try{
        let users = await getAllUsersServices()
        return res.json({
            message:"Success",
            data: users
        })
    }catch(e){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}

/**
 * @GET
 * /api/v1/users/:id
 */
export const fetchUser = async (req,res)=>{
    try{
        let user = await getUserServices(req.params.id)
        return res.json({
            message:"Success",
            data: user
        })
    }catch(e){
        return res.status(404).json({
            message:"Not Found",
        })
    }

}

/**
 * @POST
 * /api/v1/users/
 */
export const createUser = async (req,res)=>{

    try{
        let {name,email,password} = req.body
        let user = await createUserServices({name,email,password})
        return res.json({
            message:"Success",
            data: user
        })
    }catch(e){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}

/**
 * @POST
 * /api/v1/users/:id
 */
export const updateUser = async (req,res)=>{
    try{
        let {name,email,password} = req.body
        let user = await updateUserServices(req.params.id,{name,email,password})
        return res.json({
            message:"Success",
            data: user
        })
    }catch(e){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}

/**
 * @DELETE
 * /api/v1/users/:id
 */
export const deleteUser = async (req,res)=>{
    try{
        let id = req.params.id
        let user = await getUserServices(id)
        if(!user){
            return res.status(404).json({
                message:"Not Found",
            })
        }
        await deleteUserServices(id)
        return res.json({
            message:"Success",
        })
    }catch(e){
        return res.status(500).json({
            message:"Internal Server Error",
        })
    }
}
