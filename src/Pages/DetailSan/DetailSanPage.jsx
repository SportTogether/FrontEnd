import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Breadcrumb,
  Dropdown,
  Modal,
  Progress,
  Tabs,
  Typography,
} from "antd";
import { DownOutlined, StarFilled, UserOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
const onChangeTab = (key) => {
  console.log(key);
};
const times = [
  {
    key: 1,
    date: 15,
    day: "H.Nay",
  },
  {
    key: 2,
    date: 16,
    day: "T3",
  },
  {
    key: 3,
    date: 17,
    day: "T4",
  },
  {
    key: 4,
    date: 18,
    day: "T5",
  },
  {
    key: 5,
    date: 19,
    day: "T6",
  },
  {
    key: 6,
    date: 20,
    day: "T7",
  },
  {
    key: 7,
    date: 21,
    day: "CN",
  },
  {
    key: 8,
    date: 22,
    day: "T2",
  },
];
const types = [
  {
    key: "1",
    label: (
      <div className="flex">
        <Avatar size="large" icon={<UserOutlined />} />
        <h1 className="pl-3 pt-3 text-2xl">Sân đẹp thoáng mát</h1>
      </div>
    ),
  },
];
const olocks = [
  {
    id: 1,
    ocl1: 17,
    ocl2: 18,
  },
  {
    id: 2,
    ocl1: 18,
    ocl2: 19,
  },
  {
    id: 3,
    ocl1: 19,
    ocl2: 20,
  },
];
const DetailSanPage = () => {
  const [open, setOpen] = useState(false);
  const [olock, setOlock] = useState({});
  const { thongTinSan } = useSelector((state) => {
    return state.QuanLySanSlice;
  });
  const items = [
    {
      key: "1",
      label: (
        <h1 className="w-[525px] text-center text-green-600 text-3xl font-bold">
          MÔ TẢ
        </h1>
      ),
      children: (
        <div className="item-detail">
          <div className="img-desc">
            <img src="../../../public/image/sanThanhThang.JPG" alt="" />
          </div>
          <div className="text-desc">
            <Paragraph
              ellipsis={{
                rows: 6,
                expandable: true,
                symbol: "Xem Thêm",
              }}
              className="text-xl"
            >
              {thongTinSan?.description}
            </Paragraph>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <h1 className="w-[525px] text-center text-green-600 text-3xl font-bold">
          ĐÁNH GIÁ
        </h1>
      ),
      children: (
        <div className="m-5">
          <div className="rate-desc">
            <div className="rate-otp1">
              <h1 className="text-3xl text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </h1>
            </div>
            <div className="rate-otp2 pt-2">
              <Progress
                percent={85}
                status="active"
                showInfo={false}
                strokeColor={"red"}
              />
            </div>
            <div className="rate-otp3">
              <h1 className="text-2xl text-green-600">(50 đánh giá)</h1>
            </div>
          </div>
          <div className="rate-desc">
            <div className="rate-otp1">
              <h1 className="text-3xl text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </h1>
            </div>
            <div className="rate-otp2 pt-2">
              <Progress
                percent={60}
                status="active"
                showInfo={false}
                strokeColor={"red"}
              />
            </div>
            <div className="rate-otp3">
              <h1 className="text-2xl text-green-600">(30 đánh giá)</h1>
            </div>
          </div>
          <div className="rate-desc">
            <div className="rate-otp1">
              <h1 className="text-3xl text-yellow-300">
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </h1>
            </div>
            <div className="rate-otp2 pt-2">
              <Progress
                percent={40}
                status="active"
                showInfo={false}
                strokeColor={"red"}
              />
            </div>
            <div className="rate-otp3">
              <h1 className="text-2xl text-green-600">(8 đánh giá)</h1>
            </div>
          </div>
          <div className="rate-desc">
            <div className="rate-otp1">
              <h1 className="text-3xl text-yellow-300">
                <StarFilled />
                <StarFilled />
              </h1>
            </div>
            <div className="rate-otp2 pt-2">
              <Progress
                percent={10}
                status="active"
                showInfo={false}
                strokeColor={"red"}
              />
            </div>
            <div className="rate-otp3">
              <h1 className="text-2xl text-green-600">(3 đánh giá)</h1>
            </div>
          </div>
          <div className="rate-desc">
            <div className="rate-otp1">
              <h1 className="text-3xl text-yellow-300">
                <StarFilled />
              </h1>
            </div>
            <div className="rate-otp2 pt-2">
              <Progress
                percent={0}
                status="active"
                showInfo={false}
                strokeColor={"red"}
              />
            </div>
            <div className="rate-otp3">
              <h1 className="text-2xl text-green-600">(0 đánh giá)</h1>
            </div>
          </div>
          <Dropdown
            menu={{
              items: types,
            }}
            trigger={["click"]}
          >
            <h1
              className="text-2xl text-green-600 font-bold cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              BÌNH LUẬN
              <DownOutlined />
            </h1>
          </Dropdown>
        </div>
      ),
    },
  ];
  console.log("thong tin san", thongTinSan);
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
        ]}
      />
      <div className="detail">
        <div className="detail-left">
          <img
            src="../../../public/image/BackgroundChonsan.jpg"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div className="detail-right">
          <div className="item-detail">
            <div className="item-detail-left">
              <img
                src="../../../public/image/sanThanhThang.JPG"
                width={300}
                alt=""
              />
            </div>
            <div className="item-detail-right">
              <h1>{thongTinSan?.name}</h1>
              <p
                className="text-2xl
            "
              >
                {thongTinSan?.address}
              </p>
              <p className="text-2xl">
                <b>Giá tham khảo:</b> {thongTinSan?.price}
              </p>
              <p>
                <b>Loại Sân:</b> {thongTinSan?.type}
              </p>
              <div className="grid grid-cols-2 pt-3">
                <div>
                  <button
                    className="bg-green-600 rounded-3xl px-3 py-2 font-medium text-white text-2xl"
                    onClick={() => setOpen(true)}
                  >
                    CHỌN GIỜ
                    <DownOutlined />
                  </button>
                  <Modal
                    title={
                      <h1 className="text-green-600 font-bold text-center pb-3 border-green-600 border-b-4 text-3xl">
                        CHỌN GIỜ
                      </h1>
                    }
                    centered
                    open={open}
                    footer={false}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={1000}
                  >
                    <div className="container grid grid-cols-8 gap-5">
                      {times.map((item) => {
                        return (
                          <button
                            className="border bg-gray-200 rounded-2xl text-center focus:bg-green-600"
                            key={item.key}
                          >
                            <h1 className="text-black text-4xl font-bold py-3">
                              {item.date}
                            </h1>
                            <button className="bg-white w-full rounded-xl border-green-600 border-2 text-green-600 text-xl py-2 font-bold">
                              {item.day}
                            </button>
                          </button>
                        );
                      })}
                    </div>
                    <div className="container py-5 grid grid-cols-4 gap-6">
                      <button className="bg-gray-200 text-2xl rounded-2xl py-2 focus:bg-green-600 focus:text-white">
                        Tất Cả
                      </button>
                      {olocks.map((item) => {
                        return (
                          <div
                            key={item.id}
                            onClick={() => {
                              setOlock(item);
                              console.log(olock);
                            }}
                          >
                            <button className="bg-gray-200 text-2xl rounded-2xl p-2 focus:bg-green-600 focus:text-white">
                              {item.ocl1}:00 - {item.ocl2}:00
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    <h1 className="text-center text-4xl font-bold py-10">
                      <span className="bg-green-100 p-3 mr-2 rounded-xl">
                        {olock?.ocl1}
                      </span>
                      :
                      <span className="bg-green-100 p-3 mx-2 rounded-xl">
                        00
                      </span>
                      -
                      <span className="bg-green-100 p-3 mx-2 rounded-xl">
                        {olock?.ocl2}
                      </span>
                      :
                      <span className="bg-green-100 p-3 ml-2 rounded-xl">
                        00
                      </span>
                    </h1>
                  </Modal>
                </div>
                <div className="text-right pr-5">
                  <button className="px-4 py-3 rounded-xl text-2xl text-green-600 font-medium border-4 border-green-600">
                    ĐẶT SÂN
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="desc-detail">
            <Tabs
              defaultActiveKey="1"
              centered
              items={items}
              onChange={onChangeTab}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSanPage;
