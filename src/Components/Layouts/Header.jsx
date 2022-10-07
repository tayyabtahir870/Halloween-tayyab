import React from "react";

function Header() {
  return (
    <div>
      <div className="header ">
        <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img
                src="Assests/pic.png"
                alt=""
                width={80}
              />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="hhhhh">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"></li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                     <b className="navfontcolor"> About</b>
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor">Tokenomics</b>
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor">Roadmap</b>
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor">Documents</b>
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                       <b className="navfontcolor"> FAQ</b>
                    </a>
                  </li>{" "}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                  <button type="button" className=" navcolor1">MINT FLOH RAFFLE NFT</button>
                      
                    </a>
                  </li>
            
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
