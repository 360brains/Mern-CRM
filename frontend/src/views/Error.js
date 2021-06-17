import React from 'react'

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
                                        <a href="Dashboard.Default.html">
                                            <span className="logo-single"></span>
                                        </a>

                                        <h6 className="mb-4">Ooops... looks like an error occurred!</h6>
                                        <p className="mb-0 text-muted text-small mb-0">Error code</p>
                                        <p className="display-1 font-weight-bold mb-5">
                                            404
                                </p>
                                        <a href="Dashboard.Default.html" className="btn btn-primary btn-lg btn-shadow">GO BACK HOME</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Error
