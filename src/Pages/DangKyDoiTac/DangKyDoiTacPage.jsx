import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Form, Input, Typography, message } from "antd";
const { Title } = Typography;
const DangKyDoiTacPage = () => {
  const [form] = Form.useForm();
  const handleEmailClick = () => {
    const values = form.getFieldsValue();
    const { username, phone, email, address, content } = values;
    if (username == undefined || phone == undefined || email == undefined || address == undefined || content == undefined) {
      message.error("Vui lòng nhập thông tin gửi liên hệ!");
      return;
    }
    const subject = encodeURIComponent("Liên hệ đối tác");
    const body = encodeURIComponent(
      `-Name: ${values.username}\n-Phone: ${values.phone}\n-Email: ${values.email}\n-Address: ${values.address}\n-Content: ${values.content}`
    );
    const mailtoLink = `mailto:thanhxuandaole@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    message.success("Đã gửi liên hệ thành công!!!");
    setTimeout(() => {
      window.location.reload(); // Reload the page
    }, 2000);
  };
  const onFinish = (values) => {
    console.log("SuccessFully", values);
  };
  return (
    <div className="container dangKyDoiTac">
      <h1 className="breadcrumb-dangKyDoiTac">
        TRANG CHỦ <RightOutlined /> ĐĂNG KÝ ĐỐI TÁC
      </h1>
      <div className="formDangKy">
        <h1 className="title-dangKyDoiTac">Liên Hệ</h1>
        <Form
          form={form}
          name="formDangKyDoiTac"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
        >
          <Title level={4} className="label-dangKyDoiTac">
            Họ Và Tên*
          </Title>
          <Form.Item
            className="mb-4"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên!!!",
              },
            ]}
          >
            <Input
              className="bg-gray-100 rounded-xl text-xl"
              placeholder="Họ Và Tên*"
            />
          </Form.Item>
          <Title level={4} className="label-dangKyDoiTac">
            Điện Thoại*
          </Title>
          <Form.Item
            className="mb-4"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại!!!",
              },
            ]}
          >
            <Input
              className="bg-gray-100 rounded-xl text-xl"
              placeholder="Điện Thoại*"
            />
          </Form.Item>
          <Title level={4} className="label-dangKyDoiTac">
            Email*
          </Title>
          <Form.Item
            className="mb-4"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email!!!",
              },
              {
                type: "email",
                message: "Vui lòng nhập đúng định dạng email!!!",
              },
            ]}
          >
            <Input
              className="bg-gray-100 rounded-xl text-xl"
              placeholder="Email"
            />
          </Form.Item>
          <Title level={4} className="label-dangKyDoiTac">
            Địa Chỉ*
          </Title>
          <Form.Item
            className="mb-4"
            name="address"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ!!!",
              },
            ]}
          >
            <Input
              className="bg-gray-100 rounded-xl text-xl"
              placeholder="Địa Chỉ"
            />
          </Form.Item>
          <Title level={4} className="label-dangKyDoiTac">
            Nội Dung*
          </Title>
          <Form.Item
            className="mb-4"
            name="content"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập nội dung!!!",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              className="bg-gray-100 rounded-xl text-xl"
              placeholder="Nội Dung*"
            />
          </Form.Item>

          <Form.Item>
            <button
              // type="submit"
              type="button"
              onClick={handleEmailClick}
              className="bg-green-600 py-3 px-2 rounded-2xl text-white text-2xl font-medium"
            >
              Gửi Liên Hệ
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default DangKyDoiTacPage;
