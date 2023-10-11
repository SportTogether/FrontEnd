import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { localStorageServices } from "../../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../../Constants";
class ThanhToanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: 300, // Đặt thời gian đếm ngược ban đầu ở 60 giây (có thể thay đổi)
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000); // Mỗi giây cập nhật thời gian
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  updateTimer = () => {
    if (this.state.timeRemaining > 0) {
      this.setState((prevState) => ({
        timeRemaining: prevState.timeRemaining - 1,
      }));
    } else {
      clearInterval(this.interval);
    }
  };
  formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} phút ${seconds} giây`;
  }
  render() {
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
          <h1 className="text-2xl font-medium py-10" id="countdown">
            HẾT HẠN SAU {this.formatTime(this.state.timeRemaining)}
          </h1>
          <h1 className="text-2xl font-medium py-10">
            THANH TOÁN XONG VUI LÒNG NHẤN VÀO NÚT
          </h1>
          <button
            type="button"
            className="text-2xl font-medium mt-10 bg-green-600 p-3 rounded-2xl mb-[100px]"
            onClick={() => {
              alert("Chúc mừng bạn đã thành công!!!");
              let users_id = JSON.parse(
                localStorageServices.getUser(SPORT_LOCALSTORAGE).id
              );

              let values = {
                users_id: users_id,
                status_id: 3,
              };
              try {
                const response = fetch(
                  "http://localhost:8080/api/orders/update/status_id",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                  }
                ).then((response) => response.json());
              } catch (error) {
                console.error("Lỗi xảy ra: ", error);
              }

              setTimeout(() => {
                window.location.href = "/dat-san";
              }, 2000);
            }}
          >
            HOÀN THÀNH
          </button>
        </div>
      </>
    );
  }
}

export default ThanhToanPage;
