import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Form, Image, Input, Radio } from "antd";
const ThongTinDatSanPage = () => {
  const navigate = useNavigate();
  const { checkLogin } = useSelector((state) => {
    return state.QuanLyNguoiDungSlice;
  });
  const { thongTinSanDaDat } = useSelector((state) => {
    return state.QuanLySanSlice;
  });
  console.log(thongTinSanDaDat);
  const handleFinish = (value) => {
    console.log("Success:", value);
    setTimeout(() => {
      navigate("/thanh-toan");
    }, 1000);
  };
  return (
    <>
      <Breadcrumb
        className="breadcrumb"
        separator=">"
        style={{ fontSize: 30 }}
        items={[
          {
            title: <h1 className="breadcrumb-title">TRANG CHỦ</h1>,
          },
          {
            title: <h1 className="breadcrumb-title">CHỌN SÂN</h1>,
          },
          {
            title: <h1 className="breadcrumb-title">ĐẶT SÂN</h1>,
          },
          {
            title: <h1 className="breadcrumb-title">KIỂM TRA THÔNG TIN</h1>,
          },
        ]}
      />
      <h1 className="text-4xl text-center py-5 text-green-700 font-bold">
        KIỂM TRA THÔNG TIN
      </h1>
      <div className="container grid grid-cols-2 gap-8">
        <div className="py-5 mx-auto">
          <div className="max-w-[600px]">
            <h1 className="text-3xl text-green-700">
              Sân Đặt:{" "}
              <span className="text-black font-bold uppercase">
                {thongTinSanDaDat?.name} - SÂN 1
              </span>
            </h1>
            <div className="text-center my-7">
              <Image
                src="https://leethanh.netlify.app/image/sanThanhThang.JPG"
                className="h-[200px] border-4 border-gray-400 rounded-2xl"
                width={400}
                alt=""
              />
            </div>
            <h1 className="text-3xl text-green-700">
              Giờ Đặt:{" "}
              <span className="text-black font-bold bg-gray-200 py-1 px-2 rounded-2xl">
                {thongTinSanDaDat?.ocl1} - {thongTinSanDaDat?.ocl2}{" "}
              </span>
            </h1>
            <h1 className="text-3xl text-green-700 py-3">
              Địa Chỉ:{" "}
              <span className="text-black font-bold">
                {thongTinSanDaDat?.address}
              </span>
            </h1>
            <h1 className="text-3xl text-green-700 py-3">
              Số Điện Thoại Chủ Sân:{" "}
              <span className="text-black font-bold">0123456789</span>
            </h1>
          </div>
        </div>
        <div className="py-5">
          <Form
            name="normal_login"
            className=""
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 500,
              margin: "0 auto",
            }}
            onFinish={handleFinish}
          >
            <h1 className="text-green-600 text-2xl">Tên Người Đặt*</h1>
            <Form.Item
              name="tenNguoiDat"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ và tên người đặt!",
                },
              ]}
              initialValue={checkLogin?.name}
            >
              <Input className="bg-gray-200 rounded-2xl" size="large" />
            </Form.Item>

            <h1 className="text-green-600 text-2xl">Email*</h1>
            <Form.Item
              name="emailNguoiDat"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email người đặt!",
                },
                {
                  type: "email",
                  message: "Vui lòng nhập đúng định dạng email!",
                },
              ]}
              initialValue={checkLogin?.email}
            >
              <Input className="bg-gray-200 rounded-2xl" size="large" />
            </Form.Item>

            <h1 className="text-green-600 text-2xl">Số Điện Thoại*</h1>
            <Form.Item
              name="soDtNgDat"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại người đặt!",
                },
              ]}
              initialValue={checkLogin?.number}
            >
              <Input className="bg-gray-200 rounded-2xl" size="large" />
            </Form.Item>

            <h1 className="text-green-600 text-2xl">Phương Thức Thanh Toán:</h1>
            <Form.Item name="methodPay" initialValue={"VNPay"}>
              <Radio.Group>
                <Radio.Button value="VNPay" className="h-[100px] w-[120px]">
                  <img
                    src="../../../public/image/Icon_VNpay.png"
                    className="h-full"
                    alt=""
                  />
                </Radio.Button>
                <Radio.Button value="MoMoPay" className="h-[100px] w-[120px]">
                  <img
                    src="../../../public/image/MoMo_Logo.png"
                    className="h-full"
                    alt=""
                  />
                </Radio.Button>
                <Radio.Button
                  value="MasterCardPay"
                  className="h-[100px] w-[120px]"
                >
                  <img
                    src="../../../public/image/MasterCard_logo.png"
                    className="h-full"
                    alt=""
                  />
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <div className="grid grid-cols-2">
                <button
                  htmlType="button"
                  className="border-[3px] border-green-600 w-[200px] text-xl text-green-600 font-medium rounded-2xl p-2"
                  onClick={() => {
                    navigate("/detail");
                  }}
                >
                  Trở Lại
                </button>
                <div className="text-right">
                  <button
                    htmlType="submit"
                    className="border-[3px] border-green-600 w-[200px] text-xl text-green-600 font-medium rounded-2xl p-2"
                  >
                    Thanh Toán
                  </button>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ThongTinDatSanPage;
