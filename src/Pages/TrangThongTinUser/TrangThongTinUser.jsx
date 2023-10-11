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

  // console.log("user_id thong tin user ", user_id);
  useEffect(() => {
    const response = fetch("http://localhost:8080/api/orders/find/user_id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: user_id }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        dispatch(setlistSanUserDaDat(result.data));
      });
  }, []);
  const { listSanUserDaDat, checkLogin } = useSelector((state) => {
    return state.QuanLyNguoiDungSlice;
  });
  console.log(listSanUserDaDat);

  console.log(checkLogin);
  const data = listSanUserDaDat.map((item) => {
    return {
      key: 1,
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
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="w-[20%] text-center">
            <Avatar size={200} icon={<UserOutlined />} />
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
        <h1 className="py-5 text-center text-green-600 text-3xl font-bold">
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
