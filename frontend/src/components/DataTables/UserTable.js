import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Card, CardBody, CardTitle, Table,Button } from 'reactstrap';
import {Colxx} from '../common/CustomBootstrap';
import DataForms from '../DataForms/DataForms';

const UserTable = () => {


  const [modal, setModal] = useState(false)

  const handleModal = () =>{
   setModal(true)
  }

  const handleCloseModal = () =>{
    setModal(false)
  }
  return (
    <>
    <main>  

      <Row className="mb-5">
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
            <Button variant="primary" onClick={handleModal}>Add User</Button>
              <CardTitle>
                <className id="table.bootstrap-responsive" />
              </CardTitle>

              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </main>

{modal && modal === true ? 
  <DataForms modal={modal} closeModal={handleCloseModal} />
: null }
    </>
  );
};
export default UserTable;
