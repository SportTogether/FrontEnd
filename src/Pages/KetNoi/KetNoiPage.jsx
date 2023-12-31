import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Checkbox, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { localStorageServices } from "../../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../../Constants";
const onChange = (e) => {
  const outerCheck = e.target.value;
  console.log("check:", outerCheck);
};
const types = [
  {
    key: "1",
    label: (
      <Checkbox value="BD" onChange={onChange}>
        <h1 className="text-2xl">
          <i className="fas fa-futbol"></i>{" "}
          <span className="pl-2">Bóng Đá</span>
        </h1>
      </Checkbox>
    ),
  },
  {
    key: "2",
    label: (
      <Checkbox value="CL" onChange={onChange}>
        <div className="flex">
          <img
            src="https://leethanh.netlify.app/image/badminton.png"
            width={24}
            height={24}
            alt=""
          />
          <span className="text-2xl pl-2">Cầu Lông</span>
        </div>
      </Checkbox>
    ),
  },
  {
    key: "3",
    label: (
      <Checkbox value="T" onChange={onChange}>
        <div className="flex">
          <img
            src="https://leethanh.netlify.app/image/tennis.png"
            width={24}
            height={24}
            alt=""
          />
          <span className="text-2xl pl-2">Tennis</span>
        </div>
      </Checkbox>
    ),
  },
  {
    key: "4",
    label: (
      <Checkbox value="BR" onChange={onChange}>
        <h1 className="text-2xl">
          <i className="fas fa-basketball-ball"></i>
          <span className="pl-2">Bóng Rổ</span>
        </h1>
      </Checkbox>
    ),
  },
  {
    key: "5",
    label: (
      <Checkbox value="BB" onChange={onChange}>
        <h1 className="text-2xl">
          <i className="fas fa-table-tennis"></i>
          <span className="pl-2">Bóng Bàn</span>
        </h1>
      </Checkbox>
    ),
  },
];
const cities = [
  {
    key: "1",
    label: (
      <Checkbox value="TPHCM" onChange={onChange}>
        <h1 className="text-2xl">Thành phố Hồ Chí Minh</h1>
      </Checkbox>
    ),
  },
  {
    key: "2",
    label: (
      <Checkbox value="HANOI" onChange={onChange}>
        <h1 className="text-2xl">Hà Nội</h1>
      </Checkbox>
    ),
  },
  {
    key: "3",
    label: (
      <Checkbox value="DANANG" onChange={onChange}>
        <h1 className="text-2xl">Đà Nẵng</h1>
      </Checkbox>
    ),
  },
  {
    key: "4",
    label: (
      <Checkbox value="THUDUC" onChange={onChange}>
        <h1 className="text-2xl">Thủ Đức</h1>
      </Checkbox>
    ),
  },
  {
    key: "5",
    label: (
      <Checkbox value="HAIPHONG" onChange={onChange}>
        <h1 className="text-2xl">Hải Phòng</h1>
      </Checkbox>
    ),
  },
  {
    key: "6",
    label: (
      <Checkbox value="BINHDUONG" onChange={onChange}>
        <h1 className="text-2xl">Bình Dương</h1>
      </Checkbox>
    ),
  },
];
const districts = [
  {
    key: "1",
    label: (
      <Checkbox value="quan 1" onChange={onChange}>
        <h1 className="text-2xl">Quận 1</h1>
      </Checkbox>
    ),
  },
  {
    key: "2",
    label: (
      <Checkbox value="quan 2" onChange={onChange}>
        <h1 className="text-2xl">Quận 2</h1>
      </Checkbox>
    ),
  },
  {
    key: "3",
    label: (
      <Checkbox value="quan 3" onChange={onChange}>
        <h1 className="text-2xl">Quận 3</h1>
      </Checkbox>
    ),
  },
  {
    key: "4",
    label: (
      <Checkbox value="quan go vap" onChange={onChange}>
        <h1 className="text-2xl">Quận Gò Vấp</h1>
      </Checkbox>
    ),
  },
  {
    key: "5",
    label: (
      <Checkbox value="quan tan binh" onChange={onChange}>
        <h1 className="text-2xl">Quận Tân Bình</h1>
      </Checkbox>
    ),
  },
  {
    key: "6",
    label: (
      <Checkbox value="quan phu nhuan" onChange={onChange}>
        <h1 className="text-2xl">Quận Phú Nhuận</h1>
      </Checkbox>
    ),
  },
];
const KetNoiPage = () => {
  const [list, setList] = useState([]);
  const [statusJoin, setStatusJoin] = useState();
  const navigate = useNavigate();
  const checkUser = localStorageServices.getUser(SPORT_LOCALSTORAGE);
  const handleJoin = (value) => {
    if (checkUser == null) {
      message.error("Vui lòng đăng nhập trước khi tham gia!!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }
    const params = new URLSearchParams();
    let user_id = JSON.parse(checkUser.id);
    params.append("users_id", user_id);
    params.append("matches_id", value);
    try {
      const response = fetch(
        "https://leethanh.up.railway.app/api/users_matches/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // if (data.data) {
          //   message.success("Đã tham gia trận đấu thành công!");
          // }
        });
    } catch (error) {
      console.error("Lỗi xảy ra: ", error);
    }
  };
  const handleCancel = (value) => {
    const params = new URLSearchParams();
    let user_id = JSON.parse(checkUser.id);
    params.append("users_id", user_id);
    params.append("matches_id", value);
    try {
      const response = fetch(
        "https://leethanh.up.railway.app/api/users_matches/remove",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            const status = data.data;
            // setStatusJoin(false);
            message.success("Đã hủy tham gia trận đấu thành công!");
          }
        });
    } catch (error) {
      console.error("Lỗi xảy ra: ", error);
    }
  };
  useEffect(() => {
    const response = fetch("https://leethanh.up.railway.app/api/matches", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        const newList = data.data.map((item) => ({ ...item, status: false }));
        setList(newList);
      });
  }, []);
  console.log(list);
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
            title: <h1 className="breadcrumb-title">KẾT NỐI</h1>,
          },
        ]}
      />
      <div className="container">
        <div className="flex justify-center items-center px-10 py-3 mb-8 bg-gray-400">
          <div className="w-1/3">
            <Dropdown
              menu={{
                items: types,
              }}
              trigger={["click"]}
            >
              <h1
                className="text-2xl text-white font-bold cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                THỂ LOẠI
                <DownOutlined />
              </h1>
            </Dropdown>
          </div>
          <div className="w-1/3 text-center">
            <Dropdown
              menu={{
                items: cities,
              }}
              trigger={["click"]}
            >
              <h1
                className="text-2xl text-white font-bold cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                TỈNH / THÀNH
                <DownOutlined />
              </h1>
            </Dropdown>
          </div>
          <div className="w-1/3 text-right">
            <Dropdown
              menu={{
                items: districts,
              }}
              trigger={["click"]}
            >
              <h1
                className="text-2xl text-white font-bold cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                QUẬN / HUYỆN
                <DownOutlined />
              </h1>
            </Dropdown>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 pb-10">
          {list?.map((item) => {
            return (
              <div
                className="bg-amber-100 px-5 pt-5 rounded-[40px]"
                key={item.id}
              >
                <div className="border-b-2 border-b-gray-500">
                  <div className="grid grid-cols-3">
                    <div className="mx-auto">
                      <img
                        src="https://leethanh.netlify.app/image/HUUNGHIFC_KETNOI.png"
                        width={150}
                        height={150}
                        alt=""
                      />
                      <h1 className="text-xl font-bold text-center">
                        {item.name}
                      </h1>
                    </div>
                    <div className="mx-auto pt-5">
                      <img
                        src="https://leethanh.netlify.app/image/ICON_KETNOI.png"
                        width={100}
                        height={100}
                        alt=""
                      />
                      <h1 className="text-center pt-6 font-bold text-xl">
                        {item.current_quantities} / {item.max_quantities}
                      </h1>
                    </div>
                    <div className="mx-auto">
                      <img
                        src="https://leethanh.netlify.app/image/ICON___KETNOI.png"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="flex justify-center items-center">
                      <div className="w-[40%]">
                        <img
                          src="https://leethanh.netlify.app/image/ICON_LICH_KETNOI.png"
                          width={50}
                          height={50}
                          alt=""
                          className="float-right"
                        />
                      </div>
                      <div className="w-[60%]">
                        <h1 className="font-bold">{item.time}</h1>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-[40%]">
                        <img
                          src="https://leethanh.netlify.app/image/ICON_VITRI_KETNOI.png"
                          width={50}
                          height={50}
                          alt=""
                          className="float-right"
                        />
                      </div>
                      <div className="w-[60%]">
                        <h1 className="font-bold">{item.address}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center py-5">
                  <button
                    className="bg-green-600 text-white w-[250px] py-3 text-2xl rounded-2xl font-medium"
                    onClick={() => {
                      handleJoin(item.id);
                    }}
                  >
                    Tham Gia
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KetNoiPage;
