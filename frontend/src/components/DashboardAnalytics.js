import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Card, CardBody,Breadcrumb, CardImg } from "reactstrap";
import { Colxx } from  '../components/common/CustomBootstrap';

const DashboardAnalytics = () => {
  return (
    <>
      <main>
        <Row>
          <Colxx xxs="12">
            <h1 className="edit-heading">Dashboard</h1>
            {/* <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item">
                  <Link to="/app">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </Breadcrumb> */}
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="row icon-cards-row mb-2">
            <Colxx xxs="6" sm="4" md="3" className="mb-4">
              <Card>
                <CardBody className="text-center">
                  <i className="iconsminds-basket-coins" />
                  <p className="card-text font-weight-semibold mb-0">
                    Total Orders
                  </p>
                  <p className="lead text-center">
                   23
                  </p>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="6" sm="4" md="3" className="mb-4">
              <Card>
                <CardBody className="text-center">
                  <i className="iconsminds-mail-read" />
                  <p className="card-text font-weight-semibold mb-0">
                    Completed Orders
                  </p>
                  <p className="lead text-center">
                   12
                  </p>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="6" sm="4" md="3" className="mb-4">
              <Card>
                <CardBody className="text-center">
                  <i className="iconsminds-clock" />
                  <p className="card-text font-weight-semibold mb-0">
                    Pending Orders
                  </p>
                  <p className="lead text-center">
               34
                  </p>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="6" sm="4" md="3" className="mb-4">
              <Card>
                <CardBody className="text-center">
                  <i className="iconsminds-arrow-refresh" />
                  <p className="card-text font-weight-semibold mb-0">
                    Refunded Orders
                  </p>
                  <p className="lead text-center">
                  56
                  </p>
                </CardBody>
              </Card>
            </Colxx>
          </Colxx>
        </Row>
      </main>
    </>
  );
};

export default DashboardAnalytics;
