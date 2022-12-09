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
      <option value = "Treehouse">Tree House</option>
      <option value = "Apartment">Apartment</option>
      <option value="Villa">Villa</option>
    </select>
  </div>
  <div class="form-group" >
    <label for="bed_count">Select Number of Beds</label>
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.bed_count} onChange={(e)=>setFormData({...formData,bed_count:parseInt(e.target.value,10)})}>
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
    <select class="form-control form-control-sm" id="exampleFormControlSelect1" value={formData.bath_count} onChange={(e)=>setFormData({...formData,bath_count:parseInt(e.target.value,10)})}>
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
      <option value="flexible">Flexible</option>
      <option value="moderate">Moderate</option>
      <option value="strict">Strict</option>
      <option value="restricted">Restricted</option>

    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Tell us About your House</label>
    <textarea class="form-control" id="prop_desc" rows="3" value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})}></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Give a short Summary About Your House</label>
    <textarea class="form-control" id="prop_summ" rows="3" value={formData.summary} onChange={(e)=>setFormData({...formData,summary:e.target.value})}></textarea>
  </div>
</form>

    </div>

  )
}

export default HomeInfo
