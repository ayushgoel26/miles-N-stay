import React, {useState} from 'react'
import HomeInfo from './HomeInfo';
import PropertyAddress from './PropertyAddress';
import PropertyImage from './PropertyImage';
import PropertyPrice from './PropertyPrice';
import PropertyRules from './PropertyRules';
import GuestRequirements from './GuestRequirements';

function AddPropertyForm() {

  const [ page, setPage ] = useState(0);
  const [ formData, setFormData ] =   useState({
    host_id: 123, 			
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
		image_id: 0,
		image_name: "", 
		image_url: "", 
		image_description: "", 
		is_deleted: false					
	}],

	amenities: [""],
	reviews: [""]	

  });


  const FormTitles = ["Property Information","Property Address","Property Price","Propery Rules","Property Images","Guest Requirements"];
  const PageDisplay = () => {
    if (page === 0) {
      return <HomeInfo formData={formData} setFormData={setFormData}/>
    }
    else if(page === 1) {
      return <PropertyAddress formData={formData} setFormData={setFormData}/>
    }
    else if(page === 2) {
      return <PropertyPrice formData={formData} setFormData={setFormData}/>
    }
    else if(page === 3) {
      return <PropertyRules formData={formData} setFormData={setFormData}/>
    }
    else if(page === 4) {
      return <PropertyImage formData={formData} setFormData={setFormData}/>
    }
    else if(page === 5) {
      return <GuestRequirements formData={formData} setFormData={setFormData}/>
    }

  }

  return (
    <div className='form'>
        <div className='progressbar'>
          <div style={{width: page === 0 ? "16.6%" : page === 1 ? "33.2%": page === 2 ? "50%" : page === 3 ? "66.6%" : page === 4 ? "83.2%" : "100%"}}></div>
        </div>
        <div className="form-container">
            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
                <button 
                disabled={page === 0}
                onClick={()=>{
                  setPage((currPage) => currPage - 1)
                  }}>Prev</button>
                <button
                disabled={page === FormTitles.length - 1}
                 onClick={()=>{
                  setPage((currPage) => currPage + 1)
                  }}>
                   Next</button>
            </div>

        </div>
    </div>
    
  )
}

export default AddPropertyForm
