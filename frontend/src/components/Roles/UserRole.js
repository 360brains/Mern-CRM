import React, { useEffect, useState } from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  Button,
  Table
} from "reactstrap";

import { Colxx } from "../SepratorStyle/CustomStrap";
import { Link } from "react-router-dom";
import { getRoles } from '../../api/role';



const UserRole = () => {

  const [singleUser, setSingleUser] = useState()

  const getRoleUserData = async () => {
     
    const {data} = await getRoles()

    setSingleUser(data.user._id);

  }
  

  const [ roleData, setRoleData] = useState()

  const loadData = async () => {

    let {data: role } = await getRoles()

    setRoleData(role.roles);
    console.log(role.roles);
  }
  useEffect(() => {
    loadData()
    // setSingleUser()
  }, [])

  let getRoleUser = singleUser && singleUser


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

      <Row className="mb-5">
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
            <Link to ='/addrole'>
              <Button variant="primary" >Add Role</Button>
              </Link>
              <CardTitle>
                <className id="table.bootstrap-responsive" />
              </CardTitle>
   
              <Table responsive>
                <thead>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    roleData && roleData ? <>
                    {roleData.map((data) => (

                        <tr>
                          {/* <td scope="row">{dat._id}</td> */}
                          <td>{data.role}</td>
                      <Link to ={`/editrole/${data._id}`}>    
                    <button
                      type="button"
                      className="btn btn-primary mb-1 mr-5"
                      // onClick={() => handleEditRole(data.role._id)}
                    >
                      Edit
                    </button> 
                    </Link>

                        </tr>
                        ))}
                          </>
                        : <div className="loading" />
                    }
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </main>
  </>
  );
};

export default UserRole;
