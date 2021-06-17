import React, { useState } from "react";
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx } from "../components/SepratorStyle/CustomStrap";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { SuccessMessage, ErrorMessage , InfoMessage , WarningMessage } from "../components/Messages/message";
import {signup} from '../api/auth';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: false,
    errorMsg: false,
    infoMsg: false,
    warningMsg: false
  });

  const {
    username,
    email,
    password,
    confirmPassword,
    successMsg,
     errorMsg,
     infoMsg,
     warningMsg
  } = formData;

  const handleChange = (evt) =>{
    setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        successMsg: false,
        errorMsg: false,
        infoMsg: false,
        warningMsg: false
    })
      }

  const handleForm = (e) => {
    e.preventDefault();
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(confirmPassword)
    ) {
      setFormData({
        ...formData,
        infoMsg: "All Fields are required",
      });
    }else if(username.length < 3){
        setFormData({
            ...formData,
             warningMsg: "username must be at least 3 chars long'"
          })
    }else if(!isEmail(email)){
        setFormData({
            ...formData,
             warningMsg: "Email is invalid"
          })  
    }else if(!equals(password , confirmPassword)){
        setFormData({
          ...formData,
          warningMsg: "passwords do not match"
        })   
       }else{
    
        const {email, username, password} = formData
        const data  = {username, email , password}
    
          setFormData({ 
             ...formData,
          })
    
        signup(data).then( (response) =>{
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword:"",
          errorMsg: false,
          infoMsg: false,
          warningMsg: false,
          successMsg: response.data.successMessage
        })
          }).catch(err =>{
            setFormData({...formData , errorMsg: err.response.data.errorMessage})
          })
       }
  };
  return (
    <>
      <div className="background show-spinner no-footer">
        <div className="fixed-background"></div>
        <main>
          <div className="container">
            <Row className="row h-100">
              <Colxx xxs="12" md="10" className="mx-auto my-auto">
                <Card className="auth-card">
                  <div className="position-relative image-side ">
                    <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
                    <p className="white mb-0">
                      Please use this form to register. <br />
                      If you are a member, please{" "}
                      <NavLink to="/" className="white">
                        login
                      </NavLink>
                      .
                    </p>
                  </div>
                  <div className="form-side">
                    <NavLink to="/" className="white">
                      <span className="logo-single" />
                    </NavLink>
                    <CardTitle className="mb-4">Register</CardTitle>
                    <Form onSubmit={handleForm} noValidate>
                      {infoMsg !== false ? InfoMessage(infoMsg) : null}
                      {warningMsg !== false ? WarningMessage(warningMsg) : null}
                      {successMsg !== false ? SuccessMessage(successMsg) : null}
                      {errorMsg !== false ? ErrorMessage(errorMsg) : null}
                      <FormGroup className="form-group has-float-label  mb-4">
                        <Label>UserName</Label>
                        <Input type="text" 
                        name="username"
                        value={username}
                        onChange={handleChange} />
                      </FormGroup>

                      <FormGroup className="form-group has-float-label  mb-4">
                        <Label>Email</Label>
                        <Input type="email"
                        name="email"
                         value={email}
                         onChange={handleChange} />
                      </FormGroup>

                      <FormGroup className="form-group has-float-label  mb-4">
                        <Label>Password</Label>
                        <Input type="password"
                        name="password"
                        value={password}
                        onChange={handleChange} />
                      </FormGroup>
                      <FormGroup className="form-group has-float-label  mb-4">
                        <Label>Confirm Password</Label>
                        <Input type="password"
                         name="confirmPassword"
                         value={confirmPassword}
                         onChange={handleChange} />
                      </FormGroup>
                      <div className="d-flex justify-content-end align-items-center">
                        <Button
                          type="submit"
                          color="primary"
                          className="btn-shadow"
                          size="lg"
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>
      </div>
    </>
  );
};

export default Signup;
