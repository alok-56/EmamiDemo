import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

const TextChart = () => {
  
  return (
    <div style={{ width: "100%", color: "#fff", marginTop: 25 }}>
      <div id="head">
        <div
          style={{
            width: 300,
            display: "flex",
            justifyContent: "space-around",
            margin: "auto",
            textAlign: "start",
            fontWeight: 400,
            fontSize: 14,
          }}
        >
          <span>Week</span>
          <span>Count</span>
        </div>
        <div className="mt-3">
         
        
            <div
            style={{
              width: 300,
              display: "flex",
              justifyContent: "space-around",
              margin: "auto",
              textAlign: "start",
              fontSize: 14,
            }}
          >
            <span>Apple</span>
            <span>10</span>
          </div>
          
              
             
        </div>
      </div>
    </div>
  );
};

export default TextChart;
