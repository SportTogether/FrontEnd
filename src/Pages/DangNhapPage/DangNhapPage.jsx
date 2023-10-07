import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animateLogin from "./animation_login.json";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
const DangNhapPage = () => {
  const userName = "admin";
  const passWord = "1234";
  const [userLogin, setUserLogin] = useState({
    userName,
    passWord,
  });
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("values:", values);
    if (values.username == userName && values.password == passWord) {
      setUserLogin({
        userName: values.username,
        passWord: values.password,
      });
      localStorage.setItem("USER_LOGIN", userLogin);
      message.success("Bạn Đã Đăng Nhập Thành Công!!!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      message.error("Tên Tài Khoản Hoặc Mật Khẩu Không Đúng!!!");
    }
  };
  return (
    <>
      <div className="container login-page">
        <div className="item-left">
          <Lottie
            animationData={animateLogin}
            className=""
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="item-right">
          <h1 className="text-center font-medium text-3xl text-green-600 py-5">
            Login
          </h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
              initialValue={"admin"}
            >
              <Input
                className="border-green-600 border-2"
                prefix={
                  <UserOutlined className="site-form-item-icon text-green-600" />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
              initialValue={"1234"}
            >
              <Input.Password
                className="border-green-600 border-2"
                prefix={
                  <LockOutlined className="site-form-item-icon text-green-600" />
                }
                type="password"
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
                Forgot password
              </p>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn">
                Login
              </Button>
              <p className="login-form-text-bottom">
                Don't Have an Account?{" "}
                <span
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
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
