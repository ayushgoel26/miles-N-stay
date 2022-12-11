import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import FileBase64 from "react-file-base64";
import { Modal, Form, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

function PropertyImage({ formData, setFormData }) {
  const [selectedFile, setSelectedFiles] = useState([]);

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleDone = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      cost: {
        ...prevFormData.cost,
        [name]: value,
      },
    }));
  };

  // const handleChangeStatus = async ({ meta,file }, status) => {
  //   console.log(status, meta)
  //   console.log(file.name)
  //   if (status === "done") {

  //     try{
  //     const response = await fetch("https://localhost:3000/listings/save-image",{
  //       method: "POST",
  //       body: file
  //     });
  //     const imageUrl = await response.text()
  //     setFormData(prevFormData => ({
  //       ...prevFormData,
  //       images: [
  //           ...prevFormData.images,
  //           imageUrl
  //       ]
  //   }))
  //   } catch(error)
  //   {
  //     console.error(error)
  //   }

  //   }
  //   else {
  //     setFiles([
  //       ...files,
  //       file
  //     ]);

  //   }
  // }

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFiles(event.target.files[0]);
  };

  const fileUploadHandler = async () => {
    try {
      const response = await fetch(
        "https://localhost:3000/listings/save-image",
        {
          method: "POST",
          body: "hi",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card style={{ marginBottom: "5%", width: "60%", marginLeft: "20%" }}>
      <Card.Header>Upload Property Images</Card.Header>
      <Card.Body style={{ padding: "10%" }}>
        {/* <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      inputContent="Drop Your Property Images Here or Click to Browse"
      // initialFiles={[formData.images]}
      //styles={{ dropzone: { minHeight: 200, maxHeight: 300, marginLeft:"20%",width:"60%",justifyContent:"center",alignItems:"center"}}}
    /> */}
        {/* <FileBase64 multiple = {true}
    value={formData.images}
    onDone={({base64})=> setFormData(prevFormData => ({
      ...prevFormData,
      images: [
          ...prevFormData.images,
          base64
      ]}))} */}

        <input type="file" onChange={fileSelectedHandler} />
        <button onClick={fileUploadHandler}>Upload</button>
      </Card.Body>
    </Card>
  );
}

export default PropertyImage;
