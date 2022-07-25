import { User } from "../../models/User"
export default async (id)=> User.findByIdAndDelete(id)