import React from "react";
import { RightOutlined } from "@ant-design/icons";
import { Form, Input, Typography, message } from "antd";
const { Title } = Typography;
const DangKyDoiTacPage = () => {
  const [form] = Form.useForm();
  const handleEmailClick = () => {
    const values = form.getFieldsValue();
    const subject = encodeURIComponent("Liên hệ đối tác");
    const body = encodeURIComponent(
      `-Name: ${values.username}\n-Phone: ${values.phone}\n-Email: ${values.email}\n-Address: ${values.address}\n-Content: ${values.content}`
    );

    const mailtoLink = `mailto:thanhxuandaole@email.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };
  const onFinish = async (value) => {
    console.log(value);
    message.success("Đã gửi liên hệ thành công!!!");
    setTimeout(() => {
      window.location.reload(); // Reload the page
    }, 2000);
    // const formData = new FormData();
    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
    // try {
    //   // Gửi dữ liệu biểu mẫu lên máy chủ
    //   const response = await fetch('/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formDataObject),
    //   });
    //   // const response = await axios.post('/send-email', value);
    //   // const result = await response.text();
    //   // console.log(result);
    //   // Xử lý phản hồi từ máy chủ
    //   if (response.status === 200) {
    //     message.success('Đã gửi liên hệ thành công!!!');
    //     setTimeout(() => {
    //       window.location.reload(); // Reload the page
    //     }, 2000);
    //   } else {
    //     message.error('Có lỗi xảy ra khi gửi liên hệ.');
    //   }
    // } catch (error) {
    //   console.error('Lỗi khi gửi dữ liệu:', error);
    //   message.error('Có lỗi xảy ra khi gửi liên hệ.');
    // }
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
