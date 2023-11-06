import React, { useState, createRef, useRef, useEffect } from "react";
import "./Dashboard.css";
import Logo from "../../Images/logo.png";
import Overview from "../../Images/overviewBtn.png";
import Logout from "../../Images/Logout.png";
import Profile from "../../Images/logo192.png";
import Form from "react-bootstrap/Form";
import High from "../../Images/high.png";
import { DatePicker } from "antd";
import { Lines } from "../../Charts/Line";
import exportimg from "../../Images/export.png";
import barimg from "../../Images/bar.png";
// import pieimg from "../../Images/pie.png";
// import Tableimg from "../../Images/table.png";
import Lineimg from "../../Images/Lineimg.png";
import Scanicon from "../../Images/scansicon.png";
import ExportAll from "../../Images/exportfull.png";
import LineActive from "../../Images/selectedChart.png";
// import PieActive from "../../Images/pieactive.png";
import BarActive from "../../Images/baractive.png";
// import Textactive from "../../Images/textactive.png";
import { PieChart } from "../../Charts/PieChart";
import { BarChart } from "../../Charts/Bar";
// import TextChart from "../../Charts/Text";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import moment from "moment/moment";
import Dropdown from "react-bootstrap/Dropdown";
import { FetchRange } from "../../Api";
import { SpinnerRoundOutlined, SpinnerCircularFixed } from "spinners-react";
import GeoGraph, { Geo } from "../../Charts/Geo";
// import { useScreenshot } from "use-react-screenshot";
// import { WhatsappIcon, WhatsappShareButton } from "react-share";

const { RangePicker } = DatePicker;

const ImageDownload = (uri) => {
  const a = document.createElement("a");
  a.href = uri;
  a.download = "images.jpeg";
  a.click();
};

const Dashboard = () => {
  const [select, setselect] = useState(0);
  const [select1, setselect1] = useState(1);
  const [select2, setselect2] = useState(0);
  const [select3, setselect3] = useState(0);
  const [Dayselect, setDaySelect] = useState(1);
  const ChartType = [barimg, Lineimg, exportimg];
  const ChartActive = [BarActive, LineActive, exportimg];
  const DayType = ["Date", "Week", "Month"];
  const [DashBoard, setDashBoard] = useState(false);
  const [date, setDate] = useState([]);
  const [qr_code_name, setqr_code_name] = useState("");
  const [load, setLoad] = useState(false);
  const [toggle, setToggle] = useState(true);

  //--------------------Graph State---------------//
  const [data, setData] = useState("");
  const [totalscan, setTotalscan] = useState("");
  const [week, setWeek] = useState("");
  const [datetype, setDatetype] = useState("");
  const [Browser, setBrowser] = useState("");
  const [os, setOs] = useState("");
  const [device, setDevice] = useState("");
  const [time, setTime] = useState("");
  const [document, setDocument] = useState("");
  const [maps, setMap] = useState("");
  const [city, setCity] = useState("");

  const doc = [];
  const doc2 = [];
  const doc3 = [];
  const times = [];
  const oss = [];
  const browsers = [];
  const devices = [];
  const map = [];
  const State=[]

  const navigate = useNavigate();
  const LogoutUser = () => {
    localStorage.clear("user");
    toast("Logout Successfully");
    navigate("/");
  };

  const handleExport = () => {
    setselect(0);
    setselect1(1);
    setselect2(1);
    setselect3(1);
    toast("Exported Data Successfully");
    doc.push(data);
    doc2.push(week);
    doc3.push(datetype);
    times.push(time);
    oss.push(os);
    browsers.push(Browser);
    devices.push(device);
    map.push(maps);
    State.push(city)

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(doc);
    const worksheet2 = XLSX.utils.json_to_sheet(doc2);
    const worksheet3 = XLSX.utils.json_to_sheet(doc3);
    const worksheet4 = XLSX.utils.json_to_sheet(times);
    const worksheet5 = XLSX.utils.json_to_sheet(oss);
    const worksheet6 = XLSX.utils.json_to_sheet(browsers);
    const worksheet7 = XLSX.utils.json_to_sheet(devices);
    const worksheet8 = XLSX.utils.json_to_sheet(map);
    const worksheet9 = XLSX.utils.json_to_sheet(State);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Month");
    XLSX.utils.book_append_sheet(workbook, worksheet2, "Week");
    XLSX.utils.book_append_sheet(workbook, worksheet3, "Date");
    XLSX.utils.book_append_sheet(workbook, worksheet4, "Time");
    XLSX.utils.book_append_sheet(workbook, worksheet5, "Os");
    XLSX.utils.book_append_sheet(workbook, worksheet6, "Browser");
    XLSX.utils.book_append_sheet(workbook, worksheet7, "Device");
    XLSX.utils.book_append_sheet(workbook, worksheet8, "City");
    XLSX.utils.book_append_sheet(workbook, worksheet9, "State");

    // Create a blob from the workbook
    XLSX.writeFile(workbook, "MyEcel.xlsx");
  };

  // const ref = createRef(null);
  // const [image, takeScreenshot] = useScreenshot();

  const getImage1 = async () => {
    // takeScreenshot(ref.current);
    if (!toggle) {
      // ImageDownload(image);
      toast("Graph Captured Success");
    }
    setToggle(!toggle);
  };

  // let qr_code_name = "Zandu";
  let startDate = date[0];
  let endDate = date[1];

  //---------------------------Get Range Api Call---------------------------//
  const getRangeData = () => {
    if (!qr_code_name || qr_code_name === "Select Product") {
      toast("Product Name Required");
      return false;
    } else if (!startDate) {
      toast("Start Date Required");
      return false;
    } else if (!endDate) {
      toast("End Date Required");
    }

    setLoad(true);
    FetchRange(qr_code_name, startDate, endDate)
      .then((res) => {
        setData(res.month);
        setTotalscan(res.TotalScans);
        setWeek(res.week);
        setDatetype(res.date);
        setBrowser(res.Browser);
        setOs(res.Os);
        setDevice(res.device);
        setTime(res.time);
        setLoad(false);
        setDocument(res.result);
        setMap(res.map);
        setCity(res.citycode);
      })
      .catch((err) => {
        setLoad(false);
      });
  };

  //---------------------------End Get Range api call------------------------//

  //---------------------------Screenshots----------------------//

  return (
    <div
      className="head"
      style={{ height: "1030px", backgroundColor: "rgba(29, 29, 65, 1)" }}
    >
      <ToastContainer />
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-2 col-md-2 d-none d-md-none d-lg-block d-sm-none">
            <div
              style={{
                height: "100vh",
                position: "static",
                position: "fixed",
                padding: 13,
                backgroundColor: "rgba(29, 29, 65, 1)",
              }}
            >
              <div className="text-center">
                <img className="mt-4" style={{ width: 130 }} src={Logo}></img>
              </div>
              <div className="text-center" onClick={() => setDashBoard(false)}>
                <img
                  onClick={getImage1}
                  style={{ marginTop: "50px", width: 150 }}
                  src={Overview}
                ></img>
              </div>
              <div className="text-center">
                <p
                  className="btn btn-outline-secondary mt-4"
                  onClick={() => handleExport()}
                >
                  Export Analytics
                </p>
              </div>
              {/* <div className="text-center">
                {toggle ? (
                  <p
                    className="btn btn-outline-secondary mt-2"
                    onClick={() => getImage1()}
                  >
                    Capture Graph
                  </p>
                ) : (
                  <p
                    className="btn btn-outline-secondary mt-2"
                    onClick={() => getImage1()}
                  >
                    Download Graph
                  </p>
                )}
              </div> */}
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
            className="col-lg-10 col-md-12 col-sm-12 col-12"
          >
            <div
              style={{
                height: 200,
                width: "100%",
              }}
              className="mt-3"
            >
              {DashBoard ? null : (
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

                  <Dropdown>
                    <div style={{ marginRight: 30, display: "flex" }}>
                      <Dropdown.Toggle
                        style={{
                          backgroundColor: "rgba(29, 29, 65, 1)",
                          position: "relative",
                          bottom: 10,
                          background: "transparent",
                        }}
                        variant="dark"
                        id="dropdown-basic"
                        className="d-lg-none d-md-block d-sm-block d-block"
                      >
                        <img
                          src={Profile}
                          style={{ height: 40, width: 40, borderRadius: 50 }}
                        ></img>
                      </Dropdown.Toggle>
                      <img
                        className="d-lg-block d-md-none d-sm-none d-none"
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
                          Emami Adwin
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

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => LogoutUser()}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}

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
                <div className="mt-4" style={{ width: "80%" }}>
                  <div className="row ">
                    {/* <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
                       <Form.Control
                        style={{
                          backgroundColor: "#fff",
                          color: "#000",
                          width: "100%",
                        }}
                        placeholder="Select QR Code"
                      /> 
                    </div> */}

                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                      <Form.Select
                        style={{
                          backgroundColor: "rgba(20, 19, 50, 1)",
                          color: "#fff",
                          width: "100%",
                        }}
                        aria-label="Default select example"
                        onChange={(e) => setqr_code_name(e.target.value)}
                        value={qr_code_name}
                      >
                        <option>Select Product</option>
                        <option value="Boroplus">Boroplus</option>
                        <option value="Zandu">Zandu</option>
                        <option value="Creme">Creme</option>
                      </Form.Select>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-lg-0 mt-md-0 mt-sm-0 mt-0">
                      <RangePicker
                        style={{
                          backgroundColor: "#fff",
                          width: "100%",
                          padding: 6,
                        }}
                        className="white-text"
                        onChange={(value) => {
                          setDate(
                            value.map((item) => {
                              return item.format("YYYY-MM-DDTHH:mm:ss.SSSSSSZ");
                            })
                          );
                        }}
                      ></RangePicker>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-6 col-6 mt-lg-0 mt-md-4 mt-sm-3 mt-3 text-md-center ">
                      {load ? (
                        <SpinnerCircularFixed
                          size={30}
                          thickness={200}
                          speed={133}
                          color="rgba(172, 57, 59, 1)"
                          secondaryColor="rgba(57, 172, 102, 1)"
                          className="btn btn-primary"
                          style={{
                            width: 180,
                            height: 40,
                          }}
                        />
                      ) : (
                        <p
                          style={{ width: "100%" }}
                          className="btn btn-primary"
                          onClick={() => getRangeData()}
                        >
                          Get Analytics
                        </p>
                      )}
                    </div>
                    {/* <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
                       <Form.Control
                        style={{
                          backgroundColor: "#fff",
                          color: "#000",
                          width: "100%",
                        }}
                        placeholder="Select QR Code"
                      /> 
                    </div> */}
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
                    Total Scans : {totalscan}
                  </p>
                  <p
                    style={{
                      marginLeft: 20,
                      color: "rgba(31, 218, 28, 1)",
                      marginTop: 12,
                    }}
                  ></p>
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
                  // ref={ref}
                >
                  {/* -----------------------------------------------Graph1------------------------------------------------------- */}

                  <div
                    className="col-lg-5 col-md-6 col-sm-12 col-12"
                    id="divfull"
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        borderRadius: 5,
                        padding: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingLeft: 8,
                          paddingRight: 8,
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
                              width: 120,
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
                                        marginLeft: 4,
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
                                    {index === 2 ? null : (
                                      <div
                                        style={{
                                          height: 20,
                                          width: 0.5,
                                          backgroundColor:
                                            "rgba(174, 171, 216, 1)",
                                          borderRadius: "50%",
                                          marginLeft: 4,
                                        }}
                                      ></div>
                                    )}
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
                                    {select === index ? (
                                      <img
                                        onClick={() => {
                                          setselect(index);
                                        }}
                                        src={ChartActive[index]}
                                        style={{
                                          height: 20,
                                          padding: 5,
                                          width: 20,
                                          backgroundColor:
                                            select === index
                                              ? "rgba(99, 89, 233, 1)"
                                              : null,
                                        }}
                                      ></img>
                                    ) : (
                                      <img
                                        onClick={() => {
                                          setselect(index);
                                        }}
                                        src={item}
                                        style={{
                                          height: 20,
                                          padding: 5,
                                          width: 20,
                                          backgroundColor:
                                            select === index
                                              ? "rgba(99, 89, 233, 1)"
                                              : null,
                                        }}
                                      ></img>
                                    )}
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      {Dayselect === 1 ? (
                        <div
                          style={{
                            maxHeight: "100%",
                          }}
                        >
                          {select === 0 ? (
                            <BarChart
                              data={[
                                week.sun,
                                week.mon,
                                week.wed,
                                week.thues,
                                week.tues,
                                week.fri,
                                week.sat,
                                week.sun,
                              ]}
                              type={"day"}
                            ></BarChart>
                          ) : select === 1 ? (
                            <Lines
                              data={[
                                week.sun,
                                week.mon,
                                week.wed,
                                week.thues,
                                week.tues,
                                week.fri,
                                week.sat,
                                week.sun,
                              ]}
                              type={"day"}
                            ></Lines>
                          ) : (
                            //  <p className="btn btn-primary" onClick={()=>getImage1(1)}>download</p>
                            handleExport()
                          )}

                          {select === 2 ? null : (
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
                                Scans
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
                                {totalscan}
                              </p>
                            </div>
                          )}
                        </div>
                      ) : Dayselect === 0 ? (
                        <div
                          style={{
                            maxHeight: "100%",
                          }}
                        >
                          {select === 0 ? (
                            <BarChart data={datetype} type={"date"}></BarChart>
                          ) : select === 1 ? (
                            <Lines data={datetype} type={"date"}></Lines>
                          ) : (
                            handleExport()
                          )}

                          {select === 2 ? null : (
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
                                Scans
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
                                {totalscan}
                              </p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          style={{
                            maxHeight: "100%",
                          }}
                        >
                          {select === 0 ? (
                            <BarChart
                              data={[
                                data.jan,
                                data.feb,
                                data.march,
                                data.april,
                                data.may,
                                data.june,
                                data.july,
                                data.augest,
                                data.sept,
                                data.oct,
                                data.nov,
                                data.dec,
                              ]}
                            ></BarChart>
                          ) : select === 1 ? (
                            <Lines
                              data={[
                                data.jan,
                                data.feb,
                                data.march,
                                data.april,
                                data.may,
                                data.june,
                                data.july,
                                data.augest,
                                data.sept,
                                data.oct,
                                data.nov,
                                data.dec,
                              ]}
                            ></Lines>
                          ) : (
                            handleExport(select)
                          )}

                          {select === 2 ? null : (
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
                                Scans
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
                                {totalscan}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* -----------------------------------------------Graph2------------------------------------------------------- */}
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-sm-2 mt-lg-0 mt-md-0 mt-2">
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        padding: 10,
                        borderRadius: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingLeft: 5,
                          paddingRight: 5,
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
                                    {select1 === index ? (
                                      <img
                                        onClick={() => {
                                          setselect(index);
                                        }}
                                        src={ChartActive[index]}
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
                                    ) : (
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
                                    )}
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          maxHeight: "100%",
                          marginTop: 35,
                        }}
                      >
                        {/* 
select1 === 0 ? (
                          // <div
                          //   style={{
                          //     marginTop: -50,
                          //   }}
                          // >
                          //   <PieChart data={[10, 15]}></PieChart>
                          // </div>
                        ) : */}

                        {select1 === 0 ? (
                          <BarChart data={Browser} type={"browser"}></BarChart>
                        ) : select1 === 1 ? (
                          <Lines data={Browser} type={"browser"}></Lines>
                        ) : (
                          handleExport()
                        )}

                        {
                          // select1 === 1 ||
                          select1 === 2 || select1 === 3 ? null : (
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
                          )
                        }
                      </div>
                    </div>
                  </div>

                  {/* -----------------------------------------------Graph3------------------------------------------------------- */}
                  <div className="col-lg-3 col-md-12 col-sm-12 col-12 mt-sm-2 mt-lg-0 mt-md-2 mt-2">
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        height: "100%",
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
                              onClick={() => handleExport()}
                            ></img>
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                      // style={{
                      //   height: "100%",
                      //   padding: 5,
                      // }}
                      >
                        <GeoGraph data={city} map={maps}></GeoGraph>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------Graph Secound Part--------------------------- */}

                  {/* -----------------------------------------------Graph4------------------------------------------------------- */}

                  <div
                    className="col-lg-5 col-md-6 col-sm-12 col-12 mt-3"
                    style={{ marginBottom: 20 }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: 10,
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        borderRadius: 5,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingLeft: 8,
                          paddingRight: 8,
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
                                    {select2 === index ? (
                                      <img
                                        onClick={() => {
                                          setselect2(index);
                                        }}
                                        src={ChartActive[index]}
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
                                    ) : (
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
                                    )}
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          maxHeight: "100%",
                        }}
                      >
                        {select2 === 0 ? (
                          <BarChart data={time} type={"time"}></BarChart>
                        ) : select2 === 1 ? (
                          <Lines data={time} type={"time"}></Lines>
                        ) : (
                          handleExport()
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
                            Scans
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
                            {totalscan}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* -----------------------------------------------Graph5------------------------------------------------------- */}
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 col-12 mt-sm-2 mt-lg-3 mt-md-0 mt-2"
                    style={{ marginBottom: 20 }}
                  >
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        height: "100%",
                        borderRadius: 5,
                        padding: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginLeft: 5,
                          marginRight: 5,
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
                                    {select3 === index ? (
                                      <img
                                        onClick={() => {
                                          setselect3(index);
                                        }}
                                        src={ChartActive[index]}
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
                                    ) : (
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
                                    )}
                                  </div>
                                ))
                              : null}
                          </div>

                          {/* //-------------------------------Change graph End---------------------------------// */}
                        </div>
                      </div>
                      <div
                        style={{
                          maxHeight: "100%",
                          marginTop: 35,
                        }}
                      >
                        {select3 === 0 ? (
                          <BarChart data={os} type={"os"}></BarChart>
                        ) : select3 === 1 ? (
                          <Lines data={os} type={"os"}></Lines>
                        ) : (
                          handleExport()
                        )}

                        {select3 === 1 ||
                        select3 === 2 ||
                        select3 === 3 ? null : (
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
                              Os
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* -----------------------------------------------Graph6------------------------------------------------------- */}
                  <div
                    className="col-lg-3 col-md-12 col-sm-12 col-12 mt-sm-2 mt-lg-3 mt-md-2 mt-2"
                    style={{ marginBottom: 20 }}
                  >
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(29, 29, 65, 1)",
                        height: "100%",
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
                            class="export"
                          >
                            <img
                              style={{
                                height: 20,
                                width: 60,
                                marginTop: 10,
                                cursor: "pointer",
                              }}
                              src={ExportAll}
                              onClick={() => handleExport()}
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
                        <PieChart data={device}></PieChart>

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
                            Devices
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
