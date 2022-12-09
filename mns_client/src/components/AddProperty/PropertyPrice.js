import React from 'react'

function PropertyPrice({formData,setFormData}) {

  const handleChange = (event) => {
    const {name,value} =event.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        cost: {
            ...prevFormData.cost,
            [name]:value
        }

    }))
  }

  return (
    <div class="price-container">
        <div class="form-group">
            <label for="proprty_name">Price Per Night</label>
            <input type="text" placeholder='Enter Price Per Night...' id="per_night" name="per_night" value={formData.cost.per_night} onChange={handleChange}/>
        </div>
        <div class="form-group">
            <label for="proprty_name">Deposit Amount</label>
            <input type="text" placeholder='Enter Price Per Night...' id="deposit" name="deposit" value={formData.cost.deposit} onChange={handleChange}/>
        </div>
        <div class="form-group">
            <label for="proprty_name">Cleaning Fee</label>
            <input type="text" placeholder='Enter Price Per Night...' id="cleaning_fee" name="cleaning_fee" value={formData.cost.cleaning_fee} onChange={handleChange}/>
        </div>
    </div>
  )
}

export default PropertyPrice
