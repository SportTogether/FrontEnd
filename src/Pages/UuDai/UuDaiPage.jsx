import React, { useState } from "react";
import { Breadcrumb, Input, Tabs, message } from "antd";
const { Search } = Input;
const onChangeTab = (key) => {
  console.log(key);
};
const items = [
  {
    id: 1,
    maVe: "giam10%",
    image: "https://leethanh.netlify.app/image/IMG_2315.png",
    title: "Giảm 10%",
    text: "Khi đặt từ thứ 2 - thứ 6",
    boolean: false,
  },
  {
    id: 2,
    maVe: "tangNuoc",
    image: "https://leethanh.netlify.app/image/drinkBonusIcon.png",
    title: "Tặng Nước",
    text: "Khi đặt sân tại quận 2",
    boolean: false,
  },
  {
    id: 3,
    maVe: "giam20%",
    image: "https://leethanh.netlify.app/image/20percentDiscountIcon.png",
    title: "Giảm 20%",
    text: "Đặt dịch vụ trọng tài và livestream",
    boolean: false,
  },
  {
    id: 4,
    maVe: "giam30%",
    image: "https://leethanh.netlify.app/image/30percentDiscountIcon.png",
    title: "Giảm 30%",
    text: "Khi đặt từ 9h - 15h",
    boolean: false,
  },
  {
    id: 5,
    maVe: "giam5%",
    image: "https://leethanh.netlify.app/image/5percentDiscountIcon.png",
    title: "Giảm 5%",
    text: "Khi đặt dịch vụ livestream",
    boolean: false,
  },
  {
    id: 6,
    maVe: "giam50%",
    image: "https://leethanh.netlify.app/image/blackfridayIcon.png",
    title: "Giảm 50%",
    text: "Chỉ áp dụng ngày 24/11/2023",
    boolean: false,
  },
];

const UuDaiPage = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [ve, setVe] = useState([]);
  const handleClickChonVe = (event) => {
    // console.log(event);
    // if (!ve.some((item) => JSON.stringify(item) === JSON.stringify(event))) {
    //   // Nếu không trùng, thêm đối tượng vào mảng
    //   const listVe = [...ve, event];
    //   // Cập nhật state với mảng mới
    //   setVe(listVe);
    //   message.success("Thêm mã giảm giá thành công");
    // } else {
    //   // Nếu trùng, bạn có thể thực hiện xử lý khác hoặc không làm gì
    //   message.error("Mã giảm giá này đã tồn tại");
    // }
    const data = new URLSearchParams();
    data.append("user_id", 1);
    data.append("coupon_id", 5);
    fetch("http://localhost:8080/api/users_coupons", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data == true) {
          message.success("Thêm mã giảm giá thành công");
        } else {
          message.error("Mã giảm giá này đã tồn tại");
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
          {items.map((item) => {
            return (
              <div className="flex justify-center items-center" key={item.id}>
                <div className="w-[70%] flex justify-center items-center h-[100px] bg-green-200 rounded-2xl">
                  <div className="w-[30%] pl-2 pr-3">
                    <img src={item.image} width={100} height={100} alt="" />
                  </div>
                  <div className="w-[70%] border-l-4 border-dashed pl-2 border-white">
                    <h1>
                      <span className="text-2xl font-bold text-green-800">
                        {item.title}
                      </span>
                      <br />
                      <span className="text-xl text-gray-500">{item.text}</span>
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
