import React from 'react'
import { RightOutlined } from "@ant-design/icons";
import { Form, Input } from 'antd';
const DangKyDoiTacPage = () => {
    // const [form] = Form.useForm();
    const onFinish = (value) => {
        console.log(value);
    }
    return (
        <div className='container dangKyDoiTac'>
            <h1 className='text-3xl text-white font-medium pb-5'>TRANG CHỦ <RightOutlined /> ĐĂNG KÝ ĐỐI TÁC</h1>
            <div className='formDangKy'>
                <h1 className='text-4xl text-center text-green-700 font-bold pb-2'>Liên Hệ</h1>
                <Form
                    name="formDangKyDoiTac"
                    onFinish={onFinish}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ và tên!!!',
                            },
                        ]}
                    >
                        <Input className='bg-gray-100 rounded-xl text-xl' placeholder='Họ Và Tên*' />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại!!!',
                            },
                        ]}
                    >
                        <Input className='bg-gray-100 rounded-xl text-xl' placeholder="Điện Thoại*" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập email!!!',
                            },
                            {
                                type: 'email',
                                message: 'Vui lòng nhập đúng định dạng email!!!',
                            },
                        ]}
                    >
                        <Input className='bg-gray-100 rounded-xl text-xl' placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập địa chỉ!!!',
                            },
                        ]}
                    >
                        <Input className='bg-gray-100 rounded-xl text-xl' placeholder="Địa Chỉ" />
                    </Form.Item>

                    <Form.Item
                        name="content"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập nội dung!!!',
                            },
                        ]}
                    >
                        <Input.TextArea rows={4} className='bg-gray-100 rounded-xl text-xl' placeholder="Nội Dung*" />
                    </Form.Item>

                    <Form.Item>
                        <button type='submit' className='bg-green-600 py-3 px-2 rounded-2xl text-white text-2xl font-medium'>Gửi Liên Hệ</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default DangKyDoiTacPage