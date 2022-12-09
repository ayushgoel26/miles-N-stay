import React, { useState } from 'react'
import HomeInfo from './HomeInfo';
import PropertyAddress from './PropertyAddress';
import PropertyImage from './PropertyImage';
import PropertyPrice from './PropertyPrice';
import PropertyRules from './PropertyRules';
import GuestRequirements from './GuestRequirements';
import mongoose from 'mongoose'

function AddPropertyForm() {

  const [page, setPage] = useState(0);
  //host_id = mongoose.Types.ObjectId(123);
  const [formData, setFormData] = useState({
    host_id: mongoose.Types.ObjectId(123),
    property_name: "",
    property_type: "",
    description: "",
    summary: "",
    room_type: "",
    max_nights: 0,
    min_nights: 0,
    max_guests: 0,
    bed_count: 0,
    bath_count: 0,

    cancellation_policy: "",

    cost: {
      per_night: 0.0,
      deposit: 0.0,
      cleaning_fee: 0.0
    },


    house_rules: {
      check_in: "",
      check_out: "",
      check_in_type: "",
      smoking: false,
      parties: false,
      pets: false,
      additional_notes: ""
    },

    property_address: {
      street: "",
      unit_no: "",
      city: "",
      state: "",
      zip: 0,
      country: "",
    },

    images: [{
      // image_id: 0,
      image_file : null,
      // image_name: "",
      // image_url: "",
      // image_description: "",
      // is_deleted: false,
      // image_preview_url: ""
    }],

    amenities: {
      swimming_pool:false,
      garden:false,
      natural_gas_barbeque:false,
      sun_lounger:false,
      television:false
    },

  });



  const FormTitles = ["Property Information", "Property Address", "Property Price", "Propery Rules", "Property Images", "Guest Requirements"];
  const PageDisplay = () => {
    if (page === 0) {
      return <HomeInfo formData={formData} setFormData={setFormData} />
    }
    else if (page === 1) {
      return <PropertyAddress formData={formData} setFormData={setFormData} />
    }
    else if (page === 2) {
      return <PropertyPrice formData={formData} setFormData={setFormData} />
    }
    else if (page === 3) {
      return <PropertyRules formData={formData} setFormData={setFormData} />
    }
    else if (page === 4) {
      return <PropertyImage formData={formData} setFormData={setFormData} />
    }
    else if (page === 5) {
      return <GuestRequirements formData={formData} setFormData={setFormData} />
    }


  }

  const handleSubmit = () => {
    console.log("Inside handlesubmit")

    window.alert(formData.property_name)

    console.log(JSON.stringify(formData))

    const formData1 = new FormData();
    formData1.append('property_name', 'Mi Casa');
    formData1.append('property_type', 'Boat');

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:3000/listings", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));


  }

  return (
    <div className='form'>
      <div className='progressbar'>
        <div style={{ width: page === 0 ? "16.6%" : page === 1 ? "33.2%" : page === 2 ? "50%" : page === 3 ? "66.6%" : page === 4 ? "83.2%" : "100%" }}></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1)

            }}>Prev</button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                window.alert("Submitting now")
                handleSubmit()
              }
              else {
                setPage((currPage) => currPage + 1)
              }
            }}>
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>

      </div>
    </div>

  )
}

export default AddPropertyForm
