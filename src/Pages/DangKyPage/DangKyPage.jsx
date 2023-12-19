
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Checkbox, Button, message, Typography } from "antd";
const { Title } = Typography;
// let data = "";
const DangKyPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  let data = "";
  const onFinish = async (values) => {
    try {
      const response = await fetch(
        "https://leethanh.up.railway.app/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          data = result;
        });
      message.success("Đăng ký thành công!!!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Lỗi xảy ra: ", error);
    }
  };
  return (
    <>
      <div className="container signup">
        <div className="signup-item">
          <Title className="signup-title">Đăng Ký</Title>
          <Form
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
            <Title level={4} className="title-label">Họ Và Tên*</Title>
            <Form.Item
              name="name"
              className="mb-3"
              tooltip="What is your name ?"
              rules={[
                {
                  required: true,
                  message: "Please input name!",
                },
                // {
                //   type: "string",
                //   pattern: /^\S+$/,
                //   message: "Name have't the blank!",
                // },
              ]}
            >
              <Input
                size="large"
                placeholder="Fullname"
                className="border-2 border-green-600"
              />
            </Form.Item>
            <Title level={4} className="title-label">Email*</Title>
            <Form.Item
              name="email"
              className="mb-3"
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
                size="large"
                placeholder="Email"
                className="border-2 border-green-600"
              />
            </Form.Item>
            <Title level={4} className="title-label">Số Điện Thoại*</Title>
            <Form.Item
              name="number"
              className="mb-3"
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
                size="large"
                placeholder="Phone Number"
                className="border-2 border-green-600"
              />
            </Form.Item>
            <Title level={4} className="title-label">Mật Khẩu*</Title>
            <Form.Item
              name="password"
              className="mb-3"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                size="large"
                placeholder="Password"
                className="border-2 border-green-600"
              />
            </Form.Item>
            <Title level={4} className="title-label">Nhập Lại Mật Khẩu*</Title>
            <Form.Item
              name="confirm"
              className="mb-3"
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
                size="large"
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
                Đăng Ký
              </Button>
              <p className="signup-form-text-bottom">
                Bạn Đã Có Tài Khoản?{" "}
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Đăng Nhập
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
