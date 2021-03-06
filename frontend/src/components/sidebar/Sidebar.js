import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [openDashboard,setOpenDashboard] = useState(false)
    return (
        <div>

            <div class="menu">
                <div class="main-menu">
                    <div class="scroll">
                        <ul class="list-unstyled">
                            <li class="active" >
                                <Link to="/app">
                                    <i class="iconsminds-shop-4" onClick={()=>setOpenDashboard(true)}></i>
                                    <span>Dashboards</span>
                                </Link>
                            </li>
                            
                            <li>
                                <Link to="/userTable">
                                    <i class="iconsminds-digital-drawing"></i>Users
                        </Link>
                            </li>
                            <li>
                                <Link to="/application">
                                    <i class="iconsminds-air-balloon-1"></i> EditProduct
                        </Link>
                            </li>

                            <li>
                                <Link  to="/data">
                                
                                    <i class="iconsminds-three-arrow-fork"></i> Product
                                    
                        </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="sub-menu">
                    <div class="scroll">
                   
                        <ul class="list-unstyled">
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#collapseAuthorization" aria-expanded="true"
                                    aria-controls="collapseAuthorization" class="rotate-arrow-icon opacity-50">
                                    <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Authorization</span>
                                </a>
                                <div id="collapseAuthorization" class="collapse show">
                                    <ul class="list-unstyled inner-level-menu">
                                        <li>
                                            <a href="Pages.Auth.Login.html">
                                                <i class="simple-icon-user-following"></i> <span
                                                    class="d-inline-block">Login</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Pages.Auth.Register.html">
                                                <i class="simple-icon-user-follow"></i> <span
                                                    class="d-inline-block">Register</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Pages.Auth.ForgotPassword.html">
                                                <i class="simple-icon-user-unfollow"></i> <span class="d-inline-block">Forgot
                                            Password</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="simple-icon-user-unfollow"></i> <span class="d-inline-block">Roles</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                        <ul class="list-unstyled" data-link="applications">
                            <li>
                                <a href="Apps.MediaLibrary.html">
                                    <i class="simple-icon-picture"></i> <span class="d-inline-block">Library</span>
                                </a>
                            </li>
                            <li>
                                <a href="Apps.Todo.List.html">
                                    <i class="simple-icon-check"></i> <span class="d-inline-block">Todo</span>
                                </a>
                            </li>
                            <li>
                                <a href="Apps.Survey.List.html">
                                    <i class="simple-icon-calculator"></i> <span class="d-inline-block">Survey</span>
                                </a>
                            </li>
                            <li>
                                <a href="Apps.Chat.html">
                                    <i class="simple-icon-bubbles"></i> <span class="d-inline-block">Chat</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="list-unstyled" data-link="ui">
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#collapseForms" aria-expanded="true"
                                    aria-controls="collapseForms" class="rotate-arrow-icon opacity-50">
                                    <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Forms</span>
                                </a>
                                <div id="collapseForms" class="collapse show">
                                    <ul class="list-unstyled inner-level-menu">
                                        <li>
                                            <a href="Ui.Forms.Components.html">
                                                <i class="simple-icon-event"></i> <span class="d-inline-block">Components</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Forms.Layouts.html">
                                                <i class="simple-icon-doc"></i> <span class="d-inline-block">Layouts</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Forms.Validation.html">
                                                <i class="simple-icon-check"></i> <span class="d-inline-block">Validation</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Forms.Wizard.html">
                                                <i class="simple-icon-magic-wand"></i> <span
                                                    class="d-inline-block">Wizard</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#collapseDataTables" aria-expanded="true"
                                    aria-controls="collapseDataTables" class="rotate-arrow-icon opacity-50">
                                    <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Datatables</span>
                                </a>
                                <div id="collapseDataTables" class="collapse show">
                                    <ul class="list-unstyled inner-level-menu">
                                        <li>
                                            <a href="Ui.Datatables.Rows.html">
                                                <i class="simple-icon-screen-desktop"></i> <span class="d-inline-block">Full
                                            Page UI</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Datatables.Scroll.html">
                                                <i class="simple-icon-mouse"></i> <span class="d-inline-block">Scrollable</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Datatables.Pagination.html">
                                                <i class="simple-icon-notebook"></i> <span
                                                    class="d-inline-block">Pagination</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Datatables.Default.html">
                                                <i class="simple-icon-grid"></i> <span class="d-inline-block">Default</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" data-toggle="collapse" data-target="#collapseComponents" aria-expanded="true"
                                    aria-controls="collapseComponents" class="rotate-arrow-icon opacity-50">
                                    <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Components</span>
                                </a>
                                <div id="collapseComponents" class="collapse show">
                                    <ul class="list-unstyled inner-level-menu">
                                        <li>
                                            <a href="Ui.Components.Alerts.html">
                                                <i class="simple-icon-bell"></i> <span class="d-inline-block">Alerts</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Badges.html">
                                                <i class="simple-icon-badge"></i> <span class="d-inline-block">Badges</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Buttons.html">
                                                <i class="simple-icon-control-play"></i> <span
                                                    class="d-inline-block">Buttons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Cards.html">
                                                <i class="simple-icon-layers"></i> <span class="d-inline-block">Cards</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="Ui.Components.Carousel.html">
                                                <i class="simple-icon-picture"></i> <span class="d-inline-block">Carousel</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Charts.html">
                                                <i class="simple-icon-chart"></i> <span class="d-inline-block">Charts</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Collapse.html">
                                                <i class="simple-icon-arrow-up"></i> <span
                                                    class="d-inline-block">Collapse</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Dropdowns.html">
                                                <i class="simple-icon-arrow-down"></i> <span
                                                    class="d-inline-block">Dropdowns</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Editors.html">
                                                <i class="simple-icon-book-open"></i> <span
                                                    class="d-inline-block">Editors</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Icons.html">
                                                <i class="simple-icon-star"></i> <span class="d-inline-block">Icons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.InputGroups.html">
                                                <i class="simple-icon-note"></i> <span class="d-inline-block">Input
                                            Groups</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Jumbotron.html">
                                                <i class="simple-icon-screen-desktop"></i> <span
                                                    class="d-inline-block">Jumbotron</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Modal.html">
                                                <i class="simple-icon-docs"></i> <span class="d-inline-block">Modal</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Navigation.html">
                                                <i class="simple-icon-cursor"></i> <span
                                                    class="d-inline-block">Navigation</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="Ui.Components.PopoverandTooltip.html">
                                                <i class="simple-icon-pin"></i> <span class="d-inline-block">Popover &
                                            Tooltip</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Sortable.html">
                                                <i class="simple-icon-shuffle"></i> <span class="d-inline-block">Sortable</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Ui.Components.Tables.html">
                                                <i class="simple-icon-grid"></i> <span class="d-inline-block">Tables</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>

                        <ul class="list-unstyled" data-link="menu" id="menuTypes">

                            <li>
                                <a href="#" data-toggle="collapse" data-target="#collapseMenuDetached" aria-expanded="true"
                                    aria-controls="collapseMenuDetached" class="rotate-arrow-icon collapsed">
                                    <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Data Types</span>
                                </a>
                                <div id="collapseMenuDetached" class="collapse">
                                    <ul class="list-unstyled inner-level-menu">
                                        <li>
                                            <Link to="/orders">
                                                <i class="simple-icon-layers"></i> <span class="d-inline-block">Data 1</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Sidebar
