import React from 'react'
import {
    Row,
    Card,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";

const UserEdit = () => {
    return (
        <>
     <main>
     <div className="container my-3">
<div className="row">
  <div className="col-md-8 mx-auto">
    <div>
      <br />
      <div className="modal-content">
        <form >
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">User</h5>
          </div>
          <div className="modal-body my-2">
            <>
            

              <div className="form-group">
                <label className="text-secondary">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="productName"

                />
              </div>
              <div className="form-group">
                <label className="text-secondary">email</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="productDesc"

                ></textarea>
              </div>
              {/* <div className="form-group">
                <label className="text-secondary">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="productPrice"

                />
              </div> */}
              {/* <div className="form-group">
                  <label className="text-secondary">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    max="1000"
                    name="productQty"

                  />
                </div> */}
            </>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary text-white"
            >
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-primary text-white"
      
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</main>
      </>
    )
}

export default UserEdit