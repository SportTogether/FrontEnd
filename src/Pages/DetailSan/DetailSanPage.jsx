import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDatSan } from "../../redux/QuanLySanSlice";
import {
  Avatar,
  Breadcrumb,
  Dropdown,
  Modal,
  Progress,
  Tabs,
  Typography,
  message,
  DatePicker,
} from "antd";
import {
  DownOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import { localStorageServices } from "../../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../../Constants";
const { Paragraph } = Typography;
const dateFormat = "DD/MM/YYYY";
const onChangeTab = (key) => {
  console.log(key);
};
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
    ocl1: "05:00",
    ocl2: "06:00",
  },
  {
    id: 2,
    ocl1: "06:30",
    ocl2: "07:30",
  },
  {
    id: 3,
    ocl1: "08:00",
    ocl2: "09:00",
  },
  {
    id: 4,
    ocl1: "09:30",
    ocl2: "10:30",
  },
  {
    id: 5,
    ocl1: "11:00",
    ocl2: "12:00",
  },
  {
    id: 6,
    ocl1: "12:30",
    ocl2: "13:30",
  },
  {
    id: 7,
    ocl1: "14:00",
    ocl2: "15:00",
  },
  {
    id: 8,
    ocl1: "15:30",
    ocl2: "16:30",
  },
];
const DetailSanPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { thongTinSan, thongTinSanDaDat } = useSelector((state) => {
    return state.QuanLySanSlice;
  });
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
    if (dateString !== null)
      setDateTime(dateString);
    else
      return;
  };
  const [olock, setOlock] = useState({});
  const { ocl1, ocl2 } = olock;
  const [dateTime, setDateTime] = useState("");
  const detailDateTime = { ocl1, ocl2, dateTime };
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
            <img
              src="https://leethanh.netlify.app/image/sanThanhThang.JPG"
              alt=""
            />
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
  const handleDatSan = () => {
    if (ocl1 !== undefined && ocl2 !== undefined && dateTime !== "") {
      const newThongTinSanDaDat = { ...thongTinSan, ...detailDateTime };
      dispatch(setDatSan(newThongTinSanDaDat));
      console.log("thong tin dat san ", newThongTinSanDaDat);
      let user_id = "";
      try {
        user_id = JSON.parse(
          localStorageServices.getUser(SPORT_LOCALSTORAGE).id
        );
      } catch (error) {
        message.error("Vui lòng đăng nhập");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }

      let yards_id = newThongTinSanDaDat.id;
      let status_id = 1;
      let start_date =
        newThongTinSanDaDat.day +
        ", " +
        newThongTinSanDaDat.date +
        "/10/2023, " +
        newThongTinSanDaDat.ocl1 +
        "PM";
      let end_date =
        newThongTinSanDaDat.day +
        ", " +
        newThongTinSanDaDat.date +
        "/10/2023, " +
        newThongTinSanDaDat.ocl2 +
        "PM";

      if (
        newThongTinSanDaDat.date === undefined ||
        newThongTinSanDaDat.ocl1 === undefined ||
        newThongTinSanDaDat.ocl2 === undefined
      ) {
        start_date = null;
        end_date = null;
      }
      console.log("start date ", start_date);
      console.log("end date ", end_date);
      let values = {
        users_id: user_id,
        yards_id: yards_id,
        status_id: status_id,
        start_date: start_date,
        end_date: end_date,
      };
      console.log("values ", values);
      const response = fetch("https://leethanh.up.railway.app/api/orders/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.data) {
            message.success("Chúc mừng bạn đã đặt sân thành công");

            console.log("thong tin dat san", thongTinSanDaDat);
            setTimeout(() => {
              navigate("/thanh-toan");
            }, 1000);
          } else {
            message.error("Vui lòng chọn ngày và giờ");
            setTimeout(() => {
              navigate("/dat-san");
            }, 1000);
          }
        });
    } else {
      alert("Vui lòng chọn ngày và thời gian");
      return;
    }
  };
  const handleTimDuong = () => {
    let originId = localStorageServices.getOriginId("originId");
    const newThongTinSanDaDat = {
      ...thongTinSan,
      ...detailDateTime,
    };
    let yard_id = newThongTinSanDaDat.id;
    const data = new URLSearchParams();
    data.append("id", yard_id);

    // console.log(event.id);
    fetch("https://leethanh.up.railway.app/api/yards/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        let originId = localStorageServices.getOriginId("originId");
        let destinationId = data.data.destination_id;
        console.log(originId, " ", destinationId);
        window.open(
          `https://google-map-sportogether.netlify.app/?originPlaceId=${originId}&destinationPlaceId=${destinationId}`,
          "_blank"
        );
      })
      .catch((error) => console.error(error));
    // let destinationId = 1;
    // console.log("origin id ", originId);
  };
  const handleContinue = () => {
    if (ocl1 !== undefined && ocl2 !== undefined && dateTime !== "") {
      const newThongTinSanDaDat = { ...thongTinSan, ...detailDateTime };
      console.log("thong tin dat san ", newThongTinSanDaDat);
      message.success("Bạn Đã Chọn Lịch Trình Thành Công");
      setTimeout(() => {
        navigate('/kiemTraThongTinDatSan');
      }, 1000);
    } else {
      message.error("Vui lòng chọn ngày và thời gian");
      return;
    }
  }
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
            src="https://leethanh.netlify.app/image/BackgroundChonsan.jpg"
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div className="detail-right">
          <div className="item-detail">
            <div className="item-detail-left">
              <img
                src="https://leethanh.netlify.app/image/sanThanhThang.JPG"
                width={300}
                alt=""
              />
            </div>
            <div className="item-detail-right">
              <div className="grid grid-cols-2">
                <h1>{thongTinSan?.name}</h1>
                <div className="text-right pr-5">
                  <button
                    className="px-4 py-3 rounded-xl text-2xl text-green-600 font-medium border-4 border-green-600"
                    onClick={() => {
                      handleDatSan();
                    }}
                  >
                    ĐẶT SÂN
                  </button>
                </div>
              </div>
              <p
                className="text-2xl
            "
              >
                {thongTinSan?.address}
              </p>
              <p className="text-2xl">
                <b>Giá tham khảo:</b> {thongTinSan?.price}
              </p>
              <p className="text-xl">
                <b>Loại Sân:</b> {thongTinSan?.type}
              </p>
              <div className="grid grid-cols-2 pt-3">
                <div>
                  <button
                    className="bg-green-600 rounded-3xl px-3 py-2 font-medium text-white text-2xl"
                    onClick={() => setOpen(true)}
                  >
                    CHỌN GIỜ
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
                    width={1300}
                  >
                    <div className="container grid grid-cols-2">
                      <h1 className="py-5 text-3xl text-green-600 font-bold">
                        {thongTinSan?.name}
                      </h1>
                      <div className="text-right py-5">
                        <button
                          className="px-4 py-3 rounded-xl text-2xl text-green-600 font-medium border-4 border-green-600"
                          onClick={() => {
                            handleContinue()
                          }}
                        >
                          TIẾP THEO
                        </button>
                      </div>
                    </div>
                    <div className="container flex py-4">
                      <DatePicker onChange={onChangeDate} format={dateFormat} size="large" className="border-green-600 border-[3px] w-[250px]" />
                      <h1 className="text-2xl font-bold pl-10">
                        Ngày và Giờ Đã Chọn: {detailDateTime?.dateTime}, {detailDateTime.ocl1} -{" "}
                        {detailDateTime.ocl2}
                      </h1>
                    </div>
                    <div className="flex justify-center items-center py-5">
                      <div className="w-[70%] grid grid-cols-3 gap-5">
                        {olocks.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="mx-auto"
                              onClick={() => {
                                setOlock(item);
                              }}
                            >
                              <button className="bg-gray-200 text-2xl rounded-2xl p-2 focus:bg-green-600 focus:text-white">
                                {item.ocl1} - {item.ocl2}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-[30%]">
                        <img
                          className="mx-auto border-[5px] border-gray-300 rounded-2xl"
                          src="https://leethanh.netlify.app/image/sanThanhThang.JPG"
                          width={300}
                          alt="" />
                      </div>
                    </div>
                  </Modal>
                </div>
                <div className="text-right pr-5">
                  <button
                    className="px-4 py-3 rounded-xl text-2xl font-medium"
                    onClick={() => {
                      handleTimDuong();
                    }}
                  >
                    <i className="fas fa-location-arrow"></i> TÌM ĐƯỜNG
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
