import File from "../models/file.js";
import dotenv from 'dotenv'

dotenv.config()

export const uploadImage = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname  
    }
    try {
        const file = await File.create(fileObj)
        res.status(200).json({path: `${process.env.BASE_URI}/file/${file.name}/${file._id}`})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}

export const getImage = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId)
        file.downloadCount++;
        await file.save()
        res.download(file.path, file.name)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}