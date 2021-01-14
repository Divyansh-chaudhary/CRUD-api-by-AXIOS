import React from 'react'

export default function Contact() {
   return (
      <div>
         <form>
            <div class="container">
               <form>
                  <div class="form-group row">
                     <div class="col-sm-1-12">
                        <input type="text" class="form-control" name="inputName" id="inputName" placeholder="Enter you" />
                     </div>
                  </div>
                  <div class="form-group row">
                     <div class="col-sm-1-12">
                        <input type="text" class="form-control" name="inputName" id="inputName" placeholder="" />
                     </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
               </form>
            </div>
         </form>
      </div>
   )
}
