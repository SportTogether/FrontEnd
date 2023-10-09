import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Checkbox, Collapse, Dropdown, Rate } from "antd";
import { DownOutlined, StarFilled } from "@ant-design/icons";
import { list } from "postcss";
const onChange = (e) => {
  const outerCheck = e.target.value;
  console.log(`checked = ${outerCheck}`);
};
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
const types = [
  {
    key: "1",
    label: (
      <Checkbox value="SBD" onChange={onChange}>
        <h1 className="text-2xl">
          <i className="fas fa-futbol"></i>{" "}
          <span className="pl-2">Sân Bóng Đá</span>
        </h1>
      </Checkbox>
    ),
  },
  {
    key: "2",
    label: (
      <Checkbox value="SCL" onChange={onChange}>
        <div className="flex">
          <img
            src="../../../public/image/badminton.png"
            width={24}
            height={24}
            alt=""
          />
          <span className="text-2xl pl-2">Sân Cầu Lông</span>
        </div>
      </Checkbox>
    ),
  },
  {
    key: "3",
    label: (
      <Checkbox value="ST" onChange={onChange}>
        <div className="flex">
          <img
            src="../../../public/image/tennis.png"
            width={24}
            height={24}
            alt=""
          />
          <span className="text-2xl pl-2">Sân Tennis</span>
        </div>
      </Checkbox>
    ),
  },
  {
    key: "4",
    label: (
      <Checkbox value="SBR" onChange={onChange}>
        <h1 className="text-2xl">
          <i className="fas fa-basketball-ball"></i>
          <span className="pl-2">Sân Bóng Rổ</span>
        </h1>
      </Checkbox>
    ),
  },
  {
    key: "5",
    label: (
      <Checkbox value="SBB" onChange={onChange}>
        <h1 className="text-2xl">
          <i className="fas fa-table-tennis"></i>
          <span className="pl-2">Sân Bóng Bàn</span>
        </h1>
      </Checkbox>
    ),
  },
];
let data = "";
// const itemList = [
//   {
//     key: 1,
//     name: "Sân Thành Thắng",
//     image: "../../../public/image/sanThanhThang.JPG",
//     address: "9 Đường số 19, P Thạnh Mỹ Lợi, TP Thủ Đức.",
//     rate: 4,
//     type: "Sân Bóng Đá",
//     price: "300.000đ / trận",
//     kilometers: "5.7km",
//     point: "Sân Cỏ Nhân Tạo",
//   },
//   {
//     key: 2,
//     name: "Sân 312",
//     image: "../../../public/image/sanThanhThang.JPG",
//     address: "5 Trần Cao Vân, P Võ Thị Sáu, Q.3, TP HCM.",
//     rate: 3,
//     type: "Sân Bóng Đá",
//     price: "250.000đ / trận",
//     kilometers: "10km",
//     point: "Sân Cỏ Nhân Tạo",
//   },
//   {
//     key: 3,
//     name: "Sân Mini Victory",
//     image: "../../../public/image/sanThanhThang.JPG",
//     address: "426 Bình Qưới, P.28, Q. Bình Thạnh, TP HCM.",
//     rate: 3,
//     type: "Sân Bóng Đá",
//     price: "350.000đ / trận",
//     kilometers: "11.5km",
//     point: "Sân Cỏ Nhân Tạo",
//   },
// ];
const DatSanPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/yards", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((result) => {
            data = result;
          });
      } catch (error) {
        console.error("Lỗi xảy ra: ", error);
      }
    };
    fetchApi();
    const itemsList = data.data;
    console.log(itemsList);
  }, []);
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
        ]}
      />
      <div className="dat-san-page">
        <div className="dat-san-left">
          <div className="pt-12 pb-5">
            <Collapse
              expandIconPosition="right"
              items={[
                {
                  key: "1",
                  label: (
                    <h1 className="text-green-600 text-3xl font-bold">
                      LOẠI SÂN
                    </h1>
                  ),
                  children: (
                    <>
                      <Checkbox value="NhanTao" onChange={onChange}>
                        <h1 className="text-2xl">Sân cỏ nhân tạo</h1>
                      </Checkbox>
                      <Checkbox value="TuNhien" onChange={onChange}>
                        <h1 className="text-2xl">Sân cỏ tự nhiên</h1>
                      </Checkbox>
                      <Checkbox value="mini" onChange={onChange}>
                        <h1 className="text-2xl">Sân mini</h1>
                      </Checkbox>
                    </>
                  ),
                },
              ]}
            />
          </div>
          <div>
            <Collapse
              expandIconPosition="right"
              items={[
                {
                  key: "1",
                  label: (
                    <h1 className="text-green-600 text-3xl font-bold">
                      ĐÁNH GIÁ
                    </h1>
                  ),
                  children: (
                    <>
                      <Checkbox value="5SAO" onChange={onChange}>
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>
                      <Checkbox value="4SAO" onChange={onChange}>
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>
                      <Checkbox value="3SAO" onChange={onChange}>
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>{" "}
                      <br />
                      <Checkbox value="2SAO" onChange={onChange}>
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>
                      <br />
                      <Checkbox value="1SAO" onChange={onChange}>
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                        </h1>
                      </Checkbox>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="dat-san-right">
          <div className="top">
            <div className="item-top">
              <Dropdown
                menu={{
                  items: cities,
                }}
                trigger={["click"]}
              >
                <h1
                  className="item-top-title"
                  onClick={(e) => e.preventDefault()}
                >
                  TỈNH / THÀNH
                  <DownOutlined />
                </h1>
              </Dropdown>
            </div>
            <div className="item-top">
              <Dropdown
                menu={{
                  items: districts,
                }}
                trigger={["click"]}
              >
                <h1
                  className="item-top-title"
                  onClick={(e) => e.preventDefault()}
                >
                  QUẬN / HUYỆN
                  <DownOutlined />
                </h1>
              </Dropdown>
            </div>
            <div className="item-top">
              <Dropdown
                menu={{
                  items: types,
                }}
                trigger={["click"]}
              >
                <h1
                  className="item-top-title"
                  onClick={(e) => e.preventDefault()}
                >
                  THỂ LOẠI
                  <DownOutlined />
                </h1>
              </Dropdown>
            </div>
          </div>
          <div className="list">
            <h1 className="list-title">CHỌN SÂN</h1>
            <div className="overflow-y-scroll h-[500px]">
              {itemsList.map((item) => {
                return (
                  <div
                    className="list-item"
                    key={item.key}
                    onClick={() => {
                      navigate("/detail");
                    }}
                  >
                    <div className="list-item-left">
                      <img
                        src="../../../public/image/sanThanhThang.JPG"
                        alt=""
                      />
                    </div>
                    <div className="list-item-right">
                      <div className="grid grid-cols-2">
                        <h1 className="text-blue-700 text-2xl font-bold">
                          {item.name}
                        </h1>
                        <p className="text-right">{item.distance} km</p>
                      </div>
                      <Rate
                        allowHalf
                        defaultValue={item.stars}
                        className="text-2xl"
                      />
                      <h1 className="text-xl">{item.address}</h1>
                      <p className="text-lg">
                        <b>Điểm nhấn:</b> {item.type}
                      </p>
                      <div className="grid grid-cols-2">
                        <p className="text-lg">
                          <b>Giá tham khảo:</b> {item.price}
                        </p>
                        <b className="text-right text-xl cursor-pointer">
                          <i className="fas fa-location-arrow"></i> Tìm đường
                        </b>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatSanPage;
