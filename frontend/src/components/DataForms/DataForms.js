import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { createProduct } from "../../api/product";
import isEmpty from "validator/lib/isEmpty";
import {ErrorMessage } from "../Messages/message";


const DataForms = (props) => {
  const [productData, setProductData] = useState({
    productImage: null,
    productName: "",
    productDesc: "",
    productPrice: "",
    productQty: "",
    errorMessage: ""
  });
  const { productImage, productName, productDesc, productPrice, productQty, errorMessage } =
    productData;

  const handleProductImage = (e) => {
    setProductData({
      ...productData,
      errorMessage: "",
      [e.target.name]: e.target.files[0],
    });
  };

  const handleProductChange = (e) => {
    setProductData({
      ...productData,
      errorMessage: "",
      [e.target.name]: e.target.value,
    });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
     if( productImage === null){
      setProductData({
        ...productData,
        errorMessage: "Image are Required",
      });
     } else if(isEmpty(productName) ||
         isEmpty(productDesc) ||
         isEmpty(productPrice) ||
         isEmpty(productQty)) {
          setProductData({
            ...productData,
            errorMessage: "All fields are Required",
          });
         }else{
          let formData = new FormData();
          formData.append("productImage", productImage);
          formData.append("productName", productName);
          formData.append("productDesc", productDesc);
          formData.append("productPrice", productPrice);
          formData.append("productQty", productQty);
      
          createProduct(formData)
            .then((response) => {
              setProductData({
                productImage: null,
                productName: "",
                productDesc: "",
                productPrice: "",
                productQty: "",
                errorMessage: ""
              });
              console.log(response.data);
              // props.closeModal
            })
            .catch((err) => {
              console.log("Error Found", err);
              setProductData({ ...productData });
            });
         }
  };

  return (
    <form>
      <Modal
        style={{ marginRight: "10px", marginTop: "5px" }}
        isOpen={props.modal}
      >
        <ModalHeader toggle={props.closeModal}>Modal title</ModalHeader>
        <ModalBody>
        {errorMessage !== "" ? ErrorMessage(errorMessage) : null}
          <input
            type="file"
            name="productImage"
            onChange={handleProductImage}
            defaultValue={productImage}
          />
          <div className="form-group">
            <label className="text-secondary">Name</label>
            <input
              type="text"
              className="form-control"
              name="productName"
              onChange={handleProductChange}
              id="name"
              value={productName}
            />
          </div>
          <div className="form-group">
            <label className="text-secondary">Description</label>
            <textarea
              className="form-control"
              rows="3"
              name="productDesc"
              onChange={handleProductChange}
              id="description"
              value={productDesc}
            ></textarea>
          </div>
          <div className="form-group">
            <label className="text-secondary">Price</label>
            <input
              type="text"
              className="form-control"
              name="productPrice"
              onChange={handleProductChange}
              id="price"
              value={productPrice}
            />
          </div>
          <div className="form-group">
            <label className="text-secondary">Quantity</label>
            <input
              type="number"
              className="form-control"
              min="0"
              name="productQty"
              onChange={handleProductChange}
              id="quantity"
              value={productQty}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={handleProductSubmit}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={props.closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </form>
  );
};

export default DataForms;
