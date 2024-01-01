import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Checkbox, Collapse, Dropdown, Rate } from "antd";
import { DownOutlined, StarFilled } from "@ant-design/icons";
import { setDetailSan, setListSan } from "../../redux/QuanLySanSlice";
const DatSanPage = () => {
  const [valueRadio, setValueRadio] = useState(1);
  const [selectedValues, setSelectedValues] = useState([]);
  const handleCheckboxChange = (value) => {
    const updatedValues = [...selectedValues];
    if (updatedValues.includes(value)) {
      // Nếu giá trị đã được chọn, loại bỏ nó ra khỏi mảng
      updatedValues.splice(updatedValues.indexOf(value), 1);
      setSelectedValues(updatedValues);
    } else {
      // Nếu giá trị chưa được chọn, thêm nó vào mảng
      setSelectedValues([...selectedValues, value]);
    }
  };
  useEffect(() => {
    const fetchApiRadioCheck = async () => {
      if (selectedValues.length === 2) {
        let value1 = selectedValues[0];
        let value2 = selectedValues[1];
        const params = new URLSearchParams();

        if (typeof value1 === "number") {
          console.log("stars :", value1, ", name :", value2);
          params.append("name", value2);
          params.append("stars", +value1);
        } else {
          console.log("stars :", value2, ", name :", value1);
          params.append("name", value1);
          params.append("stars", +value2);
        }
        console.log("param: ", params);
        try {
          const response = await fetch(
            "https://leethanh.up.railway.app/api/yards/filter/all",
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: params,
            }
          ).then((res) => res.json());
          dispatch(setListSan(response.data));
        } catch (error) {
          console.error("Lỗi xảy ra: ", error);
        }
      } else if (selectedValues.length !== 0) {
        const params = new URLSearchParams();
        params.append("name", selectedValues[0]);
        try {
          const response = await fetch(
            "https://leethanh.up.railway.app/api/yards/filter",
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: params,
            }
          ).then((res) => res.json());
          dispatch(setListSan(response.data));
        } catch (error) {
          console.error("Lỗi xảy ra: ", error);
        }
      } else {
        const fetchApi = async () => {
          try {
            const response = await fetch(
              "https://leethanh.up.railway.app/api/yards",
              {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              }
            ).then((response) => response.json());
            dispatch(setListSan(response.data));
          } catch (error) {
            console.error("Lỗi xảy ra: ", error);
          }
        };
        fetchApi();
      }
    };
    fetchApiRadioCheck();
  }, [selectedValues]);
  const handleCheckboxClick = (value) => {
    // Kiểm tra nếu giá trị đã được chọn, thì xóa nó ra khỏi mảng
    if (selectedValues.includes(value)) {
      const updatedValues = selectedValues.filter((v) => v !== value);
      setSelectedValues(updatedValues);
    }
    // console.log(selectedValues);
  };
  const onChange = (e) => {
    const outerCheck = e.target.value;
    setValueRadio(outerCheck);
    console.log("value", outerCheck);
    const params = new URLSearchParams();
    params.append("name", outerCheck);

    const fetchApiRadioCheck = async () => {
      try {
        const response = await fetch(
          "https://leethanh.up.railway.app/api/yards/filter",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params,
          }
        ).then((res) => res.json());
        dispatch(setListSan(response.data));
      } catch (error) {
        console.error("Lỗi xảy ra: ", error);
      }
    };
    fetchApiRadioCheck();
  };
  const cities = [
    {
      key: "1",
      label: (
        <Checkbox value="TPHCM" onChange={onChange}>
          <h1 className="text-2xl">Thành phố Hồ Chí Minh</h1>
        </Checkbox>
      ),
    },
    {
      key: "2",
      label: (
        <Checkbox value="HANOI" onChange={onChange}>
          <h1 className="text-2xl">Hà Nội</h1>
        </Checkbox>
      ),
    },
    {
      key: "3",
      label: (
        <Checkbox value="DANANG" onChange={onChange}>
          <h1 className="text-2xl">Đà Nẵng</h1>
        </Checkbox>
      ),
    },
    {
      key: "4",
      label: (
        <Checkbox value="THUDUC" onChange={onChange}>
          <h1 className="text-2xl">Thủ Đức</h1>
        </Checkbox>
      ),
    },
    {
      key: "5",
      label: (
        <Checkbox value="HAIPHONG" onChange={onChange}>
          <h1 className="text-2xl">Hải Phòng</h1>
        </Checkbox>
      ),
    },
    {
      key: "6",
      label: (
        <Checkbox value="BINHDUONG" onChange={onChange}>
          <h1 className="text-2xl">Bình Dương</h1>
        </Checkbox>
      ),
    },
  ];
  const districts = [
    {
      key: "1",
      label: (
        <Checkbox value="quan 1" onChange={onChange}>
          <h1 className="text-2xl">Quận 1</h1>
        </Checkbox>
      ),
    },
    {
      key: "2",
      label: (
        <Checkbox value="quan 2" onChange={onChange}>
          <h1 className="text-2xl">Quận 2</h1>
        </Checkbox>
      ),
    },
    {
      key: "3",
      label: (
        <Checkbox value="quan 3" onChange={onChange}>
          <h1 className="text-2xl">Quận 3</h1>
        </Checkbox>
      ),
    },
    {
      key: "4",
      label: (
        <Checkbox value="quan go vap" onChange={onChange}>
          <h1 className="text-2xl">Quận Gò Vấp</h1>
        </Checkbox>
      ),
    },
    {
      key: "5",
      label: (
        <Checkbox value="quan tan binh" onChange={onChange}>
          <h1 className="text-2xl">Quận Tân Bình</h1>
        </Checkbox>
      ),
    },
    {
      key: "6",
      label: (
        <Checkbox value="quan phu nhuan" onChange={onChange}>
          <h1 className="text-2xl">Quận Phú Nhuận</h1>
        </Checkbox>
      ),
    },
  ];
  const types = [
    {
      key: "1",
      label: (
        <Checkbox value="SBD" onChange={onChange}>
          <h1 className="text-2xl">
            <i className="fas fa-futbol"></i>{" "}
            <span className="pl-2">Sân Bóng Đá</span>
          </h1>
        </Checkbox>
      ),
    },
    {
      key: "2",
      label: (
        <Checkbox value="SCL" onChange={onChange}>
          <div className="flex">
            <img
              src="https://leethanh.netlify.app/image/badminton.png"
              width={24}
              height={24}
              alt=""
            />
            <span className="text-2xl pl-2">Sân Cầu Lông</span>
          </div>
        </Checkbox>
      ),
    },
    {
      key: "3",
      label: (
        <Checkbox value="ST" onChange={onChange}>
          <div className="flex">
            <img
              src="https://leethanh.netlify.app/image/tennis.png"
              width={24}
              height={24}
              alt=""
            />
            <span className="text-2xl pl-2">Sân Tennis</span>
          </div>
        </Checkbox>
      ),
    },
    {
      key: "4",
      label: (
        <Checkbox value="SBR" onChange={onChange}>
          <h1 className="text-2xl">
            <i className="fas fa-basketball-ball"></i>
            <span className="pl-2">Sân Bóng Rổ</span>
          </h1>
        </Checkbox>
      ),
    },
    {
      key: "5",
      label: (
        <Checkbox value="SBB" onChange={onChange}>
          <h1 className="text-2xl">
            <i className="fas fa-table-tennis"></i>
            <span className="pl-2">Sân Bóng Bàn</span>
          </h1>
        </Checkbox>
      ),
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://leethanh.up.railway.app/api/yards",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        ).then((response) => response.json());
        dispatch(setListSan(response.data));
      } catch (error) {
        console.error("Lỗi xảy ra: ", error);
      }
    };
    fetchApi();
  }, []);
  const { listSan, thongTinSan } = useSelector((state) => {
    return state.QuanLySanSlice;
  });
  const handleDatSan = (event) => {
    dispatch(setDetailSan(event));
    navigate("/detail");
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
            title: <h1 className="breadcrumb-title">ĐẶT SÂN</h1>,
          },
        ]}
      />
      <div className="dat-san-page">
        <div className="dat-san-left">
          <div className="pt-12 pb-5">
            <Collapse
              expandIconPosition="right"
              items={[
                {
                  key: "1",
                  label: (
                    <h1 className="text-green-600 text-3xl font-bold">
                      LOẠI SÂN
                    </h1>
                  ),
                  children: (
                    <>
                      <Checkbox
                        value="Sân cỏ nhân tạo"
                        onChange={() => handleCheckboxChange("Sân cỏ nhân tạo")}
                        onClick={() => handleCheckboxClick("Sân cỏ nhân tạo")}
                      >
                        <h1 className="text-2xl">Sân cỏ nhân tạo</h1>
                      </Checkbox>
                      <Checkbox
                        value="Sân cỏ tự nhiên"
                        onChange={() => handleCheckboxChange("Sân cỏ tự nhiên")}
                        onClick={() => handleCheckboxClick("Sân cỏ tự nhiên")}
                      >
                        <h1 className="text-2xl">Sân cỏ tự nhiên</h1>
                      </Checkbox>
                      <Checkbox
                        value="Sân mini"
                        onChange={() => handleCheckboxChange("Sân mini")}
                        onClick={() => handleCheckboxClick("Sân mini")}
                      >
                        <h1 className="text-2xl">Sân mini</h1>
                      </Checkbox>
                    </>
                  ),
                },
              ]}
            />
          </div>
          <div>
            <Collapse
              expandIconPosition="right"
              items={[
                {
                  key: "1",
                  label: (
                    <h1 className="text-green-600 text-3xl font-bold">
                      ĐÁNH GIÁ
                    </h1>
                  ),
                  children: (
                    <>
                      <Checkbox
                        value={5}
                        onChange={() => handleCheckboxChange(5)}
                        onClick={() => handleCheckboxClick(5)}
                      >
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>
                      <Checkbox
                        value={4}
                        onChange={() => handleCheckboxChange(4)}
                        onClick={() => handleCheckboxClick(4)}
                      >
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>
                      <Checkbox
                        value={3}
                        onChange={() => handleCheckboxChange(3)}
                        onClick={() => handleCheckboxClick(3)}
                      >
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>{" "}
                      <br />
                      <Checkbox
                        value={2}
                        onChange={() => handleCheckboxChange(2)}
                        onClick={() => handleCheckboxClick(2)}
                      >
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>{" "}
                      <br />
                      <Checkbox
                        value={1}
                        onChange={() => handleCheckboxChange(1)}
                        onClick={() => handleCheckboxClick(1)}
                      >
                        <h1 className="text-3xl text-yellow-300">
                          <StarFilled />
                          <StarFilled />
                        </h1>
                      </Checkbox>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="dat-san-right">
          <div className="top">
            <div className="item-top">
              <Dropdown
                menu={{
                  items: cities,
                }}
                trigger={["click"]}
              >
                <h1
                  className="item-top-title"
                  onClick={(e) => e.preventDefault()}
                >
                  TỈNH / THÀNH
                  <DownOutlined />
                </h1>
              </Dropdown>
            </div>
            <div className="item-top">
              <Dropdown
                menu={{
                  items: districts,
                }}
                trigger={["click"]}
              >
                <h1
                  className="item-top-title"
                  onClick={(e) => e.preventDefault()}
                >
                  QUẬN / HUYỆN
                  <DownOutlined />
                </h1>
              </Dropdown>
            </div>
            <div className="item-top">
              <Dropdown
                menu={{
                  items: types,
                }}
                trigger={["click"]}
              >
                <h1
                  className="item-top-title"
                  onClick={(e) => e.preventDefault()}
                >
                  THỂ LOẠI
                  <DownOutlined />
                </h1>
              </Dropdown>
            </div>
          </div>
          <div className="list">
            <h1 className="list-title">CHỌN SÂN</h1>
            <div className="overflow-y-scroll h-[500px]">
              {listSan?.map((item) => {
                return (
                  <div
                    className="list-item"
                    key={item.id}
                    onClick={() => {
                      handleDatSan(item);
                    }}
                  >
                    <div className="list-item-left">
                      <img
                        src="https://leethanh.netlify.app/image/santhanhthang.jpg"
                        alt=""
                      />
                    </div>
                    <div className="list-item-right">
                      <div className="grid grid-cols-2">
                        <h1 className="text-blue-700 text-2xl font-bold">
                          {item.name}
                        </h1>
                        <p className="text-right">{item.distance} km</p>
                      </div>
                      <Rate
                        allowHalf
                        defaultValue={item.stars}
                        className="text-2xl"
                      />
                      <h1 className="text-xl">{item.address}</h1>
                      <p className="text-lg">
                        <b>Điểm nhấn:</b> {item.type}
                      </p>
                      <div className="grid grid-cols-2">
                        <p className="text-lg">
                          <b>Giá tham khảo:</b> {item.price}
                        </p>
                        <button className="bg-green-700 text-center py-3 px-4 rounded-3xl w-[200px] ml-[200px]">
                          <b className="text-xl cursor-pointer">
                            <i className="fas fa-location-arrow"></i> Đặt Sân
                          </b>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatSanPage;
