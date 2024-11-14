import { useEffect, useRef, useState } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { uploadFile } from "./service/api"
import QRCode from "react-qr-code"


function App() {
  const fileInputRef = useRef()
  
  const [file, setFile] = useState("")
  const [result, setResult] = useState("")

  const onUploadClick = () => {
    fileInputRef.current.click()
  }

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData()
        data.append("name", file.name)
        data.append("file", file)

        const res = await uploadFile(data)
        setResult(res.path)

      }
    }
    getImage()
  }, [file])

 
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-[90%] sm:w-[70%] md:w-[40vw] h-[80vh] sm:h-[80vh] md:h-[80vh] flex flex-col  items-center bg-[#FFF9E6] border border-gray-300 rounded-lg shadow-lg p-6">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-xl text-gray-700">**NotFile**</h1>
          <p className="text-s text-gray-400">(Share your files with ease!!!)</p>
          <div className="flex items-center justify-center flex-col gap-5">
            <h1 className="text-2xl sm:text-3xl md:text-xl font-semibold text-gray-700">Upload Your Files Here!!</h1>
            <Button onClick={() => onUploadClick()}>Upload</Button>
            <Input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span className="text-base sm:text-lg md:text-base">
              {result ? (
                <>
                  Download Link:{" "}
                  <span
                    
                    className="text-blue-600 underline cursor-pointer break-all"
                  >
                    <a href={result}>{result}</a>
                    
                  </span>
                  <div className="mt-4 flex flex-col gap-4 items-center">
                    <span>Scan Here to Download!!</span>
                    <QRCode value={result} size={128} />
                  </div>
                </>
              ) : (
                "Upload file to get Link!!"
              )}
            </span>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
