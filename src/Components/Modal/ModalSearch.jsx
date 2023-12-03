import React from 'react'
import { Form, Modal, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
const cities = [
    {
        id: 1,
        value: "TpHCM",
        cityName: "Thành phố Hồ Chí Minh",
    },
    {
        id: 2,
        value: "HaNoi",
        cityName: "Hà Nội",
    },
    {
        id: 3,
        value: "DaNang",
        cityName: "Đà Nẵng",
    },
    {
        id: 4,
        value: "ThuDuc",
        cityName: "Thủ Đức",
    },
    {
        id: 5,
        value: "HaiPhong",
        cityName: "Hải Phòng",
    },
    {
        id: 6,
        value: "BinhDuong",
        cityName: "Bình Dương",
    },
];
const ModalSearch = ({ isOpen, onClose }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = (value) => {
        console.log("value", value);
        if (value.monTheThao === undefined || value.khuVuc === undefined) return;
        else {
            setTimeout(() => {
                navigate("/dat-san");
            }, 1000);
        }
    };
    if (!isOpen) return null;
    return (
        <Modal
            title="Chọn Môn Thể Thao Và Khu Vực"
            open={isOpen}
            onOk={isOpen}
            footer={false}
            onCancel={onClose}
            width="100%"
        >
            <div className="flex">
                <Form
                    form={form}
                    name="booking"
                    onFinish={onFinish}
                    className="container flex"
                    scrollToFirstError
                >
                    <Form.Item
                        name="monTheThao"
                        className="w-[285px]"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn môn thể thao!!!",
                            },
                        ]}
                    >
                        <Select defaultValue={"Chọn Môn Thể Thao"} size="large">
                            <Select.Option value="BongDa">
                                <h1>
                                    <i className="fas fa-futbol text-xl"></i>{" "}
                                    <span className="pl-2 text-xl">Sân Bóng Đá</span>
                                </h1>
                            </Select.Option>
                            <Select.Option value="CauLong">
                                <div className="flex">
                                    <img
                                        src="https://leethanh.netlify.app/image/badminton.png"
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                    <span className="text-xl pl-2">Sân Cầu Lông</span>
                                </div>
                            </Select.Option>
                            <Select.Option value="Tennis">
                                <div className="flex">
                                    <img
                                        src="https://leethanh.netlify.app/image/tennis.png"
                                        width={24}
                                        height={24}
                                        alt=""
                                    />
                                    <span className="text-xl pl-2">Sân Tennis</span>
                                </div>
                            </Select.Option>
                            <Select.Option value=" Ro">
                                <h1>
                                    <i className="fas fa-basketball-ball text-xl"></i>
                                    <span className="pl-2 text-xl">Sân Bóng Rổ</span>
                                </h1>
                            </Select.Option>
                            <Select.Option value="BongBan">
                                <i className="fas fa-table-tennis text-xl"></i>
                                <span className="pl-2 text-xl">Sân Bóng Bàn</span>
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="khuVuc"
                        className="w-[1000px] px-5"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng chọn khu vực!!!",
                            },
                        ]}
                    >
                        <Select defaultValue={"Chọn Khu Vực"} size="large">
                            {cities.map((item) => {
                                return (
                                    <Select.Option key={item.id} value={item.value}>
                                        <h1 className="text-xl">{item.cityName}</h1>
                                    </Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item className="w-[285px]">
                        <button
                            type="submit"
                            className="bg-blue-900 rounded-lg text-base font-medium py-2 px-10 text-green-600 delay-200 transition hover:text-white"
                            onClick={onFinish}
                        >
                            Tìm Kiếm Sân Chơi
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
}

export default ModalSearch