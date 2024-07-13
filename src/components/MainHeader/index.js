import React from "react";
import Logo from "../../assets/img/ptr.svg";
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const MainHeader = () => {
  return (
    <>
      <header className="mainHeader">
        <div className="logo">
          <img
            className="logo-img"
            src={Logo}
            // alt={page.label}
          />
        </div>
        <div className=" rightPart">
          <div>
            {" "}
            <HeadsetMicOutlinedIcon className="rightIcons"/> customer support 24/7
          </div>
          <div>
            Deliver to <LocationOnOutlinedIcon className="rightIcons"/>{" "} 500003 himayat sagar
          </div>
          <div>English 
            <KeyboardArrowDownIcon className="rightIcons"/>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
