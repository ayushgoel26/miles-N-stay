import React from 'react'

function PropertyRules({formData,setFormData}) {

    const handleChange = (event) => {
        const {name,value} =event.target;

        if (name === 'check_in' || name === 'check_out') {
            setFormData(prevFormData => ({
                ...prevFormData,
                house_rules: {
                    ...prevFormData.house_rules,
                    [name]:value.toString()
                }
        
            }))

        }
        else {
            setFormData(prevFormData => ({
                ...prevFormData,
                house_rules: {
                    ...prevFormData.house_rules,
                    [name]:value.toString()
                }
        
            }))
        }
      }

      const handleChangeBool = (event) => {

        setFormData(prevFormData => ({
            ...prevFormData,
            house_rules: {
                ...prevFormData.house_rules,
                [event.target.name]:event.target.value
            }
    
        }))
      }


    const handleChangeCheck = (event) => {
        let e_name = event.target.name
        if (formData.amenities[e_name]) {
        setFormData(prevFormData => ({
            ...prevFormData,
            amenities: {
                ...prevFormData.amenities,
                [event.target.name]: false
            }
    
        }))
    }
    else{
        setFormData(prevFormData => ({
            ...prevFormData,
            amenities: {
                ...prevFormData.amenities,
                [event.target.name]: true
            }
    
        }))
    }
      }



  return (
    <div class="house-rules-container">
        <div class="form-group">
            <label>Check-in Time </label>
            <input type="time" placeholder='Enter Check-in time...' id="check_in" name="check_in" value={formData.house_rules.check_in} onChange={handleChange}/>
        </div>
        <div class="form-group">
            <label>Check-out Time </label>
            <input type="time" placeholder='Enter Check-out time...' id="check_out" name="check_out" value={formData.house_rules.check_out} onChange={handleChange}/>
        </div>
        <div class="form-group">
            <label for="proprty_type" >Select Check-in Type</label>
            <select class="form-control form-control-sm" id="exampleFormControlSelect1" name="check_in_type" value={formData.house_rules.check_in_type} onChange={handleChange}>
            <option value = "Locker">Locker</option>
            <option value = "Self Check-in">Self Check-in</option>
            <option value="Contact">Contact Host</option>
            </select>
        </div>
        <div class="form-group">
            <input type="radio" id="smoking_allowed" name="smoking" value="true"  checked={formData.house_rules.smoking==="true"} onChange={handleChangeBool}/>
            <label for="smoking_allowed">Smoking is Allowed</label>
            <input type="radio" id="smoking_allowed" name="smoking" value="false"  checked={formData.house_rules.smoking==="false"} onChange={handleChangeBool}/>
            <label for="smoking_allowed">Smoking is Not Allowed</label>
        </div>
        <div class="form-group">
            <input type="radio" id="parties_allowed" name="parties" value = "true" checked={formData.house_rules.parties==="true"} onChange={handleChangeBool}/>
            <label for="parties_allowed">Parties are Allowed</label>
            <input type="radio" id="parties_allowed" name="parties" value="false" checked={formData.house_rules.parties==="false"} onChange={handleChangeBool}/>
            <label for="parties_allowed">Parties are Not Allowed</label>
        </div>
        <div class="form-group" >
            <input type="radio" id="pets_allowed" name="pets" value="true" checked={formData.house_rules.pets==="true"} onChange={handleChangeBool}/>
            <label for="pets_allowed">Pets are Allowed</label>
            <input type="radio" id="pets_allowed" name="pets" value="false" checked={formData.house_rules.pets==="false"} onChange={handleChangeBool}/>
            <label for="pets_allowed">Pets are Not Allowed</label>
        </div>
        <div class="form-group" id="form-group-check">
            <h2>Amenities</h2>
            <label>
                <input type="checkbox" name="swimming_pool" checked= {formData.amenities.swimming_pool} onChange={handleChangeCheck} />
                Infinity Pool
            </label>
            <label>
                <input type="checkbox" name="natural_gas_barbeque" checked = {formData.amenities.natural_gas_barbeque} onChange={handleChangeCheck} />
                Natural Gas Barbeque
            </label>
            <label>
                <input type="checkbox" name="sun_lounger" checked = {formData.amenities.sun_lounger} onChange={handleChangeCheck} />
                Sun Lounger
            </label>
            <label>
                <input type="checkbox" name="garden" checked = {formData.amenities.garden} onChange={handleChangeCheck} />
                Garden
            </label>
            <label>
                <input type="checkbox" name="television" checked = {formData.amenities.television} onChange={handleChangeCheck} />
                Television
            </label>
            {/* <label>
                <input type="checkbox" value="value3" onChange={handleChangeCheck} />
                Smart TV
            </label>
            <label>
                <input type="checkbox" value="value3" onChange={handleChangeCheck} />
                Sound System
            </label>
            <br/>

            <label>
                <input type="checkbox" value="value3" onChange={handleChangeCheck} />
                Kitchen
            </label>
            <label>
                <input type="checkbox" value="value3" onChange={handleChangeCheck} />
                Coffee Maker
            </label>
            <label>
                <input type="checkbox" value="value3" onChange={handleChangeCheck} />
                Wine Cooler
            </label>
            <label>
                <input type="checkbox" value="value3" onChange={handleChangeCheck} />
                Wifi
            </label>
            <label>
                <input type="checkbox" value="value3" onChange={handleChangeCheck} />
                Air Conditioning
            </label>
            <label>
                <input type="checkbox" value="value3" onChange={handleChangeCheck} />
                Washer
            </label> */}
        </div>
        
    </div>
  )
}

export default PropertyRules
