import React from "react";
import facebook from "../../assets/icons/facebook_v2.svg";
import twitter from "../../assets/icons/twitter_v2.svg";
import youtube from "../../assets/icons/youtube_v2.svg";

function SidebarSocial() {
  return (
    <div>
      <h2 className="sidebar-title">Social</h2>
      <div className="d-flex flex-column sidebar-social-wrapper gap-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center gap-3 icon-text">
            <img src={facebook} alt="facebook" />
            <h3>Like</h3>
          </div>
          <div className="following-number">
            <p>25041 Fans</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center gap-3 icon-text">
            <img src={twitter} alt="twitter" />
            <h3>Follow</h3>
          </div>
          <div className="following-number">
            <p>25041 Followers</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center gap-3 icon-text">
            <img src={youtube} alt="youtube" />
            <h3>Subscribe</h3>
          </div>
          <div className="following-number">
            <p>941 Subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarSocial;
