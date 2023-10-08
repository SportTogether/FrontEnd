import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { localStorageServices } from "../../Services/localStorageServices";
import { SPORT_LOCALSTORAGE } from "../../Constants";
import { setLogin } from "../../redux/QuanLyNguoiDungSlice";
import Lottie from "lottie-react";
import animateLogin from "./animation_login.json";
import { Button, Checkbox, Form, Input, message } from "antd";
import {
  // DashboardTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
const DangNhapPage = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let data = "Test";
  const onFinish = async (values) => {
    // values = JSON.stringify(values);
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((result) => {
          data = result;
        });
      console.log("my data after login : ", data);
      if (data.data.id != 0) {
        dispatch(setLogin(data.data));
        localStorageServices.setUser(SPORT_LOCALSTORAGE, data.data);
        message.success("Bạn Đã Đăng Nhập Thành Công!!!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        message.error("Tên Tài Khoản Hoặc Mật Khẩu Không Đúng!!!");
      }
    } catch (error) {
      console.error("Lỗi xảy ra: ", error);
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
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
              initialValue={"admin"}
            >
              <Input
                className="border-green-600 border-2"
                prefix={
                  <UserOutlined className="site-form-item-icon text-green-600" />
                }
                placeholder="Email"
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
