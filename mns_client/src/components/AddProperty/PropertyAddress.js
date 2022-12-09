import React from 'react'


function PropertyAddress({formData,setFormData}) {

  const handleChange = (event) => {
    const {name,value} =event.target;
    console.log("inside handlechange")
    if (Number.isNaN(value)) {
    setFormData(prevFormData => ({
        ...prevFormData,
        property_address: {
            ...prevFormData.property_address,
            [name]:parseInt(value)
        }

    }))
    }
    else{
        setFormData(prevFormData => ({
            ...prevFormData,
            property_address: {
                ...prevFormData.property_address,
                [name]:value
            }
    
        }))        
    }
  }
  console.log("before return")  
  return (
    <div class="prop-addr-container">
        <form>
            <div class="form-group">
                <label for="proprty_name">Street Name</label>
                <input type="text" class="form-control form-control-sm" id="street" name="street" placeholder="Enter Street Name..." value={formData.property_address.street} onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="proprty_name">Unit Number</label>
                <input type="number" class="form-control form-control-sm" id="unit_no" name="unit_no" placeholder="Enter Unit Number..." value={formData.property_address.unit_no} onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="proprty_name">City</label>
                <input type="text" class="form-control form-control-sm" id="city" name="city" placeholder="Enter City..." value={formData.property_address.city} onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="proprty_name">State</label>
                <input type="text" class="form-control form-control-sm" id="state" name="state" placeholder="Enter State..." value={formData.property_address.state} onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="proprty_name">Zip Code</label>
                <input type="number" style={{ WebkitAppearance: "none" }} class="form-control form-control-sm" id="zip" name="zip" placeholder="Enter Zip Code..." value={formData.property_address.zip} onChange={handleChange}/>
            </div>
            <div class="form-group">
                <label for="proprty_name">Country</label>
                <input type="text" class="form-control form-control-sm" id="country" name="country" placeholder="Enter Country..." value={formData.property_address.country} onChange={handleChange}/>
            </div>
        </form>

        {/* <div>
            <input type="text" placeholder='Enter Street Name...'/>
        </div>
        <div>
            <input type="text" placeholder='Enter Unit Number...'/>
        </div>
        <div>
            <input type="text" placeholder='Enter City...'/>
        </div>
        <div>
            <input type="text" placeholder='Enter State...'/>
        </div>
        <div>
            <input type="text" placeholder='Enter Zip...'/>
        </div>
        <div>
            <input type="text" placeholder='Enter Country...'/>
        </div> */}
    </div>
  )
}

export default PropertyAddress
