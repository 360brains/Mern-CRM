import React, { useEffect, useState } from 'react';
import { Row, Card, CardBody, CardTitle, Table, Button } from 'reactstrap';
import { Colxx } from '../common/CustomBootstrap';
import DataForms from '../DataForms/DataForms';
import { getProduct } from '../../api/product';


const DefaultTable = () => {

  const [data, setData] = useState([])

  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(true)
  }

  const loadData = async () => {

    let { data } = await getProduct()

    setData(data.products);
    console.log(data.products);
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleCloseModal = () => {
    setModal(false)
  }

   const handleReload = () =>{
       window.location.reload()
   }
  return (
    <>
      <main>

        <Row className="mb-5">
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <Button variant="primary" onClick={handleModal}>Add Product</Button>
                <CardTitle>
                  <className id="table.bootstrap-responsive" />
                </CardTitle>

                <Table responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data && data ? <>
                        {data.map((dat) => (
                          <tr>
                            <th scope="row">{dat._id}</th>
                            <td>{dat.productName}</td>
                            <td>{dat.productDesc}</td>
                            <td>{dat.productPrice}</td>
                            <td>{dat.productQty}</td>
                            
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

      {modal && modal === true ?
        <DataForms modal={modal} closeModal={handleCloseModal} reload={handleReload} />
        : null}
    </>
  );
};
export default DefaultTable;
