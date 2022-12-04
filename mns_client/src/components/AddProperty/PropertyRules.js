import React from 'react'

function PropertyRules({formData,setFormData}) {

    const handleChange = (event) => {
        const {name,value} =event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            house_rules: {
                ...prevFormData.house_rules,
                [name]:value.toString()
            }
    
        }))
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
    </div>
  )
}

export default PropertyRules
