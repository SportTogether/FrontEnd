import React from "react";
import { Breadcrumb, Checkbox, Dropdown, Space, Table, Tag } from "antd";
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
const columns = [
  {
    title: <h1 className="text-3xl">Topics</h1>,
    dataIndex: "topics",
    key: "topics",
    render: (text) => <a>{text}</a>,
  },
  {
    title: <h1 className="text-3xl">Statistics</h1>,
    dataIndex: "statistics",
    key: "statistics",
  },
  {
    title: <h1 className="text-3xl">Last Post</h1>,
    dataIndex: "lastpost",
    key: "lastpost",
  },
];
const data = [
  {
    key: "1",
    topics: (
      <h1 className="text-2xl text-blue-800 font-bold">UEFA AND EUROPE</h1>
    ),
    statistics: (
      <>
        <h1>
          <i className="fas fa-comments text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">400</span>
        </h1>
        <h1>
          <i className="far fa-eye text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">4,182</span>
        </h1>
      </>
    ),
    lastpost: <p className="text-xl text-gray-500">Yesterday, 11:00 AM</p>,
  },
  {
    key: "2",
    topics: (
      <h1 className="text-2xl text-blue-800 font-bold">AFC: TOURNAMENT</h1>
    ),
    statistics: (
      <>
        <h1>
          <i className="fas fa-comments text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">152</span>
        </h1>
        <h1>
          <i className="far fa-eye text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">1,523</span>
        </h1>
      </>
    ),
    lastpost: <p className="text-xl text-gray-500">Friday, 06:00 AM</p>,
  },
  {
    key: "3",
    topics: (
      <h1 className="text-2xl text-blue-800 font-bold">CAF: TOURNAMENTS</h1>
    ),
    statistics: (
      <>
        <h1>
          <i className="fas fa-comments text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">989</span>
        </h1>
        <h1>
          <i className="far fa-eye text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">1,200</span>
        </h1>
      </>
    ),
    lastpost: <p className="text-xl text-gray-500">Monday, 17:00 PM</p>,
  },
  {
    key: "4",
    topics: <h1 className="text-2xl text-blue-800 font-bold">CONMEBOL</h1>,
    statistics: (
      <>
        <h1>
          <i className="fas fa-comments text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">52</span>
        </h1>
        <h1>
          <i className="far fa-eye text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">850</span>
        </h1>
      </>
    ),
    lastpost: <p className="text-xl text-gray-500">Sep 13, 2023</p>,
  },
  {
    key: "5",
    topics: (
      <h1 className="text-2xl text-blue-800 font-bold">FIFA AND TOURNAMENTS</h1>
    ),
    statistics: (
      <>
        <h1>
          <i className="fas fa-comments text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">65</span>
        </h1>
        <h1>
          <i className="far fa-eye text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">1,205</span>
        </h1>
      </>
    ),
    lastpost: <p className="text-xl text-gray-500">Aug 29, 2023</p>,
  },
  {
    key: "6",
    topics: <h1 className="text-2xl text-blue-800 font-bold">CONCACAF</h1>,
    statistics: (
      <>
        <h1>
          <i className="fas fa-comments text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">385</span>
        </h1>
        <h1>
          <i className="far fa-eye text-blue-800 text-3xl"></i>
          <span className="text-xl text-gray-500 pl-4 pb-5">1,564</span>
        </h1>
      </>
    ),
    lastpost: <p className="text-xl text-gray-500">Aug 25, 2023</p>,
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
              <h1 className="text-black text-3xl font-bold text-center">
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
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumPage;
