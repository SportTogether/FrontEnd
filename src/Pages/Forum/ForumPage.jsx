import React from "react";
import { Breadcrumb, Checkbox, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
const onChange = (e) => {
  console.log(`checked = ${e.target.value}`);
};
const keyword = [
  {
    key: "1",
    label: (
      <Checkbox value="UEFA" onChange={onChange}>
        <h1 className="text-2xl">UEFA</h1>
      </Checkbox>
    ),
  },
  {
    key: "2",
    label: (
      <Checkbox value="AFC" onChange={onChange}>
        <h1 className="text-2xl">AFC</h1>
      </Checkbox>
    ),
  },
  {
    key: "3",
    label: (
      <Checkbox value="CAF" onChange={onChange}>
        <h1 className="text-2xl">CAF</h1>
      </Checkbox>
    ),
  },
  {
    key: "4",
    label: (
      <Checkbox value="CONMEBOL" onChange={onChange}>
        <h1 className="text-2xl">CONMEBOL</h1>
      </Checkbox>
    ),
  },
  {
    key: "5",
    label: (
      <Checkbox value="FIFA" onChange={onChange}>
        <h1 className="text-2xl">FIFA</h1>
      </Checkbox>
    ),
  },
];
const ForumPage = () => {
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
            title: <h1 className="breadcrumb-title">FORUM</h1>,
          },
        ]}
      />
      <div className="container">
        <div className="forum">
          <div className="forum-row">
            <div className="forum-row-left bg-green-100 py-5">
              <h1 className="text-white text-3xl font-bold text-center">
                FORUMS
              </h1>
            </div>
            <div className="forum-row-right bg-green-400 h-[76px]"></div>
          </div>
          <div className="forum-row">
            <div className="forum-row-left py-4">
              <h1 className="text-center text-3xl">NEW TOPIC</h1>
            </div>
            <div className="forum-row-right py-4 pl-8 text-3xl">
              <h1>MEMBER LIST</h1>
            </div>
          </div>
          <div className="forum-row">
            <div className="forum-row-left py-4">
              <Dropdown
                menu={{
                  items: keyword,
                }}
                trigger={["click"]}
              >
                <h1
                  className="text-center text-2xl font-medium cursor-pointer rounded-2xl bg-green-200 mx-6"
                  onClick={(e) => e.preventDefault()}
                >
                  KEYWORDS
                  <DownOutlined />
                </h1>
              </Dropdown>
            </div>
            <div className="forum-row-right py-4 pl-8 text-3xl">
              <Dropdown
                menu={{
                  items: keyword,
                }}
                trigger={["click"]}
              >
                <h1
                  className="text-2xl text-center font-medium cursor-pointer rounded-2xl bg-green-200 w-[220px]"
                  onClick={(e) => e.preventDefault()}
                >
                  MEMBERS
                  <DownOutlined />
                </h1>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumPage;
