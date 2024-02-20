import React from "react";
import { FaRegCalendarAlt,FaBan, FaCheckCircle ,FaCircle,FaTimes,FaSignInAlt, FaCrosshairs,FaChartBar,FaBullhorn,FaBell } from "react-icons/fa";
import {LiaSignInAltSolid} from "react-icons/lia";
import "./index.css"


function Status(){
    return (
            <div className="flex-grow-0 me-2 pe-4 ms-2" style={{ width:"275px" }}>
                    <h4>Course Status</h4>
                    <div style={{ width: "250px" }} className="btn-group ms-1 mb-3" aria-label="Basic example">
                        <button type="button" className="btn btn-light rounded-0">
                            <i className="fa fa-ban"></i>
                            Unpublish
                        </button>
                        <button type="button" className="btn btn-success rounded-0">
                            <i className="fa fa-check-circle-o"></i>
                            Published
                        </button>
                    </div>
                    <div className="container text-center">
                        <div className="row">
                            <button className="btn btn-light m-1 text-start">
                                <i className="fa fa-sign-in"></i>
                                Import Existing Content
                            </button>
                            <button className="btn btn-light m-1 text-start">
                                <i className="fa fa-sign-in"></i>
                                Import From Commons
                            </button>
                            <button className="btn btn-light m-1 text-start">
                                <i className="fa fa-crosshairs"></i>
                                Choose Home Page
                            </button>
                            <button className="btn btn-light m-1 text-start">
                                <i className="fa fa-bar-chart"></i>
                                View Course Stream
                            </button>
                            <button className="btn btn-light m-1 text-start">
                                <i className="fa fa-bullhorn"></i>
                                New Announcements
                            </button>
                            <button className="btn btn-light m-1 text-start">
                                <i className="fa fa-bar-chart"></i>
                                New Analytics
                            </button>
                            <button className="btn btn-light m-1 text-start">
                                <i className="fa fa-bell-o"></i>
                                View Course Notification
                            </button>
                        </div>
                    </div>
                    {/* <!-- To Do --> */}
                    <div className="mt-3 px-2">
                        <h6 className="fw-bold">To Do</h6>
                        <hr />
                        <div className="d-flex">
                            <div className="todo-1 wd-txt-dec-red">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                            </div>

                            <div className="ms-4 me-auto fs-12" style={{ color: "gray" }}>
                                <a href="#"
                                    className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                                    Grade A1 - ENV + HTML
                                    <br />
                                </a>
                                100 points
                                <i className="fa fa-circle fs-8" style={{marginLeft:"4px",marginRight:"4px"}}></i>
                                Sep 18 at 11:59 pm
                            </div>
                            <i className="fa fa-times pe-1 fs-13" style={{ color: "gray" }}></i>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <div className="d-flex justify-content-between">
                            <h6 className="fw-bold">Coming Up</h6>
                            <div>
                                <i className="fa fa-calendar"></i>
                                <a href="#"
                                    className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-12">View
                                    Calendar</a>
                            </div>
                        </div>
                        <hr />
                        <div className="mb-4 d-flex">
                            <i className="fa fa-calendar"></i>

                            <div className="ms-4 fs-12" style={{ color: "gray" }}>
                                <a href="#"
                                    className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                                    Lecture
                                    <br />
                                    <span style={{ color: "gray" }}>CS5610.48102.99291</span>
                                    <br />
                                    <span style={{ color: "gray" }}>Sep 11 at 6pm</span>
                                </a>
                            </div>
                        </div>
                        <div className="my-2 d-flex">
                            <i className="fa fa-calendar"></i>

                            <div className="ms-4 fs-12" style={{ color: "gray" }}>
                                <a href="#"
                                    className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                                    Web Dev Lecture
                                    <br />
                                    <span style={{ color: "gray" }}>CS5610.48102.99291</span>
                                    <br />
                                    <span style={{ color: "gray" }}>Sep 11 at 6pm</span>
                                </a>
                            </div>
                        </div>
                        <div className="my-4 d-flex">
                            <i className="fa fa-calendar"></i>

                            <div className="ms-4 fs-12" style={{ color: "gray" }}>
                                <a href="#"
                                    className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                                    CS4550 Lecture
                                    <br />
                                    <span style={{ color: "gray" }}>CS5610.48102.99291</span>
                                    <br />
                                    <span style={{ color: "gray" }}>Sep 11 at 6pm</span>
                                </a>
                            </div>
                        </div>
                        <a href="#"
                            className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                            12 more in the next week...</a>
                    </div>
                </div>
                
    )
}

export default Status;