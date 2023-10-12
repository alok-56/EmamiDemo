import React, { useState } from "react";
import "./Dashboard.css";
import Logo from "../../Images/logo.png";
import Overview from "../../Images/overviewBtn.png";
import Analities from "../../Images/Analities.png";
import Logout from "../../Images/Logout.png";
import Profile from "../../Images/profile.png";
import Form from "react-bootstrap/Form";
import High from "../../Images/high.png";
import { DatePicker } from "antd";
import { Lines } from "../../Charts/Line";
import exportimg from "../../Images/export.png";
import barimg from "../../Images/bar.png";
import pieimg from "../../Images/pie.png";
import Tableimg from "../../Images/table.png";
import Lineimg from "../../Images/Lineimg.png";
import Scanicon from "../../Images/scansicon.png";
import ExportAll from "../../Images/exportfull.png";
import { Geo } from "../../Charts/Geo";
import { PieChart } from "../../Charts/PieChart";
import { BarChart } from "../../Charts/Bar";
import TextChart from "../../Charts/Text";
import { useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;

const Dashboard = () => {
  const [select, setselect] = useState(0);
  const [select1, setselect1] = useState(1);
  const [select2, setselect2] = useState(2);
  const [select3, setselect3] = useState(3);
  const [Dayselect, setDaySelect] = useState(0);
  const ChartType = [pieimg, barimg, Lineimg, Tableimg, exportimg];
  const DayType = ["Date", "Week", "Month"];

  const navigate = useNavigate();
  const LogoutUser = () => [navigate("/")];

  return (
    <div className="head">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 d-none d-md-none d-lg-block d-sm-none  "
        >
            <div
              style={{
                height: "100vh",
               padding:10,
                backgroundColor: "rgba(29, 29, 65, 1)",
              }}
            >
              <div className="text-center">
                <img className="mt-4" style={{ width: 100 }} src={Logo}></img>
              </div>
              <div className="text-center">
                <img
                  style={{ marginTop: "50px", width: 150 }}
                  src={Overview}
                ></img>
              </div>
              <div className="text-center" onClick={() => alert("hello")}>
                <img
                  style={{ marginTop: "30px", width: 100 }}
                  src={Analities}
                ></img>
              </div>
              <div className="text-center" onClick={() => LogoutUser()}>
                <img
                  style={{
                    marginTop: "30px",
                    width: 80,
                    position: "absolute",
                    bottom: 30,
                    left: 40,
                  }}
                  src={Logout}
                ></img>
              </div>
            </div>
          </div>

          {/* //-------------------DashBoard Head-------------------------------------// */}
          <div
            style={{
              height: "100vh",
              backgroundColor: "rgba(20, 19, 50, 1)",
            }}
            className="col-lg-10 col-md-12 col-sm-12 col-12 "
          >
            <div
              style={{
                height: 200,
                width: "100%",
              }}
              className="mt-3"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div class="head1">
                  <h4 style={{ color: "#fff", marginLeft: 0, marginTop: 5 }}>
                    Dashboard
                  </h4>
                </div>
                <div class="logo">
                  <img
                    className="img-fluid"
                    style={{
                      color: "#fff",
                      marginLeft: 0,
                      marginTop: 1,
                      height: 30,
                    }}
                    src={Logo}
                  ></img>
                </div>

                <div style={{ marginRight: 30, display: "flex" }}>
                  <img
                    src={Profile}
                    style={{ height: 40, width: 40, borderRadius: 50 }}
                  ></img>
                  <div className="mt-1">
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: 10,
                        marginLeft: 5,
                      }}
                    >
                     Emami Product
                    </p>
                    <p
                      style={{
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: 10,
                        marginLeft: 5,
                        marginTop: -18,
                      }}
                    >
                      Director
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------Head End-------------------------------------- */}

              {/* ------------------------------Divider start-------------------------------------- */}

              <div
                style={{
                  width: "100%",
                  height: 2,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                }}
              ></div>
              {/* ------------------------------Divider End-------------------------------------- */}

              <div style={{ marginLeft: 0 }} className="mt-1">
                <div>
                  <p
                    style={{
                      fontSize: 25,
                      fontWeight: "600",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Overview
                  </p>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 1)",
                      marginTop: -18,
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    Track QR Code scanning activity based on date, geography,
                    and device
                  </p>
                </div>

                {/* ----------------------------Input Box---------------------------- */}
                <div className="mt-4" style={{ width: "100%" }}>
                  <div className="row ">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
                      <Form.Control
                        style={{
                          backgroundColor: "rgba(20, 19, 50, 1)",
                          color: "#fff",
                          width: 180,
                        }}
                        placeholder="Select QR Code"
                      />
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                      <Form.Select
                        style={{
                          backgroundColor: "rgba(20, 19, 50, 1)",
                          color: "#fff",
                          width: 180,
                        }}
                        aria-label="Default select example"
                      >
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-lg-0 mt-md-0 mt-sm-3 mt-3">
                      <RangePicker
                        style={{
                          backgroundColor: "rgba(20, 19, 50, 1)",
                          width: 180,
                          padding: 6,
                        }}
                        rang
                      ></RangePicker>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-6 col-6 mt-lg-0 mt-md-4 mt-sm-3 mt-3 text-md-center">
                      <p style={{ width: 180 }} className="btn btn-primary">
                        Get Analytics
                      </p>
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------Input End------------------------------------ */}

                {/* ------------------------------------------------Result Start---------------------------------- */}
                <h3 style={{ color: "#fff" }}>Results</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "rgba(29, 29, 65, 1)",
                    width: 230,
                    borderRadius: 5,
                  }}
                >
                  <p
                    style={{
                      color: "rgba(93, 95, 239, 1)",
                      fontWeight: "600",
                      fontSize: 18,
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    Total Scans : 19
                  </p>
                  <p
                    style={{
                      marginLeft: 20,
                      color: "rgba(31, 218, 28, 1)",
                      marginTop: 12,
                    }}
                  >
                    88%
                  </p>
                  <img
                    src={High}
                    height={15}
                    width={15}
                    style={{ marginTop: 18, marginLeft: 6 }}
                  ></img>
                </div>

                {/* ---------------------------------Result End------------------------------- */}

                {/* ---------------------------------------Graph started----------------------------- */}

                <div
                  className="row mt-3"
                  style={{
                    backgroundColor: "rgba(20, 19, 50, 1)",
                  }}
                >
                  {/* -----------------------------------------------Graph1------------------------------------------------------- */}

                  <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                    <div
                      style={{
                        width: "100%",
                        height: 275,
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        borderRadius: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 16,
                              color: "#fff",
                              fontWeight: "500",
                              marginTop: 5,
                            }}
                          >
                            Scans by Date
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              border: "1px solid rgba(174, 171, 216, 1)",
                              height: 30,
                              color: "rgba(174, 171, 216, 1)",
                              padding: 4,
                              fontSize: 10,
                              width: 100,
                              marginTop: 5,
                              borderRadius: 5,
                            }}
                          >
                            {DayType && DayType.length > 0
                              ? DayType.map((item, index) => (
                                  <div style={{ display: "flex" }}>
                                    <p
                                      style={{
                                        marginTop: 2,
                                        color:
                                          Dayselect === index ? "#fff" : null,
                                        fontWeight:
                                          Dayselect === index ? "bold" : null,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => {
                                        setDaySelect(index);
                                      }}
                                    >
                                      {item}
                                    </p>
                                    <div
                                      style={{
                                        height: 20,
                                        width: 0.5,
                                        backgroundColor:
                                          "rgba(174, 171, 216, 1)",
                                        borderRadius: "50%",
                                        marginLeft: 2,
                                      }}
                                    ></div>
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //--------------------------------Change Graphs--------------------------------// */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              border: "1px solid rgba(174, 171, 216, 1)",
                              height: 30,
                              fontSize: 10,
                              width: 160,
                              marginTop: 5,
                              borderRadius: 5,
                              marginLeft: 10,
                            }}
                          >
                            {ChartType && ChartType.length > 0
                              ? ChartType.map((item, index) => (
                                  <div
                                    style={{
                                      height: 30,
                                      width: 30,
                                      marginTop: 5,
                                    }}
                                  >
                                    <img
                                      onClick={() => {
                                        setselect(index);
                                      }}
                                      src={item}
                                      style={{
                                        height: 20,
                                        padding: 5,
                                        width: 20,
                                        color: "#fff",
                                        backgroundColor:
                                          select === index
                                            ? "rgba(99, 89, 233, 1)"
                                            : null,
                                      }}
                                    ></img>
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          height: 200,
                          padding: 5,
                        }}
                      >
                        {select === 0 ? (
                          <PieChart data={[9, 4]}></PieChart>
                        ) : select === 1 ? (
                          <BarChart></BarChart>
                        ) : select === 2 ? (
                          <Lines data={[20, 90, 90, 70]}></Lines>
                        ) : select === 3 ? (
                          <TextChart></TextChart>
                        ) : (
                          <Lines data={[19, 60, 100, 40]}></Lines>
                        )}

                        {select === 3 ? null : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              style={{ height: 10, width: 15 }}
                              className="mt-2"
                              src={Scanicon}
                            ></img>
                            <p
                              className="mt-1"
                              style={{
                                color: "rgba(150, 165, 184, 1)",
                                marginLeft: 10,
                                fontSize: 12,
                                fontWeight: "bold",
                              }}
                            >
                              Scan
                            </p>
                            <p
                              className="mt-1"
                              style={{
                                color: "rgba(255, 255, 255, 1)",
                                marginLeft: 10,
                                fontSize: 12,
                                fontWeight: "bold",
                              }}
                            >
                              19
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* -----------------------------------------------Graph2------------------------------------------------------- */}
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-sm-2 mt-lg-0 mt-md-0 mt-2">
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        height: 275,
                        borderRadius: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 16,
                              color: "#fff",
                              fontWeight: "500",
                              marginTop: 5,
                            }}
                          >
                            Scans by Browser
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* //--------------------------------Change Graphs--------------------------------// */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              border: "1px solid rgba(174, 171, 216, 1)",
                              height: 30,
                              fontSize: 10,
                              width: 160,
                              marginTop: 5,
                              borderRadius: 5,
                              marginLeft: 10,
                            }}
                          >
                            {ChartType && ChartType.length > 0
                              ? ChartType.map((item, index) => (
                                  <div
                                    style={{
                                      height: 30,
                                      width: 30,
                                      marginTop: 5,
                                    }}
                                  >
                                    <img
                                      onClick={() => {
                                        setselect1(index);
                                      }}
                                      src={item}
                                      style={{
                                        height: 20,
                                        padding: 5,
                                        width: 20,
                                        backgroundColor:
                                          select1 === index
                                            ? "rgba(99, 89, 233, 1)"
                                            : null,
                                      }}
                                    ></img>
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          height: 200,
                          padding: 5,
                          marginTop: 35,
                        }}
                      >
                        {select1 === 0 ? (
                          <div
                            style={{
                              marginTop: -50,
                            }}
                          >
                            <PieChart data={[10, 15]}></PieChart>
                          </div>
                        ) : select1 === 1 ? (
                          <BarChart></BarChart>
                        ) : select1 === 2 ? (
                          <Lines data={[20, 90, 90, 70]}></Lines>
                        ) : select1 === 3 ? (
                          <div
                            style={{
                              marginTop: -50,
                            }}
                          >
                            <TextChart></TextChart>
                          </div>
                        ) : (
                          <Lines data={[19, 60, 100, 40]}></Lines>
                        )}

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: select === 3 ? "30" : null,
                          }}
                          className="mt-1"
                        >
                          <img
                            style={{ height: 10, width: 15 }}
                            className="mt-2"
                            src={Scanicon}
                          ></img>
                          <p
                            className="mt-1"
                            style={{
                              color: "rgba(150, 165, 184, 1)",
                              marginLeft: 10,
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                          >
                            Browsers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* -----------------------------------------------Graph3------------------------------------------------------- */}
                  <div className="col-lg-3 col-md-12 col-sm-12 col-12 mt-sm-2 mt-lg-0 mt-md-2 mt-2">
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        height: 275,
                        borderRadius: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 14,
                              color: "#fff",
                              fontWeight: "500",
                              marginTop: 8,
                            }}
                          >
                            Scans by Geographical
                          </p>
                          <p
                            style={{
                              fontSize: 8,
                              color: "#fff",
                              fontWeight: "400",
                              marginTop: -16,
                            }}
                          >
                            Click country to view details
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* //--------------------------------Change Graphs--------------------------------// */}
                          <div
                          // style={{
                          //   display: "flex",
                          //   justifyContent: "space-evenly",
                          //   border: "1px solid rgba(174, 171, 216, 1)",
                          //   height: 30,
                          //   fontSize: 10,
                          //   width: 60,
                          //   marginTop: 5,
                          //   borderRadius: 5,
                          //   marginLeft: 10,
                          // }}
                          >
                            <img
                              style={{
                                height: 20,
                                width: 60,
                                marginTop: 10,
                              }}
                              src={ExportAll}
                            ></img>
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          height: "100%",
                          padding: 5,
                        }}
                      >
                        <Geo></Geo>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------Graph Secound Part--------------------------- */}

                  {/* -----------------------------------------------Graph4------------------------------------------------------- */}

                  <div className="col-lg-5 col-md-6 col-sm-12 col-12 mt-3">
                    <div
                      style={{
                        width: "100%",
                        height: 275,
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        borderRadius: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 16,
                              color: "#fff",
                              fontWeight: "500",
                              marginTop: 5,
                            }}
                          >
                            Scans by Time
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* //--------------------------------Change Graphs--------------------------------// */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              border: "1px solid rgba(174, 171, 216, 1)",
                              height: 30,
                              fontSize: 10,
                              width: 160,
                              marginTop: 5,
                              borderRadius: 5,
                              marginLeft: 10,
                            }}
                          >
                            {ChartType && ChartType.length > 0
                              ? ChartType.map((item, index) => (
                                  <div
                                    style={{
                                      height: 30,
                                      width: 30,
                                      marginTop: 5,
                                    }}
                                  >
                                    <img
                                      onClick={() => {
                                        setselect2(index);
                                      }}
                                      src={item}
                                      style={{
                                        height: 20,
                                        padding: 5,
                                        width: 20,
                                        backgroundColor:
                                          select2 === index
                                            ? "rgba(99, 89, 233, 1)"
                                            : null,
                                      }}
                                    ></img>
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          height: 200,
                          padding: 5,
                        }}
                      >
                        {select2 === 0 ? (
                          <PieChart data={[80, 10]}></PieChart>
                        ) : select2 === 1 ? (
                          <BarChart></BarChart>
                        ) : select2 === 2 ? (
                          <Lines data={[20, 90, 90, 70]}></Lines>
                        ) : select2 === 3 ? (
                          <Lines data={[10, 30, 50, 70]}></Lines>
                        ) : (
                          <Lines data={[19, 60, 100, 40]}></Lines>
                        )}

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            style={{ height: 10, width: 15 }}
                            className="mt-2"
                            src={Scanicon}
                          ></img>
                          <p
                            className="mt-1"
                            style={{
                              color: "rgba(150, 165, 184, 1)",
                              marginLeft: 10,
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                          >
                            Scan
                          </p>
                          <p
                            className="mt-1"
                            style={{
                              color: "rgba(255, 255, 255, 1)",
                              marginLeft: 10,
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                          >
                            19
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* -----------------------------------------------Graph5------------------------------------------------------- */}
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-sm-2 mt-lg-3 mt-md-0 mt-2">
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        height: 275,
                        borderRadius: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 16,
                              color: "#fff",
                              fontWeight: "500",
                              marginTop: 5,
                            }}
                          >
                            Scans by OS
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* //--------------------------------Change Graphs--------------------------------// */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              border: "1px solid rgba(174, 171, 216, 1)",
                              height: 30,
                              fontSize: 10,
                              width: 160,
                              marginTop: 5,
                              borderRadius: 5,
                              marginLeft: 10,
                            }}
                          >
                            {ChartType && ChartType.length > 0
                              ? ChartType.map((item, index) => (
                                  <div
                                    style={{
                                      height: 30,
                                      width: 30,
                                      marginTop: 5,
                                    }}
                                  >
                                    <img
                                      onClick={() => {
                                        setselect3(index);
                                      }}
                                      src={item}
                                      style={{
                                        height: 20,
                                        padding: 5,
                                        width: 20,
                                        backgroundColor:
                                          select3 === index
                                            ? "rgba(99, 89, 233, 1)"
                                            : null,
                                      }}
                                    ></img>
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          height: 200,
                          padding: 5,
                          marginTop: 35,
                        }}
                      >
                        {select3 === 0 ? (
                          <div
                            style={{
                              marginTop: -50,
                            }}
                          >
                            <PieChart data={[10, 15]}></PieChart>
                          </div>
                        ) : select3 === 1 ? (
                          <BarChart></BarChart>
                        ) : select3 === 2 ? (
                          <Lines data={[20, 90, 90, 70]}></Lines>
                        ) : select3 === 3 ? (
                          <Lines data={[10, 30, 50, 70]}></Lines>
                        ) : (
                          <Lines data={[19, 60, 100, 40]}></Lines>
                        )}

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                          className="mt-1"
                        >
                          {/* <img
                            style={{ height: 10, width: 15 }}
                            className="mt-2"
                            src={Scanicon}
                          ></img>
                          <p
                            className="mt-1"
                            style={{
                              color: "rgba(150, 165, 184, 1)",
                              marginLeft: 10,
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                          >
                            Browsers
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* -----------------------------------------------Graph6------------------------------------------------------- */}
                  <div className="col-lg-3 col-md-12 col-sm-12 col-12 mt-sm-2 mt-lg-3 mt-md-2 mt-2">
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        height: 275,
                        borderRadius: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 14,
                              color: "#fff",
                              fontWeight: "500",
                              marginTop: 8,
                            }}
                          >
                            Scans by Devices
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* //--------------------------------Change Graphs--------------------------------// */}
                          <div
                          // style={{
                          //   display: "flex",
                          //   justifyContent: "space-evenly",
                          //   border: "1px solid rgba(174, 171, 216, 1)",
                          //   height: 30,
                          //   fontSize: 10,
                          //   width: 60,
                          //   marginTop: 5,
                          //   borderRadius: 5,
                          //   marginLeft: 10,
                          // }}
                          >
                            <img
                              style={{
                                height: 20,
                                width: 60,
                                marginTop: 10,
                              }}
                              src={ExportAll}
                            ></img>
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          height: 200,
                          padding: 5,
                          marginTop: 0,
                        }}
                      >
                        {select === 0 ? (
                          <PieChart data={[10, 20]}></PieChart>
                        ) : select === 1 ? (
                          <Lines data={[12, 40, 80, 90]}></Lines>
                        ) : select === 2 ? (
                          <Lines data={[20, 90, 90, 70]}></Lines>
                        ) : select === 3 ? (
                          <Lines data={[10, 30, 50, 70]}></Lines>
                        ) : (
                          <Lines data={[19, 60, 100, 40]}></Lines>
                        )}

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                          className="mt-1"
                        >
                          <img
                            style={{ height: 10, width: 15 }}
                            className="mt-2"
                            src={Scanicon}
                          ></img>
                          <p
                            className="mt-1"
                            style={{
                              color: "rgba(150, 165, 184, 1)",
                              marginLeft: 10,
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                          >
                            Browsers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------Graph Secound Part--------------------------- */}

              {/* ---------------------------------------------Grapg End------------------------------------ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
