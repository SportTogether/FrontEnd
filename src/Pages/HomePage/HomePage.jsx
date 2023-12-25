import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ModalSearch from "../../Components/Modal/ModalSearch";
import { localStorageServices } from "../../Services/localStorageServices";
const googleApiScript = document.createElement("script");
googleApiScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBh95ExKKtwAIPTnQGcDDL7XiUfjma97rA&libraries=places`;
googleApiScript.defer = true;
document.head.appendChild(googleApiScript);
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    // return showPosition();
  } else {
    document.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  // let location =
  //   "Latitude: " +
  //   position.coords.latitude +
  //   "Longitude: " +
  //   position.coords.longitude;
  // console.log("current location : ", location);

  var geocoder = new google.maps.Geocoder();

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  var latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

  geocoder.geocode({ location: latlng }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        let data = results[1].place_id;

        console.log("ChIJ6SU909godTERJ6kLdOwpSGI");
        localStorageServices.setOriginId(
          "originId",
          "ChIJ6SU909godTERJ6kLdOwpSGI"
        );
      } else {
        window.alert("No results found");
      }
    } else {
      window.alert("Geocoder failed due to: " + status);
    }
  });
}
// getLocation();
console.log("ChIJ6SU909godTERJ6kLdOwpSGI");
localStorageServices.setOriginId("originId", "ChIJ6SU909godTERJ6kLdOwpSGI");
const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop id="" className="w-auto h-full max-w-fit">
          <source
            src="../../../public/image/video_background.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container home-page">
        <div className="pt-[200px] pb-24 w-">
          <h1 className="text-3xl font-medium text-white pl-[100px] pb-[50px]">
            Chào buổi sáng
          </h1>
          <Input
            size="large"
            className="w-[400px] h-[50px] text-2xl font-medium ml-[70px]"
            placeholder="Tìm Kiếm Sân..."
            prefix={
              <SearchOutlined
                className="text-green-500 font-bold"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              />
            }
          />
          <ModalSearch isOpen={isModalOpen} onClose={handleCancel} />
        </div>
        <div className="home-page-group bg-green-200 rounded-[40px]">
          <div
            className="home-page-item border-r-2 border-white"
            onClick={() => {
              navigate("/dat-san");
            }}
          >
            <img src="../../../public/image/icon_datsan.png" alt="" />
            <h1>ĐẶT SÂN</h1>
          </div>
          <div
            className="home-page-item border-r-2 border-white"
            onClick={() => {
              navigate("/ket-noi");
            }}
          >
            <img src="../../../public/image/icon_ketnoi.png" alt="" />
            <h1>KẾT NỐI</h1>
          </div>
          <div
            className="home-page-item border-r-2 border-white"
            onClick={() => {
              navigate("/forum");
            }}
          >
            <img src="../../../public/image/icon_diendan.png" alt="" />
            <h1>DIỄN ĐÀN</h1>
          </div>
          <div
            className="home-page-item border-r-2 border-white"
            onClick={() => {
              navigate("/uu-dai");
            }}
          >
            <img src="../../../public/image/icon_uudai.png" alt="" />
            <h1>ƯU ĐÃI</h1>
          </div>
          <div
            className="home-page-item border-r-2 border-white"
            onClick={() => {
              navigate("/news");
            }}
          >
            <img src="../../../public/image/icon_tintuc.png" alt="" />
            <h1>TIN TỨC</h1>
          </div>
          <div
            className="home-page-item"
            onClick={() => {
              navigate("/dang-ky-doi-tac");
            }}
          >
            <img src="../../../public/image/icon_doitac.png" alt="" />
            <h1>ĐĂNG KÝ ĐỐI TÁC</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
