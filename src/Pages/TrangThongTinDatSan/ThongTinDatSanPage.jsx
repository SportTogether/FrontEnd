import { Breadcrumb } from 'antd'
import React from 'react'

const ThongTinDatSanPage = () => {
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
        </>
    )
}

export default ThongTinDatSanPage