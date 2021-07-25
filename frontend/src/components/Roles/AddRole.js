import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Card, CardBody,Breadcrumb, CardImg,Button, Form, FormGroup, Label, Input, FormText,Table} from "reactstrap";
import { Colxx } from  '../common/CustomBootstrap';
import {AddRoles} from '../../api/role';
import { useRowSelect } from "react-table";


const AddRole = () => {
  
 const [roleName, setRoleName] = useState("")
  const [addRole ,setAddRole]=useState({
    
    Dashboard: "",
    EditProduct: "",
    Product: "",
    Roles: "",
  });
  const handleRoleChange = (e) => {
    setAddRole({
      ...addRole,
      [e.target.name]: e.target.value,
    });
  };


  const modules=['Dashboard','Users','Edit Product','Product','Roles']
  const modulesPermissions={}
  
    function handleWritePermission(e,module) {
     modulesPermissions[module] = ["write"]
      console.log('modulesPermissions: ', modulesPermissions);
    }

    function handleReadPermission(e,module) {
      modulesPermissions[module] = ["read"]
       console.log('modulesPermissions: ', modulesPermissions);
     }

     function handleDeletePermission(e,module) {
      modulesPermissions[module] = ["delete"]
       console.log('modulesPermissions: ', modulesPermissions);
     }

     const handleSubmit = () =>{
    
      if(roleName === ""){
        console.log("Plz add role");
      }else{
                AddRoles(roleName, modulesPermissions)
                console.log('modulesPermissions',modulesPermissions);
      }
           
     }
  return (
    <>
      <main>
        <Row>
          <Colxx xxs="12">
            <h1>Roles</h1>
            <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item">
                  <Link to="/app">Users</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  role
                </li>
              </ol>
            </Breadcrumb>
          </Colxx>
        </Row>
        <Form>
        <Label for="exampleEmail">Role</Label>
        <Input type="text" name="role" id="exampleEmail" defaultValue={roleName} onChange={(e) =>setRoleName(e.target.value)} placeholder="with a role" />
      {/* <form className='row' >
        <h3>select Roles</h3>
        <div className='form-check' >
          <input type='checkbox' className='form-check-input'></input>
          <label className='form-check-label ms-2'>all select</label>
        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input'></input>
          <label className='form-check-label ms-2'>all select</label>
        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input'></input>
          <label className='form-check-label ms-2'>all select</label>
        </div>
        
      </form> */}
      
      <Table>
    
      <thead>  
        <tr>
          <th>Modules</th>
          <th>All</th>
          <th>Write</th>
          <th>Read</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody className=''>
        {
          modules.map((module) => (
            <tr>
          <th scope="row">{module}</th>
          <td>
          
          <Input
          type="checkbox"
          />{' '}
          
          </td>
          <td>
          
          <Input type="checkbox" 
           onChange={(e) => handleWritePermission(e,module)}
          />{' '}
          
          </td>
          <td>
          
          <Input type="checkbox"
           onChange={(e) => handleReadPermission(e,module)}
          />{' '}
         
          </td>
          <td>
         
          <Input type="checkbox"
           onChange={(e) => handleDeletePermission(e,module)}
          />{' '}
       
          </td>
        </tr>
        
          ))
        }
             </tbody>
      
    </Table>
          
       <Button  onClick={handleSubmit} type="button">Submit</Button>
    </Form>
      </main>
    </>
  );
};

export default AddRole;
