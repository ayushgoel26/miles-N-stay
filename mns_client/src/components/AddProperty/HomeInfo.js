import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeInfo({formData,setFormData}) {
  return (
    <div className='home-info-container'>
        <form>
  <div class="form-group">
    <label for="proprty_name">Property Name</label>
    <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter House Name..." value={formData.property_name} onChange={(e)=>setFormData({...formData,property_name:e.target.value})}/>
  </div>
  
  <div class="form-group">
    <label for="proprty_type" >Select Property Type</label>
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.property_type} onChange={(e)=>setFormData({...formData,property_type:e.target.value})}>
      <option value = "TH">Tree House</option>
      <option value = "A">Apartment</option>
      <option value="V">Villa</option>
    </select>
  </div>
  <div class="form-group" >
    <label for="bed_count">Select Number of Beds</label>
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.bed_count} onChange={(e)=>setFormData({...formData,bed_count:e.target.value})}>
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
  <div class="form-group">
    <label for="bath_count">Select Number of Baths</label>
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.bath_count} onChange={(e)=>setFormData({...formData,bath_count:e.target.value})}>
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
  <div class="form-group">
    <label for="bed_count">Select Cancellation Policy Type</label>
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.cancellation_policy} onChange={(e)=>setFormData({...formData,cancellation_policy:e.target.value})}>
      <option value="Flexible">Flexible</option>
      <option value="Moderate">Moderate</option>
      <option value="Strict">Strict</option>
      <option value="Restricted">Restricted</option>

    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Tell us About your House</label>
    <textarea class="form-control" id="prop_desc" rows="3" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}></textarea>
  </div>
</form>

    </div>

  )
}

export default HomeInfo
