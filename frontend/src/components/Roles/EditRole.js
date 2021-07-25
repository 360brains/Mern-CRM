import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Card, CardBody,Breadcrumb, CardImg,Button, Form, FormGroup, Label, Input, FormText,Table} from "reactstrap";
import { Colxx } from  '../common/CustomBootstrap';

const EditRole = () => {
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
            <Link to ='/adduser'>
                    <button
                      type="button"
                      className="btn btn-primary mb-1 mr-5"
                    >
                      Add Role
                    </button> 
                    </Link>
          </Colxx>
        </Row>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Role</Label>
        <Input type="text" name="role" id="exampleEmail" placeholder="with a role" />
      </FormGroup>
      
      
      
      
      <FormGroup tag="fieldset">
      
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
        <tr>
          <th scope="row">Dashboard</th>
          <td>
          
          <Input type="checkbox" />{' '}
          
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
         
          <Input type="checkbox" />{' '}
       
          </td>
        </tr>
        <tr>
          <th scope="row">Users</th>
          <td>
          
          <Input type="checkbox" />{' '}
          
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
         
          <Input type="checkbox" />{' '}
       
          </td>
        </tr>
        <tr>
          <th scope="row">Edit Product</th>
          <td>
          
          <Input type="checkbox" />{' '}
          
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
         
          <Input type="checkbox" />{' '}
       
          </td>
        </tr>
        <tr>
          <th scope="row">Product</th>
          <td>
          
          <Input type="checkbox" />{' '}
          
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
         
          <Input type="checkbox" />{' '}
       
          </td>
        </tr>
        <tr>
          <th scope="row">Roles</th>
          <td>
          
          <Input type="checkbox" />{' '}
          
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
          
          <Input type="checkbox" />{' '}
         
          </td>
          <td>
         
          <Input type="checkbox" />{' '}
       
          </td>
        </tr>
      </tbody>
      
    </Table>
                
             </FormGroup>
     
      <Button>Submit</Button>
    </Form>
      </main>
    </>
  );
};

export default EditRole;
