import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Input, Tabs, message } from "antd";
import { localStorageServices } from "../../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../../Constants";
const { Search } = Input;
const onChangeTab = (key) => {
  console.log(key);
};

const UuDaiPage = () => {
  const navigate = useNavigate();
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  // const [ve, setVe] = useState([]);
  const [listVe, setListVe] = useState([]);
  useEffect(() => {
    const fetchApiUuDai = async () => {
      try {
        const result = await fetch(
          "https://leethanh.up.railway.app/api/coupons",
          {
            method: "GET",
          }
        ).then((response) => response.json());
        setListVe(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiUuDai();
  }, []);
  const handleClickChonVe = (event) => {
    const checkUser = localStorageServices.getUser(SPORT_LOCALSTORAGE);
    if (!checkUser) {
      message.error("Vui lòng đăng nhập trước khi nhận ưu đãi!!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }
    const data = new URLSearchParams();
    let user_id = JSON.parse(
      checkUser.id
    );
    data.append("user_id", user_id);
    data.append("coupon_id", event.id);
    fetch("https://leethanh.up.railway.app/api/users_coupons", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          message.success("Thêm mã giảm giá thành công");
        } else {
          message.error("Mã giảm giá này đã tồn tại");
          return;
        }
      })
      .catch((error) => console.error(error));
  };
  const tabs = [
    {
      key: "1",
      label: (
        <h1 className="w-[525px] text-center text-green-800 text-2xl font-bold">
          TẤT CẢ
        </h1>
      ),
      children: (
        <div className="mx-10 grid grid-cols-2 gap-10">
          {listVe.map((item) => {
            return (
              <div className="flex justify-center items-center" key={item.id}>
                <div className="w-[70%] flex justify-center items-center h-[100px] bg-green-200 rounded-2xl">
                  <div className="w-[30%] pl-2 pr-3">
                    <h1 className="text-5xl text-center font-bold text-green-700">
                      {item.discount}
                    </h1>
                  </div>
                  <div className="w-[70%] border-l-4 border-dashed pl-2 border-white">
                    <h1>
                      <span className="text-2xl font-bold text-green-800">
                        {item.name}
                      </span>
                      <br />
                      <span className="text-xl text-gray-500">
                        {item.description}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="w-[30%] ml-5">
                  <button
                    type="button"
                    className="border-pink-500 border-4 p-2 rounded-2xl text-pink-500 font-medium text-2xl"
                    onClick={() => {
                      handleClickChonVe(item);
                    }}
                  >
                    Thu Thập
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <h1 className="w-[525px] text-center text-green-800 text-2xl font-bold">
          MỚI NHẤT
        </h1>
      ),
      children: (
        <div>
          <h1></h1>
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
            title: <h1 className="breadcrumb-title">ƯU ĐÃI</h1>,
          },
        ]}
      />
      <div className="uu-dai">
        <div className="uu-dai-left">
          <img
            src="https://leethanh.netlify.app/image/ChonsanBackgr.png"
            alt=""
          />
        </div>
        <div className="uu-dai-right">
          <div className="flex justify-center items-center">
            <div className="w-2/5">
              <img
                src="https://leethanh.netlify.app/image/hotsaleIcon.png"
                width={180}
                height={180}
                className="float-right"
                alt=""
              />
            </div>
            <div className="w-3/5">
              <div className="pl-3">
                <Search
                  placeholder="Tìm Kiếm Ưu Đãi"
                  onSearch={onSearch}
                  size="large"
                  style={{
                    width: 400,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 h-[550px] mt-5 rounded-2xl">
            <div className="container pt-5">
              <div className="bg-green-200 rounded-3xl grid grid-cols-2">
                <div className="flex justify-center items-center">
                  <img
                    src="https://leethanh.netlify.app/image/couponIcon.png"
                    width={100}
                    height={100}
                    className="pr-2"
                    alt=""
                  />
                  <h1>
                    <span className="text-2xl font-bold text-green-800">
                      Nhập Mã
                    </span>
                    <br />
                    <span className="text-xl text-gray-500">Mã Ưu Đãi</span>
                  </h1>
                </div>
                <div className="border-l-2 border-white flex justify-center items-center">
                  <img
                    src="https://leethanh.netlify.app/image/mygiftIcon.png"
                    width={100}
                    height={100}
                    className="pr-1"
                    alt=""
                  />
                  <h1>
                    <span className="text-2xl font-bold text-green-800">
                      Nhập Mã
                    </span>
                    <br />
                    <span className="text-xl text-gray-500">
                      Thẻ Quà Tặng, Ưu Đãi
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <Tabs
                defaultActiveKey="1"
                centered
                items={tabs}
                onChange={onChangeTab}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UuDaiPage;
