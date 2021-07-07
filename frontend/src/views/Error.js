import React from "react";
import { getLocalStorage } from "../helpers/localStorage";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="background show-spinner no-footer">
      <div className="fixed-background"></div>
      <main>
        <div className="container">
          <div className="row h-100">
            <div className="col-12 col-md-10 mx-auto my-auto">
              <div className="card auth-card">
                <div className="position-relative image-side ">
                  <p className=" text-white h2">MAGIC IS IN THE DETAILS</p>
                  <p className="text-white mb-0">Yes, it is indeed!</p>
                </div>
                <div className="form-side">
                  <div className="text-center">
                    <span className="logo-single"></span>
                    <h6 className="mb-4">
                      Ooops... looks like an error occurred!
                    </h6>
                    <p className="mb-0 text-muted text-small mb-0">
                        Page not found
                    </p>
                    <p className="display-1 font-weight-bold mb-5">404</p>
                    {getLocalStorage() && getLocalStorage().role === "admin" ? (
                      <Link
                        to="/admin/dashboard"
                        className="btn btn-primary btn-lg btn-shadow"
                      >
                        GO BACK HOME
                      </Link>
                    ) : (
                      <Link
                        to="/"
                        className="btn btn-primary btn-lg btn-shadow"
                      >
                        GO BACK HOME
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Error;