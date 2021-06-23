import React,{useEffect, useState} from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from '../../redux/action';

const Edit = ({ match, history }) => {

  const productId = match.params.productId;

  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQty, setProductQty] = useState("");

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  useEffect(() => {
    if (!product) {
     dispatch(editProduct(productId))
    } else {
      setProductImage(product.fileName);
      setProductName(product.productName);
      setProductPrice(product.productPrice);
      setProductDesc(product.productDesc);
      setProductQty(product.productQty);
    }
  }, [productId, product]);


  const handleImageUpload = e => {
		const image = e.target.files[0];
		setProductImage(image);
	};

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("productImage", productImage);
    formData.append("productName", productName);
    formData.append("productDesc", productDesc);
    formData.append("productPrice", productPrice);
    formData.append("productQty", productQty);

    const config = {
      headers: {
				'Content-Type': 'multipart/form-data',
			},
    };
            await axios.put(`/api/product/${productId}`, formData, config).then((res) => {
              history.push("/data");
            }).catch((err) => {
              console.log("eror", err);
            });
          
  };

  const backButton = () =>{
    history.push("/app")
  }
  
  return (
   <>
     <main>
     <div className="container my-3">
<div className="row">
  <div className="col-md-8 mx-auto">
    <div>
      <br />
      <div className="modal-content">
        <form onSubmit={handleProductSubmit}>
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Update Product</h5>
          </div>
          <div className="modal-body my-2">
            <>
              <label className="btn btn-dark mr-4">
                Choose file
                <input
                  type="file"
                  name="productImage"
                  accept="images/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </label>
              {productImage && productImage.name ? (
                <span className="badge bg-secondary">
                  {productImage.name}
                </span>
              ) : productImage ? (
                <img
                  className="img-thumbnail"
                  style={{
                    width: "120px",
                    height: "80px",
                  }}
                  src={`/uploads/${productImage}`}
                  alt="product"
                />
              ) : null}

              <div className="form-group">
                <label className="text-secondary">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="text-secondary">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="productDesc"
                  value={productDesc}
                  onChange={(e) => setProductDesc(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label className="text-secondary">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="productPrice"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                  <label className="text-secondary">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    max="1000"
                    name="productQty"
                    value={productQty}
                    onChange={(e) => setProductQty(e.target.value)}
                  />
                </div>
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
              onClick={backButton}
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
     
    
  );
}

export default Edit;