import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Documents() {
  return (
    <div>
      <div className="documentcolor p-5">
        <div className="container pagecolor ">
          <div class="row">
            <div class="col-md-6 p-5  py-5">
              <div>
                <h6 className="font4">
                  <b> ________ Whitepaper</b>
                </h6>{" "}
                &nbsp;
              </div>
              <div>
                <h2 className="fw-bold fontcard">Read Our Documents</h2>
              </div>

              <div>
                <br />
                <br />
                <span className="fw-bold fontcard">
                  <AiFillCheckCircle color="#F27022" size={50} /> &nbsp; KYC
                </span>
              </div>

              <div>
                <span className="fw-bold fontcard">

                  <AiFillCheckCircle color="#F27022" size={50} /> &nbsp; Audit
                </span>
              </div>

              <div>
                <span className="fw-bold fontcard">
                  <AiFillCheckCircle color="#F27022" size={50} /> &nbsp;
                  Whitepaper
                </span>
              </div>
              <br />
              <br />
              <br />
              <button type="button" className="downloadbtn  ">
                Download
              </button>
            </div>

            <div class="col-md-6 ">
              <img className="img-fluid" src="Assests/pic1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;
