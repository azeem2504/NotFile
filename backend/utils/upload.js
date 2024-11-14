import multer from 'multer'
import path from 'path'

// Set up multer storage with diskStorage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/') // Specify the destination directory
  },
  filename: (req, file, cb) => {
    // Generate a unique filename to avoid conflicts
    cb(null, Date.now() + path.extname(file.originalname)) // Using timestamp for unique filenames
  }
})

// Initialize multer with the storage option
const upload = multer({ storage: storage })

export default upload
