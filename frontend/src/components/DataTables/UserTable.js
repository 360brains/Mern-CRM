import React, { useEffect, useState } from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  Button
} from "reactstrap";

import { Colxx } from "../SepratorStyle/CustomStrap";
import Table from "./Tables";
import { Link } from "react-router-dom";
import { getUserData, getAllUsers } from "../../api/auth";



const OrdersList = () => {

  const [userData , setUserData] = useState()
  const [singleUser, setSingleUser] = useState()
 


  const getAllUserData = async () => {
     
    const {data} = await getAllUsers()

    setUserData(data);

  }

  const getLoginUserData = async () => {
     
    const {data} = await getUserData()

    setSingleUser(data.user._id);

  }
  
  
  useEffect(() => {
    getAllUserData()
    getLoginUserData()

  }, [])

    let loginUser = singleUser && singleUser

   const UsersData = userData && userData.allUsers.filter((data) => data._id !== loginUser)
  

  const cols = React.useMemo(
    () => [
      // {
      //   Header: 'Id',
      //   accessor: '_id',
      //   cellClass: 'list-item-heading w-40',
      //   Cell: (props) => <>{props.value}</>,
      // },
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
        cellClass: 'text-muted w-20',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Role',
        accessor: 'role',
        cellClass: 'text-muted w-10',
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
            <h1>Users</h1>
            {/* <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item">
                  <Link to="/admin/dashboard">User</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  all Users
                </li>
              </ol>
            </Breadcrumb> */}
            <Link to ='/adduser'>
                    <button
                      type="button"
                      className="btn btn-primary ml-3 mb-1 mr-5"
                    >
                      Add User
                    </button> 
                    </Link>
            {/* <Button variant="primary">Add User</Button> */}
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
