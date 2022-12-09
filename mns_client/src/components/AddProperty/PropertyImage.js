import React,{useState} from 'react';
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'



function PropertyImage({formData,setFormData}) {

  const [files, setFiles] = useState([]);

  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus = ({ meta,file }, status) => {
    console.log(status, meta)
    console.log(file.name)
    if (status === "done") {
      setFormData(prevFormData => ({
        ...prevFormData,
        images: {
            ...prevFormData.images,
            file
        }
    }))
    }
    else {
      setFiles([
        ...files,
        file
      ]);

    }
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 200, maxHeight: 300 } }}
    />
  )
}




export default PropertyImage
