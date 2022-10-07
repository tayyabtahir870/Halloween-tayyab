import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Roadmap() {
  return (
    <div className="roadmap">
      <div>
        &nbsp; &nbsp;
        <h5 className="fontcard text-center  ">ROADMAP</h5>
        &nbsp;&nbsp;
        <h1 className="fontcard text-center">Our Plan</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
          position={"right"}
            className="vertical-timeline-element--work"
            contentStyle={{ color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2011 - present"
            iconStyle={{ background: "#F08648", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 1</h3>
            <ul>
              <li>Team Expansion</li>
              <li>
                Social Media and Community <br /> Integration
              </li>
              <li>Contract Creation</li>
              <li>Website Deployment</li>
              <li>Audit & KYC</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
             position={"left"}
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 2</h3>
            <ul>
              <li>Presale Whitelist Competition</li>
              <li>Presale Marketing Campaign</li>
              <li>Presale Launch on Pinksale</li>
              <li>Airdrop Partnership</li>
              <li>Foreign Communities Integration and Creation</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
             position={"right"}
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 3</h3>
            <ul>
              <li>Pre-Launch Marketing Campaign</li>
              <li>Launch on PancakeSwap</li>
              <li>Airdrop for Migrating Holders</li>
              <li>Reward Tracker Partnership</li>
              <li>Farm & Staking Pools</li>
              <li>CMC/CG Listings</li>
              <li>5 Million Market Cap</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
             position={"left"}
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 4</h3>
            <ul>
              <li>FLOH Holders Lottery</li>
              <li>
                Worldwide Halloween Dog Costume <br /> Contest
              </li>
              <li>CEX Listing</li>
              <li>ETH Bridging</li>
              <li>NFT Collection Website Integration</li>
              <li>NFT Collection Marketing Campaign</li>
              <li>15 Million Market Cap</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
             position={"right"}
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Phase 5</h3>
            <ul>
              <li>Influencers Campaign</li>
              <li>NFT Collection Whitelist Contest</li>
              <li>NFT Collection Launch</li>
              <li>Second CEX Listing</li>
              <li>
                Record for a Holiday Floki Project: 30 <br /> Million Market Cap
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Roadmap;
