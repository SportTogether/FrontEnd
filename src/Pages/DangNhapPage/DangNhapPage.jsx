import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { localStorageServices } from "../../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../../Constants";
import { setLogin } from "../../redux/QuanLyNguoiDungSlice";
import { Button, Checkbox, Form, Input, message, Typography } from "antd";
const { Title } = Typography;
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const DangNhapPage = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let data = "Test";
  const onFinish = async (values) => {
    try {
      let response = "";
      // values["role_id"] = 2;
      console.log(values);

      console.log(JSON.stringify(values));
      response = await fetch(
        "https://leethanh.up.railway.app/api/login/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("my data after login : ", data);
          if (data.data.id != 0) {
            dispatch(setLogin(data.data));
            // getLocation();
            // let testOriginId = "ChIJ6SU909godTERJ6kLdOwpSGI";
            // console.log(testOriginId);
            // localStorageServices.setOriginId("originId", testOriginId);

            localStorageServices.setUser(SPORT_LOCALSTORAGE, data.data);
            message.success("Bạn Đã Đăng Nhập Thành Công!!!");
            setTimeout(() => {
              navigate("/");
              // getLocation();
            }, 1000);
          } else if (data.data.id != 0 && data.data.role_name === "admin") {
            // dispatch(setLogin(data.data));
            // localStorageServices.setUser(SPORT_LOCALSTORAGE, data.data);
            // message.success("Bạn Đã Đăng Nhập Thành Công!!!");
            setTimeout(() => {
              const externalLink =
                "https://leethanh.up.railway.app/api/login/admin"; // Replace with your external link
              window.location.href = externalLink;
            }, 1000);
          } else {
            message.error("Tên Tài Khoản Hoặc Mật Khẩu Không Đúng!!!");
          }
        });
    } catch (error) {
      console.error("Lỗi xảy ra: ", error);
    }
  };
  return (
    <>
      <div className="container login-page">
        <div className="login-item">
          <h1 className="title-login">Đăng Nhập</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Title level={4}>Email</Title>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                className="border-green-600 border-2"
                prefix={
                  <UserOutlined className="site-form-item-icon text-green-600" />
                }
                size="large"
                placeholder="Email"
              />
            </Form.Item>
            <Title level={4}>Mật Khẩu</Title>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                className="border-green-600 border-2"
                prefix={
                  <LockOutlined className="site-form-item-icon text-green-600" />
                }
                type="password"
                size="large"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-green-600">Remember me</Checkbox>
              </Form.Item>
              <p
                className="login-form-forgot text-green-600 cursor-pointer"
                onClick={() => {
                  navigate("/reset-password");
                }}
              >
                Quên Mật Khẩu
              </p>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn">
                Đăng Nhập
              </Button>
              <p className="login-form-text-bottom">
                Bạn Chưa Có Tài Khoản?{" "}
                <span
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Đăng Ký
                </span>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default DangNhapPage;
