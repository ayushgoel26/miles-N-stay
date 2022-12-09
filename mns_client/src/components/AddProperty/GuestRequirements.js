import React from 'react'

function GuestRequirements({formData,setFormData}) {
  console.log({formData})
  return (
    <div class="guest-req-container">
  <div class="form-group" >
    <label for="bed_count">Select Maximum Number of Guests</label>
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.max_guests} onChange={(e)=>setFormData({...formData,max_guests:e.target.value})}>
    <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9 +</option>
    </select>
  </div>
  <div class="form-group" >
    <label for="bed_count">Select Minimum Number of Nights</label>
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.min_nights} onChange={(e)=>setFormData({...formData,min_nights:e.target.value})}>
    <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9 +</option>
    </select>
  </div>
  <div class="form-group" >
    <label for="bed_count">Select Maximum Number of Guests</label>
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.max_nights} onChange={(e)=>setFormData({...formData,max_nights:e.target.value})}>
    <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9 +</option>
    </select>
  </div>

    </div>
  )
}

export default GuestRequirements
