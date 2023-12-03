import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown } from "antd";
import { localStorageServices } from "../../Services/localStorageServices";
import { setLogin } from "../../redux/QuanLyNguoiDungSlice";
import ModalSearch from "../Modal/ModalSearch";
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
          src="https://leethanh.netlify.app/image/badminton.png"
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
          src="https://leethanh.netlify.app/image/tennis.png"
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

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { checkLogin } = useSelector((state) => {
    return state.QuanLyNguoiDungSlice;
  });

  const handleLogOut = () => {
    localStorageServices.removeUser();
    dispatch(setLogin(null));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const login = [
    {
      key: "1",
      label: <h1 className="text-2xl">{checkLogin?.name}</h1>,
    },
    {
      key: "2",
      label: (
        <h1
          className="text-2xl"
          onClick={() => {
            navigate("/thong-tin-user");
          }}
        >
          Trang Thông Tin
        </h1>
      ),
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
              src="https://leethanh.netlify.app/image/avatar.png"
              style={{ height: 50, width: 50 }}
              onClick={(e) => e.preventDefault()}
            ></Avatar>
          </Dropdown>
        </>
      );
    }
    return (
      <>
        <div className="nav-right">
          <h1
            onClick={() => {
              navigate("/login");
            }}
            className="nav-right-title"
          >
            Login
          </h1>
        </div>
      </>
    );
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
            src="https://leethanh.netlify.app/image/logoIcon.png"
            width={70}
            height={70}
            alt=""
          />
          <h1 className="logo-title">SPORTTOGETHER</h1>
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
            <h1 onClick={() => {
              setIsModalOpen(true)
            }}>
              TÌM KIẾM{" "}
              <span>
                <i className="fas fa-search"></i>
              </span>
            </h1>
            <ModalSearch isOpen={isModalOpen} onClose={handleCancel} />
          </div>
        </div>
        <div className="nav-right">{checkUserLogin()}</div>
      </div>
    </header>
  );
}
