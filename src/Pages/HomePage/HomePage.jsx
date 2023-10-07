import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Typography } from "antd";
const { Paragraph } = Typography;
const itemNews = [
  {
    id: 1,
    image:
      "https://www.baobariavungtau.com.vn/dataimages/202309/original/images1878521_9M1.jpeg",
    description:
      "Phong trào bóng đá cộng đồng đang thu hút ngày càng nhiều người tham gia. Đây không chỉ là sân chơi bổ ích giúp người dân rèn luyện sức khỏe, gắn kết cộng đồng mà còn là cơ hội để ngành thể thao tìm kiếm, phát hiện và đào tạo nguồn tài năng cho nền bóng đá tỉnh Bà Rịa-Vũng Tàu.",
    url: "https://www.baobariavungtau.com.vn/the-thao/202309/lan-toa-phong-trao-bong-da-cong-dong-990870/",
  },
  {
    id: 2,
    image:
      "https://baoangiang.com.vn/image/fckeditor/upload/2023/20230925/images/TT_MD(1).jpg",
    description:
      "Bóng đá phong trào hay còn gọi là “bóng đá phủi” đang phát triển mạnh mẽ, từ thành thị đến nông thôn. Nhiều câu lạc bộ (CLB) được thành lập, sân bóng đá được đầu tư xây dựng khắp nơi, các giải đấu được tổ chức thường xuyên… góp phần phát triển phong trào luyện tập thể dục - thể thao (TDTT) ở các địa phương.",
    url: "https://baoangiang.com.vn/soi-noi-phong-trao-bong-da-phui--a375479.html",
  },
  {
    id: 3,
    image:
      "https://cdn.tuoitre.vn/471584752817336320/2023/9/22/cong-doan-nghe-an-16953480380661590503888.png",
    description:
      "Giải vô địch bóng đá công nhân toàn quốc 2023: Công nhân Nghệ An mong ngày ra sân. Lần đầu dự giải bóng đá dành cho công nhân có quy mô toàn quốc, đội bóng Công đoàn Nghệ An đặt mục tiêu thi đấu với quyết tâm cao nhất và xem mỗi trận đấu như một trận chung kết.",
    url: "https://tuoitre.vn/giai-vo-dich-bong-da-cong-nhan-toan-quoc-2023-cong-nhan-nghe-an-mong-ngay-ra-san-2023092209064613.htm",
  },
  {
    id: 4,
    image:
      "https://cdnimg.vietnamplus.vn/uploaded/ivpycivo/2023_07_07/ttxvn_bong_da.jpg",
    description:
      "World Cup Nữ 2023: Các Sân Vận động Đội tuyển Nữ Việt Nam thi đấu. Tại Vòng Chung kết World Cup Nữ 2023, Sân Vận động Waitako là nơi tổ chức 5 trận đấu vòng bảng, trong đó có trận đấu giữa Đội tuyển Nữ Việt Nam và Đội tuyển Nữ Bồ Đào Nha vào ngày 27/7.",
    url: "https://www.vietnamplus.vn/world-cup-nu-2023-cac-san-van-dong-doi-tuyen-nu-viet-nam-thi-dau/873622.vnp",
  },
];
const HomePage = () => {
  return (
    <div className="container home-page">
      <div className="home-page-left">
        <div className="home-page-left-items">
          <img src="../../../public/image/datsanIcon.png" alt="" />
          <h1 className="text-center">ĐẶT SÂN</h1>
        </div>
        <div className="home-page-left-items">
          <img src="../../../public/image/ketnoiIcon.png" alt="" />
          <h1 className="text-center">KẾT NỐI</h1>
        </div>
        <div className="home-page-left-items">
          <img src="../../../public/image/forumIcon.png" alt="" />
          <h1 className="text-center">FORUM</h1>
        </div>
      </div>
      <div className="home-page-right">
        <div className="news">
          <h1 className="news-title">TIN TỨC NHANH</h1>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {itemNews.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div
                    className="news-slider"
                    onClick={() => {
                      window.location.href = item.url;
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      width={350}
                      height={350}
                      className="mx-auto rounded-2xl"
                    />
                    <Paragraph
                      className="pt-3 mx-auto"
                      ellipsis={{
                        rows: 4,
                        expandable: true,
                        symbol: "more",
                      }}
                      style={{ width: 350 }}
                    >
                      {item.description}
                    </Paragraph>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
