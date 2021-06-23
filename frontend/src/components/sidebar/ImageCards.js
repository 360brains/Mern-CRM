import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Card, CardBody, Breadcrumb, CardImg } from "reactstrap";
import { Colxx } from '../common/CustomBootstrap';
import {getProduct , deleteProduct} from '../../api/product';

const ImageCards = () => {

  const [data, setData] = useState([])


  const loadData = async () => {

    let { data } = await getProduct()
    setData(data.products);
  }

       const handleDelete = (e,id) =>{
        deleteProduct(id)
        window.location.reload()
       }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <>
      <main>
        <Row>
          <Colxx xxs="12">
            <h1>Dashboard</h1>
            <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item">
                  <Link to="/application">Application</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </Breadcrumb>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="row icon-cards-row mb-2">
              {data && data ? 
                data.map((dat) => (
                  <Colxx xxs="6" sm="4" md="3" className="mb-4">
                  <Card>
                  <CardBody className="text-center">
                    <CardImg src={`/uploads/${dat.fileName}`} 
                    style={{width: "300px",
                    height: "532px"}}
                     />
                    <i className="iconsminds-basket-coins" />
                    <p className="card-text font-weight-semibold mb-0">
                      {dat.productName}
                    </p>
                    <p className="lead text-center">
                       {dat.productQty}
                    </p>
                    <Link to={`/edit/${dat._id}`}>
                    <button
                      type="button"
                      className="btn btn-primary mb-1 mr-5"
                    >
                      Edit
                    </button> 
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger mb-1"
                      onClick={(e) => handleDelete(e, dat._id)}
                    >
                      Delete
                    </button>
                  </CardBody>
                </Card>
                </Colxx>
                ))
              : <div className="loading" />
}
          </Colxx>
        </Row>
      </main>
    </>
  );
};

export default ImageCards;
