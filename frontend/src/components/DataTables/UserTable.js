import React, { useEffect } from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
} from "reactstrap";

import { Colxx } from "../SepratorStyle/CustomStrap";
import Table from "./Tables";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from '../../redux/action';



const OrdersList = () => {

  const dispatch = useDispatch()

  const getProducts = useSelector((state) => state.getProductsReducer);
  const { Users } = getProducts

  useEffect(() => {
    getDispatchData()
  }, [])
  const getDispatchData = async () => {
    await dispatch(getUser())

  }

  const UsersData = Users && Users.respones

  const cols = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: '_id',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Name',
        accessor: 'username',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Email',
        accessor: 'email',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'UpdatedAt',
        accessor: 'updatedAt',
        cellClass: 'text-muted w-40',
        Cell: (props) => <>{props.value}</>,
      },
    ],
    []
  );

  return (
    <>
      <main>
        <Row>
          <Colxx xxs="12">
            <h1>Orders</h1>
            <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item">
                  <Link to="/admin/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  all orders
                </li>
              </ol>
            </Breadcrumb>
          </Colxx>
        </Row>
        {UsersData && UsersData ?

          <Row>
            <Colxx xxs="12">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>

                  </CardTitle>
                  <Table columns={cols} data={UsersData} />
                </CardBody>
              </Card>
            </Colxx>
          </Row>

          :
          <div className="loading"></div>
        }

      </main>

    </>
  );
};

export default OrdersList;
