import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img
          src="../../../public/image/flagIcon.png"
          width={70}
          height={70}
          alt=""
        />
        <h1 className="slogan">ĐẶT SÂN TRỰC TUYẾN</h1>
      </div>
      <div className="footer-right">
        <img
          src="../../../public/image/hot.png"
          width={195}
          height={195}
          alt=""
        />
        <h1 className="slogan">ƯU ĐÃI</h1>
      </div>
    </footer>
  );
};

export default Footer;
