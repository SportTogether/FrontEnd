import { Breadcrumb } from 'antd'
import React from 'react'

const NewsPage = () => {
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
                        title: <h1 className="breadcrumb-title">TIN TỨC</h1>,
                    },
                ]}
            />
        </>
    )
}

export default NewsPage