import { User } from "../../models/User"
export default async (id)=> User.findById(id)