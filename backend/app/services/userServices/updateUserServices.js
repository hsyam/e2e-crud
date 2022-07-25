import { User } from "../../models/User"
export default async (id,user)=> User.findByIdAndUpdate(id,user, {new: true})