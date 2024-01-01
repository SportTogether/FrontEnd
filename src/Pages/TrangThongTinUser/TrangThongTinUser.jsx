import React, { useEffect, useState } from "react";
import { Avatar, Breadcrumb, Table, Tabs } from "antd";
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
const column = [
  {
    title: <h1 className="text-3xl">Trận đấu </h1>,
    dataIndex: "match",
    key: "match",
  },
  {
    title: <h1 className="text-3xl">Địa Chỉ</h1>,
    dataIndex: "address",
    key: "address",
  },
  {
    title: <h1 className="text-3xl text-center">Thời Gian</h1>,
    dataIndex: "dateTime",
    key: "dateTime",
  },
  {
    title: <h1 className="text-3xl text-center">Số Lượng</h1>,
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: <h1 className="text-3xl text-right">Trạng Thái</h1>,
    dataIndex: "setting",
    key: "setting",
  },
];
const onChangeTab = (key) => {
  console.log(key);
};

// const params = new URLSearchParams();
// let user_id = JSON.parse(checkUser.id);
// params.append("users_id", user_id);
// params.append("matches_id", value);
// try {
//   const response = fetch(
//     "https://leethanh.up.railway.app/api/users_matches/remove",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: params,
//     }
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// } catch (error) {
//   console.error("Lỗi xảy ra: ", error);
// }
const TrangThongTinUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listMatch, setListMatch] = useState([]);
  let user_id = "";
  try {
    user_id = JSON.parse(localStorageServices.getUser(SPORT_LOCALSTORAGE).id);
    const params = new URLSearchParams();
    params.append("users_id", user_id);
    try {
      const response = fetch(
        "https://leethanh.up.railway.app/api/users_matches/list_match",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params,
        }
      )
        .then((res) => res.json())
        .then((data) => setListMatch(data.data));
    } catch (error) {
      console.error("Lỗi xảy ra: ", error);
    }
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
  const data1 = listMatch.map((item) => {
    return {
      key: item.id,
      match: <h1 className="text-2xl text-blue-800 font-bold">{item.name}</h1>,
      address: (
        <h1 className="text-2xl text-blue-800 font-bold">{item.address}</h1>
      ),
      dateTime: (
        <h1 className="text-2xl text-blue-800 text-center">{item.time}</h1>
      ),
      quantity: (
        <h1 className="text-2xl text-blue-800 font-bold text-center">
          {item.current_quantities} / {item.max_quantities}
        </h1>
      ),
      setting: (
        <div className="text-right">
          <button className="bg-red-500 py-2 px-3 text-2xl rounded-2xl text-white font-medium">
            HỦY THAM GIA
          </button>
        </div>
      ),
    };
  });
  const items = [
    {
      key: "1",
      label: (
        <h1 className="w-[600px] text-center text-green-600 text-3xl font-bold">
          LỊCH SỬ ĐẶT SÂN
        </h1>
      ),
      children: (
        <div className="pt-10">
          <Table columns={columns} dataSource={data} />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <h1 className="w-[600px] text-center text-green-600 text-3xl font-bold">
          LỊCH SỬ THAM GIA THI ĐẤU
        </h1>
      ),
      children: (
        <div className="pt-10">
          <Table columns={column} dataSource={data1} />
        </div>
      ),
    },
  ];
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
          <div className="w-[20%] text-center">
            <Avatar
              src="https://leethanh.netlify.app/image/avatar.png"
              size={150}
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
        <div className="pt-10">
          <Tabs
            defaultActiveKey="1"
            centered
            items={items}
            onChange={onChangeTab}
          />
        </div>
      </div>
    </>
  );
};

export default TrangThongTinUser;
