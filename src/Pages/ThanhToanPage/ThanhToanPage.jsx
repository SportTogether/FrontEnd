import React from "react";
import { useNavigate } from "react-router-dom";

const ThanhToanPage = () => {
  const navigate = useNavigate();
  const targetTime = new Date();
  targetTime.setMinutes(targetTime.getMinutes() + 10);
  // Cập nhật đồng hồ đếm ngược mỗi giây
  const countdown = document.getElementById("countdown");
  function updateCountdown() {
    const currentTime = new Date();
    const timeDifference = targetTime - currentTime;
    if (timeDifference <= 0) {
      countdown.innerHTML = "Đã hết thời gian!";
    } else {
      const minutes = Math.floor(timeDifference / 60000);
      const seconds = Math.floor((timeDifference % 60000) / 1000);
      countdown.innerHTML = `${minutes} phút ${seconds} giây`;
    }
  }
  // Cập nhật đồng hồ mỗi giây
  setInterval(updateCountdown, 1000);
  // Hiển thị thời gian ban đầu
  return (
    <>
      <Breadcrumb
        className="breadcrumb"
        separator=">"
        style={{ fontSize: 30 }}
        items={[
          {
            title: <h1 className="breadcrumb-title">TRANG CHỦ</h1>,
          },
          {
            title: <h1 className="breadcrumb-title">ĐẶT SÂN</h1>,
          },
          {
            title: <h1 className="breadcrumb-title">CHỌN SÂN</h1>,
          },
          {
            title: <h1 className="breadcrumb-title">THANH TOÁN</h1>,
          },
        ]}
      />
      <div className="py-10 text-center">
        <h1 className="text-3xl text-green-600 font-bold pb-10">
          QUÉT MÃ QR ĐỂ THANH TOÁN
        </h1>
        <img
          src="../../../public/image/hinhMaQr.jpg"
          width={400}
          height={400}
          alt=""
          className="mx-auto object-cover"
        />
        <h1 className="text-2xl font-medium py-10">
          HẾT HẠN SAU {updateCountdown()}
        </h1>
        <h1 className="text-2xl font-medium py-10">
          THANH TOÁN XONG VUI LÒNG NHẤN VÀO NÚT
        </h1>
        <button
          type="button"
          className="text-2xl font-medium mt-10 bg-green-600 p-3 rounded-2xl"
          onClick={() => {
            alert("Chúc mừng bạn đã thành công!!!");
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }}
        >
          HOÀN THÀNH
        </button>
      </div>
    </>
  );
};

export default ThanhToanPage;
