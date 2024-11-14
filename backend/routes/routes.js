import express from 'express'
import upload from '../utils/upload.js'
import { getImage, uploadImage } from '../controller/imageController.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to the File Sharing Application');
});
router.post('/upload', upload.single('file'), uploadImage)
router.get('/file/:fileName/:fileId', getImage)

export default router