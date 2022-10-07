import React from "react";
import {BsTwitter} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

function Heropage() {
  return (
    <div className="hero-section py-5">
      <div class="container text-center">
        <div class="row mt-5">
          <div class="col">
            <div className="roadmapcenter">
              <h1 className="fontstyle ">Halloween Floki</h1>
            </div>
          </div>

          <div class="col">
            <div className="roadmapcenter">
              <div className="color">
                <h3 class="card-title fontcard">$FLOH Live Now!</h3> <br />
                <button type="button" className="downloadbtn1  mb-3">
                  Buy
                </button>  <br />  
                <a className="bg-primary p-2 rounded "> < BsTwitter color="white" size={30}/> </a> &nbsp;   
                <a className=" p-2 rounded btn1"> < BsTelegram color="white"  size={30}/> </a>

             <p className="fontcard fw-bold">Contract : 0x2c0e76dade015bc390a13c1b</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heropage;
