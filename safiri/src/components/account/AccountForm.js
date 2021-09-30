import React from 'react'
import Button from '../../ui/button/Button'
import './AccountForm.css'

function AccountForm(props) {

       // I intend to use this to populate the Destination input. instead of doing  something like this... :(Check the next link)
       // https://www.technicalkeeda.com/html-tutorials/all-countries-drop-down-list-in-html

       // const url = 'https://restcountries.eu/rest/v2/all'
       // const fetchCountries = async() => {
       //        try {
       //               const response = await fetch(url)
       //               const countries = await response.json()
       //               console.log(countries)
       //        }
       //        catch(error){
       //                      console.log(error)
       //        }
       // }

       // So, tou get all the countries, then loop thru them amd put them in the options of select.

       return (
              <section className = "account-form">
                     <h1>Set up your account details</h1>
                     <form  className = "formwrap" >
                            <div className="formwrap-content">
                                   
                                   <div className="formwrap-left">
                                          <div className="form-group">
                                                 <label htmlFor="destination">Destination</label>
                                                 <select name="destination" id="destinantion">
                                                        {/* Replace all these with fetchCountries API Call */}
                                                        <option value="America" >America</option>
                                                        <option value="Brazil" >Brazil</option>
                                                        <option value="Nigeria">Nigeria</option>
                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                        <option value="Tanzania">Tanzania</option>
                                                 </select>
                                          </div>
                                          </div>
                                          <div className="form-group">
                                                 <label htmlFor="budget">Budget</label>
                                                 <input type="number"   min="100" step="50.00"  max="250,000" placeholder ="$100"/>
                                          </div>
                                          <div className="form-group">
                                                 <label>How will you prefer to save? </label>
                                                 <select name="save" id="save">
                                                        <option value="Daily" placeholder = "Daily">Use Bank Card</option>
                                                     
                                                        <option value="Weekly" >Weekly</option>
                                                        <option value="Fortnightly" >Fortnightly</option>
                                                        <option value="Monthly">Monthly</option>
                                                        <option value="Quarterly">Quarterly</option>
                                                        <option value="Yearly">Yearly</option>
                                                 </select>
                                          </div>
                                          <div className="form-group">
                                                 <label >Amount to save per time </label>
                                                 <input type="number"   min="100" step="50.00"  max="250,000" />
                                          </div>
                                   </div>
                                   <div className="formwrap-right">
                                          <div className="form-group">
                                                 <label >Date</label>
                                                 <input type="date"  min="2020-01-01"  />
                                          </div>
                                          <div className="form-group">
                                                 <label >Preferred time</label>
                                                 <input type="time" placeholder ="08:00" />
                                          </div>
                                          <div className="form-group">
                                                 <label  for ="payment"> Where should the funds come from ?</label>
                                                 <select name="payment" id="payment">
                                                        <option value="Bank Card" placeholder = "Use Bank Card">Use Bank Card</option>
                                                        <option value="saab">Cash</option>
                                                 </select>
                                          </div>
                                          <div className="form-group">
                                                 <label > When do you want to start ?</label>
                                                 <input type="month"  />
                                          </div>
                                   </div>
                    
                            <Button backgroundColor = '#0692C4' text = 'DONE'  textColor="#fff"   borderColor = '#0692C4'  borderRadius = '4px'
                                          extraStyle ={{
                                                 height: '55px' , 
                                                 width: '180px',
                                                 fontSize : '18px',
                                          }}
                            />

                     </form>
              </section>
       )
}

export default AccountForm
