import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Card, CardBody, Breadcrumb, CardImg, Button } from "reactstrap";
import { Colxx } from '../common/CustomBootstrap';

const ImageCards = () => {
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
            <Colxx xxs="6" sm="4" md="3" className="mb-4">
              <Card>
                <CardBody className="text-center">
                  <CardImg src={`${process.env.PUBLIC_URL}/img/cards/thumb-1.jpg`} />
                  <i className="iconsminds-basket-coins" />
                  <p className="card-text font-weight-semibold mb-0">
                    Total Orders
                  </p>
                  <p className="lead text-center">
                    23
                  </p>
                  <Link to ='/edit'>
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
                  >
                    Delete
                  </button>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="6" sm="4" md="3" className="mb-4">
              <Card>
                <CardBody className="text-center">
                <CardImg src={`${process.env.PUBLIC_URL}/img/cards/thumb-2.jpg`} />
                  <i className="iconsminds-mail-read" />
                  <p className="card-text font-weight-semibold mb-0">
                    Completed Orders
                  </p>
                  <p className="lead text-center">
                    12
                  </p>
                  <Link to ='/edit'>
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
                  >
                    Delete
                  </button>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="6" sm="4" md="3" className="mb-4">
              <Card>
                <CardBody className="text-center">
                <CardImg src={`${process.env.PUBLIC_URL}/img/cards/thumb-3.jpg`} />
                  <i className="iconsminds-clock" />
                  <p className="card-text font-weight-semibold mb-0">
                    Pending Orders
                  </p>
                  <p className="lead text-center">
                    34
                  </p>
                  <Link to ='/edit'>
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
                  >
                    Delete
                  </button>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="6" sm="4" md="3" className="mb-4">
              <Card>
                <CardBody className="text-center">
                <CardImg src={`${process.env.PUBLIC_URL}/img/cards/thumb-4.jpg`} />
                  <i className="iconsminds-arrow-refresh" />
                  <p className="card-text font-weight-semibold mb-0">
                    Refunded Orders
                  </p>
                  <p className="lead text-center">
                    56
                  </p>
                  <Link to ='/edit'>
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
                  >
                    Delete
                  </button>
                </CardBody>
              </Card>
            </Colxx>
          </Colxx>
        </Row>
      </main>
    </>
  );
};

export default ImageCards;
