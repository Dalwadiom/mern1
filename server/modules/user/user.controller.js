import User from "./user.model.js";
import bcrypt from 'bcryptjs'

const postuser = async (req, res) => {
    const data = req.body
    try {
        
        const isExists = await User.findOne({ email: data.email })
        if (isExists) {
            return res.status(400).json({ message: "Email already exists" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.password, salt)
        await User.create({
            username: data.username,
            email: data.email,
            password: hashedPassword
        })
        return res.status(201).json({"message" : "user create successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message" : "post user error"})
    }

}


const getuser = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({"message" : "get users successfully", users})
    } catch (error) {
        console.log(error)
        return res.status(500).json({"message" : "get user error"})
    }
}

export {postuser, getuser}