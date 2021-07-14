import React, { useEffect, useState } from 'react'
import { createNewUser } from "../../api/auth";
import isEmpty from "validator/lib/isEmpty";
import { ErrorMessage } from "../Messages/message";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getRoles } from "../../api/role";
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
// import { use } from '../../../../backend/routes/auth';

const AddUser = () => {

  const [role, setRole] = useState()

  useEffect(async () => {
    const { data: { roles } } = await getRoles()
    console.log('data', roles);
    setRole(roles)
  }, [])

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [userData, setUsertData] = useState({

    username: "",
    email: "",
    password: "",


  });

  const [selectedRole, setSelectedRole] = useState("Select role")



  const handleRoleChange = (role) => {
    
    setSelectedRole(role);
    console.log('selectedRole',role);
  };


  const { username, email, password } = userData;

  const handleUserChange = (e) => {
    e.preventDefault()
    setUsertData({
      ...userData,
      errorMessage: "",
      [e.target.name]: e.target.value,
    });
  };


  const handleUserSubmit = (e) => {

    e.preventDefault();
    if (isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password)) {
      setUsertData({
        ...userData,
        errorMessage: "All fields are Required",
      });
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      // formData.append("role", role);
      console.log('username: ', username);
      console.log('email: ', email);
      console.log('password: ', password);

      console.log('formData: ', formData)
      createNewUser({ username, email, password, role: selectedRole })
        .then((response) => {
          setUsertData({
            username: "",
            email: "",
            password: "",
            // role: "",
          });
        })
        .catch((err) => {
          console.log("Error Found", err);
          setUsertData({ ...userData });
        });
    }
  };


  return (
    <>
      <main>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div>
                <br />
                <div className="modal-content">
                  <form action='/api/addUser' method='Post' id='addUser'>
                    <div className="modal-header bg-primary text-white">
                      <h5 className="modal-title">User</h5>

                    </div>

                    <div className="modal-body my-2">
                      <>

                        <div className="form-group">
                          <label className="text-secondary">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={handleUserChange}
                            id="name"
                            value={username}
                          />
                        </div>
                        <div className="form-group">
                          <label className="text-secondary">email</label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            onChange={handleUserChange}
                            id="email"
                            value={email}
                          />
                        </div>

                        <div className="form-group">
                          <label className="text-secondary">password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={handleUserChange}
                            id="password"
                            value={password}
                          />
                        </div>
                        <div className="form-group">
                          <label className="text-secondary">role</label>
                          {/* <input
              type="role"
              className="form-control"
              name="role"
              onChange={ handleUserChange}
              id="role"
              value= 'role'  
            /> */}
                        </div>

                        <Dropdown 
                         isOpen={dropdownOpen} toggle={toggle}>
                          <DropdownToggle caret 
                          >
                            {selectedRole}
                          </DropdownToggle>
                          <DropdownMenu >
                            {
                              role && role.map((roleValue) => (
                                <DropdownItem 
                                onClick={() => handleRoleChange(roleValue.role)}
                                key={roleValue._id}>{roleValue.role}</DropdownItem>
                              ))
                            }



                          </DropdownMenu>
                        </Dropdown>

                      </>
                    </div>

                    <div className="modal-footer">
                      <Button color="primary" type="submit" onClick={handleUserSubmit}>
                        Add User
                      </Button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default AddUser