import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Form, Modal, Select } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { localStorageServices } from "../../Services/localStorageServices";
import { setLogin } from "../../redux/QuanLyNguoiDungSlice";
const items = [
  {
    key: "1",
    label: (
      <h1 className="text-xl">
        <i className="fas fa-futbol"></i>{" "}
        <span className="pl-2">Sân Bóng Đá</span>
      </h1>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex">
        <img
          src="../../../public/image/badminton.png"
          width={24}
          height={24}
          alt=""
        />
        <span className="text-xl pl-2">Sân Cầu Lông</span>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex">
        <img
          src="../../../public/image/tennis.png"
          width={24}
          height={24}
          alt=""
        />
        <span className="text-xl pl-2">Sân Tennis</span>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <h1 className="text-xl">
        <i className="fas fa-basketball-ball"></i>
        <span className="pl-2">Sân Bóng Rổ</span>
      </h1>
    ),
  },
  {
    key: "5",
    label: (
      <h1 className="text-xl">
        <i className="fas fa-table-tennis"></i>
        <span className="pl-2">Sân Bóng Bàn</span>
      </h1>
    ),
  },
];
const cities = [
  {
    id: 1,
    value: "TpHCM",
    cityName: "Thành phố Hồ Chí Minh",
  },
  {
    id: 2,
    value: "HaNoi",
    cityName: "Hà Nội",
  },
  {
    id: 3,
    value: "DaNang",
    cityName: "Đà Nẵng",
  },
  {
    id: 4,
    value: "ThuDuc",
    cityName: "Thủ Đức",
  },
  {
    id: 5,
    value: "HaiPhong",
    cityName: "Hải Phòng",
  },
  {
    id: 6,
    value: "BinhDuong",
    cityName: "Bình Dương",
  },
];
export default function Header() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (value) => {
    console.log(value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { checkLogin } = useSelector((state) => {
    return state.QuanLyNguoiDungSlice;
  });
  const handleLogOut = () => {
    localStorageServices.removeUser();
    dispatch(setLogin(null));
    navigate("/");
  };
  const login = [
    {
      key: "1",
      label: <h1 className="text-2xl">{checkLogin?.name}</h1>,
    },
    {
      key: "2",
      label: <h1 className="text-2xl">Trang Thông Tin</h1>,
    },
    {
      key: "3",
      label: (
        <h1 className="text-2xl" onClick={handleLogOut}>
          Đăng Xuất
        </h1>
      ),
    },
  ];

  const checkUserLogin = () => {
    if (checkLogin !== null) {
      return (
        <>
          <Dropdown
            menu={{
              items: login,
            }}
            trigger={["click"]}
          >
            <Avatar
              src="https://i.pravatar.cc/?u=fake@pravatar.com"
              style={{ height: 50, width: 50 }}
              onClick={(e) => e.preventDefault()}
            ></Avatar>
          </Dropdown>
        </>
      );
    } else {
      return (
        <>
          <div className="nav-right">
            <h1
              onClick={() => {
                navigate("/login");
              }}
              className="nav-right-title"
            >
              Log In
            </h1>
          </div>
        </>
      );
    }
  };
  return (
    <header className="header">
      <div className="logo-header">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="../../../public/image/logoIcon.png"
            width={70}
            height={70}
            alt=""
          />
          <h1 className="logo-title">SPORTTORGETHER</h1>
        </div>
      </div>
      <div className="nav">
        <div className="nav-left xl:gap-x-12">
          <Dropdown
            menu={{
              items,
            }}
          >
            <h1
              className="nav-left-title"
              onClick={(e) => {
                navigate("/dat-san");
                return e.preventDefault();
              }}
            >
              ĐẶT SÂN
            </h1>
          </Dropdown>
          <div
            className="nav-left-title"
            onClick={() => {
              navigate("/uu-dai");
            }}
          >
            ƯU ĐÃI
          </div>
          <div
            className="nav-left-title"
            onClick={() => {
              navigate("/forum");
            }}
          >
            FORUM
          </div>
          <div
            className="nav-left-title"
            onClick={() => {
              navigate("/ket-noi");
            }}
          >
            KẾT NỐI
          </div>
          <div className="nav-left-title">
            <h1 onClick={showModal}>
              TÌM KIẾM{" "}
              <span>
                <i className="fas fa-search"></i>
              </span>
            </h1>
          </div>
          <Modal
            title="Chọn Môn Thể Thao Và Khu Vực"
            open={isModalOpen}
            onOk={handleOk}
            footer={false}
            onCancel={handleCancel}
            width="100%"
          >
            <div className="flex">
              <Form
                form={form}
                name="booking"
                onFinish={onFinish}
                className="container flex"
                scrollToFirstError
              >
                <Form.Item
                  name="monTheThao"
                  className="w-[285px]"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn môn thể thao!!!",
                    },
                  ]}
                >
                  <Select defaultValue={"Chọn Môn Thể Thao"} size="large">
                    <Select.Option value="BongDa">
                      <h1>
                        <i className="fas fa-futbol text-xl"></i>{" "}
                        <span className="pl-2 text-xl">Sân Bóng Đá</span>
                      </h1>
                    </Select.Option>
                    <Select.Option value="CauLong">
                      <div className="flex">
                        <img
                          src="../../../public/image/badminton.png"
                          width={24}
                          height={24}
                          alt=""
                        />
                        <span className="text-xl pl-2">Sân Cầu Lông</span>
                      </div>
                    </Select.Option>
                    <Select.Option value="Tennis">
                      <div className="flex">
                        <img
                          src="../../../public/image/tennis.png"
                          width={24}
                          height={24}
                          alt=""
                        />
                        <span className="text-xl pl-2">Sân Tennis</span>
                      </div>
                    </Select.Option>
                    <Select.Option value=" Ro">
                      <h1>
                        <i className="fas fa-basketball-ball text-xl"></i>
                        <span className="pl-2 text-xl">Sân Bóng Rổ</span>
                      </h1>
                    </Select.Option>
                    <Select.Option value="BongBan">
                      <i className="fas fa-table-tennis text-xl"></i>
                      <span className="pl-2 text-xl">Sân Bóng Bàn</span>
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="khuVuc"
                  className="w-[1000px] px-5"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn khu vực!!!",
                    },
                  ]}
                >
                  <Select defaultValue={"Chọn Khu Vực"} size="large">
                    {cities.map((item) => {
                      return (
                        <Select.Option key={item.id} value={item.value}>
                          <h1 className="text-xl">{item.cityName}</h1>
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item className="w-[285px]">
                  <button
                    type="submit"
                    className="bg-blue-900 rounded-lg text-base font-medium py-2 px-10 text-green-600 delay-200 transition hover:text-white"
                  >
                    Tìm Kiếm Sân Chơi
                  </button>
                </Form.Item>
              </Form>
            </div>
          </Modal>
        </div>
        <div className="nav-right">{checkUserLogin()}</div>
      </div>
    </header>
  );
}
