import React from 'react'



function PropertyImage({formData,setFormData}) {

  const handleChange = (event) => {
    const {name,value} =event.target;
    console.log("inside handlechange")
    setFormData(prevFormData => ({
        ...prevFormData,
        images: {
            ...prevFormData.images,
            [name]:value
        }
  
    }))
  }
  
  return (
    <div class="image-upload-container">
            <div class="form-group">
                <label for="image_name">Image Name</label>
                <input type="text" class="form-control form-control-sm" id="image_name" name="image_name" placeholder="Enter Image Name.." value={formData.images.image_name} onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="proprty_name">Image URL</label>
                <input type="text" class="form-control form-control-sm" id="image_url" name="image_url" placeholder="Enter Image URL.." value={formData.images.image_url} onChange={handleChange}/>
            </div>
    </div>
  )
}

export default PropertyImage
