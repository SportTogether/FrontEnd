import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animateSignUp from "./animation_soccer.json";
import { Form, Input, Checkbox, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const DangKyPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    values = JSON.stringify(values);
    console.log("Success:", values);
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: values,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
        });
    } catch (error) {
      console.error("Lỗi xảy ra: ", error);
    }
  };
  return (
    <>
      <div className="container signup-page">
        <div className="item-left">
          <Lottie
            animationData={animateSignUp}
            className=""
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="item-right signup">
          <h1 className="signup-title">Sign Up</h1>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            className="signup-form"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              tooltip="What is your name ?"
              rules={[
                {
                  required: true,
                  message: "Please input name!",
                },
                {
                  type: "string",
                  pattern: /^\S+$/,
                  message: "Name have't the blank!",
                },
              ]}
            >
              <Input
                placeholder="Fullname"
                className="border-2 border-green-600"
              />
            </Form.Item>

            <Form.Item
              name="email"
              tooltip="What is your name ?"
              rules={[
                {
                  required: true,
                  message: "Please input email!",
                },
                {
                  type: "string",
                  pattern: /^\S+$/,
                  message: "Email have't the blank!",
                },
              ]}
            >
              <Input
                placeholder="Email"
                className="border-2 border-green-600"
              />
            </Form.Item>

            <Form.Item
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
                {
                  pattern: /^(0\d{9}|84\d{9})$/,
                  message: "Please input the correct phone number!",
                },
              ]}
            >
              <Input
                placeholder="Phone Number"
                className="border-2 border-green-600"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder="Password"
                className="border-2 border-green-600"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input again your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The password you just inputted is not the same as the password you inputted!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm Password"
                className="border-2 border-green-600"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-green-600">Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn">
                Sign Up
              </Button>
              <p className="signup-form-text-bottom">
                Already Have Account?{" "}
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </span>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default DangKyPage;
