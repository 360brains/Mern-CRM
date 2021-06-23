import React, { useState } from "react";
import { NavLink ,useHistory} from "react-router-dom";
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
import { Colxx } from "../components/SepratorStyle/CustomStrap";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { signin } from "../api/auth";
import { setAuthentication } from "../helpers/auth";
import { getLocalStorage } from "../helpers/localStorage";
import { ErrorMessage, WarningMessage } from "../components/Messages/message";

const Signin = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMsg: "",
    warningMsg: ""
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
      warningMsg: ""
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        warningMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        warningMsg: "Email is invalid",
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };

      setFormData({
        ...formData,
      });
      signin(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);
          let storage = getLocalStorage();
          if (storage && storage.role === 1) {
            history.push('/app')
          } else {
            setFormData({
              ...formData,
              errorMsg: "It's seems that you are not an Admin",
            });
          }
        })
        .catch((err) => {
          setFormData({
            ...formData,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  const { email, password, errorMsg, warningMsg } = formData;

  return (
    <>
     {getLocalStorage() && getLocalStorage().role === 1 ? (
        history.push("/app")
      ) : (
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
                      Please use your credentials to login.
                      <br />
                      If you are not a member, please{" "}
                      <NavLink to="/signup" className="white">
                        register
                      </NavLink>
                      .
                    </p>
                  </div>
                  <div className="form-side">
                    <NavLink to="/" className="white">
                      <span className="logo-single" />
                    </NavLink>
                    <CardTitle className="mb-4">Login</CardTitle>
                    <Form
                      className="av-tooltip tooltip-label-bottom"
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      {errorMsg !== "" ? ErrorMessage(errorMsg) : null}
                      {warningMsg !== "" ? WarningMessage(warningMsg) : null}
                      <FormGroup className="form-group has-float-label">
                        <Label>Email</Label>
                        <Input
                          className="form-control"
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup className="form-group has-float-label">
                        <Label>Password</Label>
                        <Input
                          className="form-control"
                          type="password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <div className="d-flex justify-content-between align-items-center">
                        <NavLink to="/">Forget Password?</NavLink>
                        <Button
                          color="primary"
                          type="submit"
                          className={`btn-shadow btn-multiple-state 
                              `}
                          size="lg"
                        >
                          <span className="spinner d-inline-block">
                            <span className="bounce1" />
                            <span className="bounce2" />
                            <span className="bounce3" />
                          </span>
                          <span className="label">Login</span>
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
      )
}
    </>
  );
};

export default Signin;
