import express from "express"
import { postuser, getuser } from "./user.controller.js"
const router = express.Router()

router.post('/postuser', postuser)

router.get('/getuser', getuser)

export default router;