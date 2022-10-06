import React from "react";
import {BiDollar} from 'react-icons/bi'
import {FaBullhorn} from 'react-icons/fa'
import {BiWater} from 'react-icons/bi'
import {FaUserShield} from 'react-icons/fa'


function Tokenomics() {
  return (
    <div>
      <div className="tokenomics ">
        <div className="container ">
          <br />
          <br />
          <br />
          <br />
          <h5 className="font4">
            <b> ________ WHAT IS OUR TOKENOMICS</b>
          </h5>{" "}
          &nbsp;
          <p className="font3"> 204600
            At Halloween Floki, we are designing a project based on definitive
            market rules and fundamental economic principles. Halloween Floki
            reconciles a high-performance protocol with integral price stability
            features.
          </p>{" "}
          &nbsp;
          <p className="font3">Total Sudopply: 1 000 000 000 000 FLOH</p> &nbsp;
          <p className="font3">8% Buy and Sell Tax:</p> &nbsp;
          <li className="font3">
            4% holders rewards: Dividend tax on all transactions that will be
            distributed every 24 hours to holders in BUSD.
          </li>
          <li className="font3">
            1% liquidity: Liquidity tax on all transactions to prevent major
            price fluctuation after a large trade by filling the liquidity pool.
          </li>
          <li className="font3">
            3% marketing: Marketing tax on all transactions allows the Halloween
            Floki marketing team to reinvest and grow the project to its maximum
            potential.
          </li>{" "}
          <br />
          <br />
          <h5 className="font4">
            <b> ________ WHAT ARE OUR FEATURES</b>
          </h5>
          <br />
          <br />
        </div>

        <div>
          <div class="container  ">
            <div class="row">


              <div class="col  ">

              <div className="color " >
              <div className="card-body">
                <BiDollar color="white" size={100}/>
             <h3 className="fontcard">$BUSD Rewards</h3>
             <p className="fontcard1">Earn automatic <br /> Binance pegged USD ($BUSD), rewards <br /> by holding your Halloween Floki <br /> Coin – 4% of every buy, transfer <br /> and sell transaction is <br /> redistributed automatically to <br /> $FLOH holders. You will receive <br /> the rewards automatically in <br /> your wallet or claim your <br /> rewards manually in <br /> our upcoming reward app tracker.</p>
            
             </div>
               </div>



              </div>



              <div class="col ">

              <div className="color" >
  
             <div className="card-body">
                <FaBullhorn color="white" size={100}/>
              <h3 className="fontcard">Marketing</h3>
              <p className="fontcard1">3% of every transaction will <br /> directly go to the marketing <br /> wallet in order to ensure an <br /> increase in exposure <br /> throughout advertisement <br /> platforms, social media and to <br /> secure contracts and deals <br /> with influencers. This will help <br /> FLOH achieve an international <br /> status and to be known within <br /> every community!</p>
              
             </div>
              </div>
              </div>



              <div class="col ">

              <div className="color" >
              <div className="card-body">
              <BiWater color="white" size={100}/>
               
                <h3 className="fontcard">Liquidity Pool</h3>
                 <p className="fontcard1">Our Smart contract deposits 1% <br /> from every transaction as <br /> $FLOH and $BNB into a liquidity <br />  pool which has been locked <br /> and certified. Pancakeswap <br /> fixes the low liquidity problems <br /> of DEXs through their Liquidity <br /> Pools, ensuring traders can <br /> always Buy & Sell without <br /> liquidity issues. A bigger <br /> liquidity pool will provide more <br /> stability to the $FLOH price.</p>
                  
                   </div>
                     </div>
              </div>



              <div class="col "> 

              <div className="color" >
              <div className="card-body">
              <FaUserShield color="white" size={100}/>
                <h3 className="fontcard">Anti-Whale <br /> Mechanism</h3>
              <p className="fontcard1">Our Anti-Whale mechanism <br /> ensures that no single <br /> transaction order can amount <br /> to more than 1% of the total <br /> supply of $FLOH. The Anti- <br /> Whale Mechanism won’t <br /> necessarily stop whales from <br /> selling, but having a maximum <br /> limit helps to prevent large <br /> selloffs and price manipulation.</p>
              
             </div>
              </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
