import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown } from "antd";
import { localStorageServices } from "../../Services/localStorageServices";
import { setLogin } from "../../redux/QuanLyNguoiDungSlice";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
            Log In
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
          <h1 className="logo-title">SPORTTOGETHER</h1>
        </div>
      </div>
      <div className="nav">
        <div className="">{checkUserLogin()}</div>
      </div>
    </header>
  );
}
