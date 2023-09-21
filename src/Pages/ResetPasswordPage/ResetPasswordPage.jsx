import React from "react";
import Lottie from "lottie-react";
import animateResetPassword from "./animation_reset_password.json";
import { Button, Form, Input } from "antd";
const ResetPasswordPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className="container resetpassword-page">
        <div className="item-left">
          <Lottie
            animationData={animateResetPassword}
            className=""
            loop={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="item-right">
          <h1 className="text-center">Forgot Password</h1>
          <div className="mx-auto">
            <Form
              onFinish={onFinish}
              name="reset"
              className="login-form"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="phone"
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
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="btn">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
