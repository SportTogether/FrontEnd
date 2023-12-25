import React from "react";
import { Breadcrumb, Card, Col, Row } from "antd";
const { Meta } = Card;
const carouselNews = [
  {
    id: 1,
    nameNews: "Barcelona được phép tham dự Champions League 2023/2024",
    imageNews:
      "https://image.sggp.org.vn/w680/Uploaded/2023/evofzyresfj/2023_07_28/agencia-efe-multimedia-55011616126multimediaphotos55011616126005file-2028.jpg.webp",
    descriptionNews:
      "Theo thông tin được Mundo Deportivo đăng tải, FC Barcelona tạm thời được phép tham dự Champions League 2023-2024. Quyết định được đưa ra chính thức vào thứ Năm.",
    urlNews:
      "https://thethao.sggp.org.vn/barcelona-duoc-phep-tham-du-champions-league-20232024-post699289.html",
  },
  {
    id: 2,
    nameNews: "Messi lập hat-trick, vượt cột mốc 100 bàn cho Argentina",
    imageNews:
      "https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/3/29/messi-16-16800543792582099994412.jpg",
    descriptionNews:
      "Lionel Messi lại tỏa sáng với cú hat-trick giúp Argentina đè bẹp Curacao 7-0 sáng 29-3. Thành tích này giúp Messi vượt qua cột mốc 100 bàn thắng cho Argentina.",
    urlNews:
      "https://tuoitre.vn/messi-lap-hat-trick-vuot-cot-moc-100-ban-cho-argentina-20230329084907557.htm",
  },
  {
    id: 3,
    nameNews: "Cristiano Ronaldo lập hat-trick giúp Al Nassr thắng đậm 5-0",
    imageNews:
      "https://cdnphoto.dantri.com.vn/DLTn2Z_eFsfzlRldKTwa6icGfqM=/thumb_w/1020/2023/08/26/ronaldo-328-1693010755545.jpg",
    descriptionNews:
      "Tiền đạo Cristiano Ronaldo đã tỏa sáng rực rỡ với cú hat-trick bàn thắng cùng một pha kiến tạo để giúp đội nhà Al Nassr thắng đậm Al Fateh với tỷ số 5-0 ở vòng ba Saudi Pro League.",
    urlNews:
      "https://dantri.com.vn/the-thao/cristiano-ronaldo-lap-hat-trick-giup-al-nassr-thang-dam-5-0-20230826075202191.htm",
  },
  {
    id: 4,
    nameNews: "Son Heung-min tỏa sáng giúp Tottenham vượt Man City",
    imageNews:
      "https://photo.znews.vn/w960/Uploaded/bpivpawv/2023_12_24/3477.jpg",
    descriptionNews:
      "Đội bóng thành London leo lên vị trí thứ 4 trên bảng xếp hạng Premier League sau chiến thắng 2-1 trước Everton ở vòng 18.",
    urlNews:
      "https://znews.vn/son-heung-min-toa-sang-giup-tottenham-vuot-man-city-post1450619.html",
  },
  {
    id: 5,
    nameNews: "Nadal khoe video tập luyện trước khi sang Australia",
    imageNews:
      "https://i1-thethao.vnecdn.net/2023/12/22/GBzRBSQXsAAHPhY-1703233137-3663-1703233223.jpg?w=&h=&q=100&dpr=1&fit=crop&s=xibr2kav1AFxrTtPFqDjJA",
    descriptionNews:
      "Tay vợt cựu số một thế giới Rafael Nadal đăng tải đoạn video tập cùng Emil Ruusuvuori tại Kuwait, đánh dấu bước chuẩn bị cuối cho mùa 2024.Đoạn video được Nadal đăng tải lên mạng xã hội X hôm qua.",
    urlNews:
      "https://vnexpress.net/nadal-khoe-video-tap-luyen-truoc-khi-sang-australia-4692218.html",
  },
  {
    id: 6,
    nameNews: "Kipchoge: 'Hai kỷ lục marathon của tôi sẽ được nhớ mãi'",
    imageNews:
      "https://i1-thethao.vnecdn.net/2023/12/25/20220925-1664100719-229-170346-5346-3121-1703464761.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=3iy6k9UGS_bICV633Dlm9Q",
    descriptionNews:
      "Theo huyền thoại Eliud Kipchoge, việc anh hai lần phá kỷ lục marathon thế giới đã truyền động lực cho những VĐV khác làm điều tương tự, gồm đồng hương Kelvin Kiptum.",
    urlNews:
      "https://vnexpress.net/kipchoge-hai-ky-luc-marathon-cua-toi-se-duoc-nho-mai-4692916.html",
  },
  // Add more news items as needed
];
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
      <h1 className="text-center text-green-700 font-bold text-5xl pt-5 pb-10">
        Tin Tức Thể Thao
      </h1>
      <div className="container">
        <Row gutter={[20, 30]}>
          {carouselNews.map((item) => {
            return (
              <Col span={8} key={item.id}>
                <a href={item.urlNews} className="" target="_blank">
                  <Card
                    hoverable
                    style={{
                      width: 400,
                      margin: "0 auto",
                      height: 400,
                    }}
                    cover={
                      <img
                        alt="example"
                        src={item.imageNews}
                        className="h-[250px]"
                      />
                    }
                  >
                    <Meta
                      title={item.nameNews}
                      description={item.descriptionNews}
                    />
                  </Card>
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default NewsPage;
