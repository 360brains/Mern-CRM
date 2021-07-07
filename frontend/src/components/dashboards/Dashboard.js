import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../common/CustomBootstrap';
import {
    Card,
    CardBody,
    CardTitle,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <main>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <h1>Dashboard</h1>
                            <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                                <ol class="breadcrumb pt-0">
                                    <li class="breadcrumb-item">
                                        <Link to='/user'>Home</Link>                                                                                        
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="#">Library</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                            <div class="separator mb-5"></div>
                        </div>
                        <Row>
                            <Colxx lg="12" xl="6">
                                <Row>
                                    <Colxx md="12" className="mb-4">
                                        <Card>
                                            <div className="position-absolute card-top-buttons">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="" className="btn btn-header-light icon-button">
                                                        <i className="simple-icon-refresh" />
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        <DropdownItem>
                                                            <div>Sales</div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div>Sales</div>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <div>Sales</div>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                            <CardBody>
                                                <CardTitle>
                                                    <div>Sales sdswsg</div>
                                                </CardTitle>
                                                <div className="dashboard-line-chart">
                                                    <div>rjyr</div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Colxx>
                                </Row>
                            </Colxx>
                        </Row>
                       
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Dashboard
