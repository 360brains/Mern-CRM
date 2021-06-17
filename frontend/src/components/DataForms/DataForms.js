

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Forms from './Forms';


const DataForms = (props) => {

  const SubmitData = () =>{
    console.log("Data is Submitted");
  }


  return (
    <>
    
    <Modal style={{marginRight: "10px" ,marginTop:"5px"}} isOpen={props.modal}>
    <ModalHeader  toggle={props.closeModal} >Modal title</ModalHeader>
    <ModalBody>
     <Forms/>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={SubmitData}>Do Something</Button>{' '}
      <Button color="secondary" onClick={props.closeModal}>Cancel</Button>
    </ModalFooter>
  </Modal>


</>
  )
}

export default DataForms
