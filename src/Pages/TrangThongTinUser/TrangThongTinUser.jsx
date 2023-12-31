import React, { useEffect } from "react";
import { Avatar, Breadcrumb, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { localStorageServices } from "../../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { setlistSanUserDaDat } from "../../redux/QuanLyNguoiDungSlice";
import { useNavigate } from "react-router-dom";
const columns = [
  {
    title: <h1 className="text-3xl">Tên Sân</h1>,
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: <h1 className="text-3xl text-center">Thời Gian</h1>,
    dataIndex: "time",
    key: "time",
  },
  {
    title: <h1 className="text-3xl text-right">Trạng Thái</h1>,
    dataIndex: "status",
    key: "status",
  },
];
const listJoin = [
  {
    id: 1,
    name: "Sân Thành Thắng, Q12",
    time: "20h00 ngày 25/7/2021",
    status: "Đang chơi",
  },
  {
    id: 2,
    name: "Sân Đại Nam, Q12",
    time: "18h30 ngày 26/7/2021",
    status: "Chưa bắt đầu",
  },
  {
    id: 3,
    name: "Sân Phát Đạt, Q12",
    time: "14h30 ngày 29/7/2021",
    status: "Hoàn thành",
  },
  {
    id: 4,
    name: "Sân Vườn Lài, Q12",
    time: "14h30 ngày 29/7/2021",
    status: "Hoàn thành",
  },
  {
    id: 5,
    name: "Sân Đạt Đức, Q. Gò Vấp",
    time: "14h30 ngày 29/7/2021",
    status: "Chưa Bắt Đầu",
  },
  {
    id: 6,
    name: "Sân Phát Đạt, Q12",
    time: "14h30 ngày 29/7/2021",
    status: "Hoàn thành",
  }
]
const TrangThongTinUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user_id = "";
  try {
    user_id = JSON.parse(localStorageServices.getUser(SPORT_LOCALSTORAGE).id);
  } catch (error) {
    console.log("lỗi ", error);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  useEffect(() => {
    const response = fetch(
      "https://leethanh.up.railway.app/api/orders/find/user_id",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user_id }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(setlistSanUserDaDat(result.data));
      });
  }, []);
  const { listSanUserDaDat, checkLogin } = useSelector((state) => {
    return state.QuanLyNguoiDungSlice;
  });
  const data = listSanUserDaDat.map((item, index) => {
    return {
      key: index,
      name: (
        <h1 className="text-2xl text-blue-800 font-bold">{item.yardName}</h1>
      ),
      time: (
        <h1 className="text-2xl text-blue-800 text-center">{item.startDate}</h1>
      ),
      status:
        item.status === 3 ? (
          <h1 className="text-2xl text-blue-800 font-bold text-right">
            ĐÃ THANH TOÁN
          </h1>
        ) : (
          <h1 className="text-2xl text-blue-800 font-bold text-right">
            CHƯA THANH TOÁN
          </h1>
        ),
    };
  });
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
            title: <h1 className="breadcrumb-title">THÔNG TIN USER</h1>,
          },
        ]}
      />
      <div className="container pt-10">
        <div className="flex justify-center items-center">
          <div className="w-[50%] flex justify-center items-center">
            <div className="w-[20%] text-center">
              <Avatar
                src="https://leethanh.netlify.app/image/avatar.png"
                size={100}
                icon={<UserOutlined />}
              />
            </div>
            <div className="w-[80%] pl-5">
              <h1>
                <i className="fas fa-user text-3xl text-green-600"></i>
                <span className="pl-5 text-3xl text-blue-800 font-bold">
                  {checkLogin.name}
                </span>
              </h1>
              <h1 className="py-3">
                <i className="fas fa-envelope text-3xl text-green-600"></i>
                <span className="pl-5 text-3xl text-blue-800">
                  {checkLogin.email}
                </span>
              </h1>
              <h1>
                <i className="fas fa-phone-alt text-3xl text-green-600"></i>
                <span className="pl-5 text-3xl text-blue-800">
                  {checkLogin.number}
                </span>
              </h1>
            </div>
          </div>
          <div className="w-[50%]">
            <h1 className="py-8 text-center text-green-600 text-3xl font-bold">
              LỊCH SỬ THAM GIA THI ĐẤU
            </h1>
            <div className="overflow-y-scroll h-[250px] rounded-2xl bg-gray-200 p-5">
              {listJoin.map((item) => {
                return (
                  <div className="grid grid-cols-2 gap-5 border-b-2 border-b-black mb-3" key={item.id}>
                    <div>
                      <h1 className="text-2xl text-green-700 font-medium">{item.name}</h1>
                      <h1 className="text-lg font-medium">Thời Gian: {item.time}</h1>
                      <h1 className="text-lg font-bold">Tình Trạng: {item.status}</h1>
                    </div>
                    <div className="text-right">
                      <button className="bg-red-500 py-2 px-3 text-lg rounded-2xl text-white font-medium">HỦY THAM GIA</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <h1 className="py-10 text-center text-green-600 text-3xl font-bold">
          LỊCH SỬ ĐẶT SÂN
        </h1>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default TrangThongTinUser;
