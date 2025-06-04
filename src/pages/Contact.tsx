import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Hotline 24/7",
      details: ["+84 901 234 567", "+84 028 3942 5678"],
      description: "Hỗ trợ tư vấn và khẩn cấp mọi lúc",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@thatnguyen.vn", "support@thatnguyen.vn"],
      description: "Gửi yêu cầu tư vấn chi tiết",
    },
    {
      icon: MapPin,
      title: "Showroom chính",
      details: ["123 Đường Nguyễn Huệ", "Quận 1, TP. Hồ Chí Minh"],
      description: "Tham quan và test drive xe",
    },
    {
      icon: MessageCircle,
      title: "Chat trực tuyến",
      details: ["Zalo: 0901234567", "Messenger: Thật Nguyễn"],
      description: "Tư vấn nhanh qua tin nhắn",
    },
  ];

  const workingHours = [
    { day: "Thứ 2 - Thứ 6", time: "8:00 - 18:00" },
    { day: "Thứ 7", time: "8:00 - 17:00" },
    { day: "Chủ nhật", time: "9:00 - 16:00" },
    { day: "Lễ/Tết", time: "Theo thông báo" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 font-inter">
              Liên hệ với chúng tôi
            </Badge>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sẵn sàng
              <span className="block text-luxury-gold mt-3">
                Hỗ trợ bạn 24/7
              </span>
            </h1>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto ">
              Đội ngũ chuyên gia của Thật Nguyễn luôn sẵn sàng tư vấn và hỗ trợ
              bạn tìm được chiếc xe cao cấp hoàn hảo nhất.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <info.icon className="w-8 h-8 text-luxury-gold" />
                    </div>
                    <h3 className="font-inter text-lg font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className="font-inter text-gray-700 font-medium"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="font-inter text-sm text-gray-600">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
                  Gửi yêu cầu tư vấn
                </h2>
                <p className="font-inter text-gray-600 mb-8">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ với bạn trong
                  vòng 30 phút.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Họ và tên *"
                      className="font-inter"
                      required
                    />
                    <Input
                      placeholder="Số điện thoại *"
                      className="font-inter"
                      required
                    />
                  </div>

                  <Input
                    placeholder="Email"
                    type="email"
                    className="font-inter"
                  />

                  <select className="w-full p-3 border border-gray-300 rounded-md font-inter focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                    <option>Mục đích liên hệ</option>
                    <option>Tư vấn mua xe Porsche</option>
                    <option>Tư vấn mua xe Mercedes</option>
                    <option>Hỗ trợ tài chính</option>
                    <option>Bảo hiểm xe</option>
                    <option>Dịch vụ hậu mãi</option>
                    <option>Khác</option>
                  </select>

                  <select className="w-full p-3 border border-gray-300 rounded-md font-inter focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                    <option>Ngân sách dự kiến</option>
                    <option>Dưới 3 tỷ VND</option>
                    <option>3 - 5 tỷ VND</option>
                    <option>5 - 8 tỷ VND</option>
                    <option>8 - 12 tỷ VND</option>
                    <option>Trên 12 tỷ VND</option>
                  </select>

                  <Textarea
                    placeholder="Mô tả chi tiết nhu cầu của bạn (mẫu xe quan tâm, màu sắc, thời gian dự kiến mua...)..."
                    className="font-inter"
                    rows={5}
                  />

                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="rounded"
                    />
                    <label htmlFor="newsletter" className="font-inter">
                      Đăng ký nhận thông tin xe mới và ưu đãi đặc biệt
                    </label>
                  </div>

                  <Button
                    size="lg"
                    className="w-full font-inter text-lg py-6 bg-luxury-gold hover:bg-luxury-gold/90 text-black"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Gửi yêu cầu tư vấn
                  </Button>

                  <div className="text-center pt-4">
                    <p className="font-inter text-sm text-gray-600 mb-4">
                      Hoặc liên hệ trực tiếp qua:
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-inter"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Gọi ngay
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-inter"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat Zalo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-inter"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Đặt lịch hẹn
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Business Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                    Giờ làm việc
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Clock className="w-6 h-6 text-luxury-gold mr-3" />
                        <span className="font-inter font-semibold text-gray-900">
                          Lịch làm việc showroom
                        </span>
                      </div>
                      <div className="space-y-3">
                        {workingHours.map((schedule, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center"
                          >
                            <span className="font-inter text-gray-700">
                              {schedule.day}
                            </span>
                            <span className="font-inter font-medium text-gray-900">
                              {schedule.time}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-luxury-gold/10 rounded-lg">
                        <p className="font-inter text-sm text-gray-700">
                          <strong>Lưu ý:</strong> Tư vấn trực tuyến và hỗ trợ
                          khẩn cấp 24/7. Có thể đặt lịch hẹn ngoài giờ theo yêu
                          cầu.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                    Địa chỉ showroom
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <MapPin className="w-6 h-6 text-luxury-gold mr-3 mt-1" />
                        <div>
                          <h4 className="font-inter font-semibold text-gray-900 mb-2">
                            Showroom Thật Nguyễn - Quận 1
                          </h4>
                          <p className="font-inter text-gray-700 mb-4">
                            123 Đường Nguyễn Huệ, Phường Bến Nghé,
                            <br />
                            Quận 1, Thành phố Hồ Chí Minh
                          </p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Diện tích:</span>
                              <span className="font-medium ml-2">1,200m²</span>
                            </div>
                            <div>
                              <span className="text-gray-600">
                                Xe trưng bày:
                              </span>
                              <span className="font-medium ml-2">15+ mẫu</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Bãi đỗ xe:</span>
                              <span className="font-medium ml-2">30 chỗ</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Test drive:</span>
                              <span className="font-medium ml-2">Có sẵn</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full font-inter">
                        <MapPin className="w-4 h-4 mr-2" />
                        Xem trên Google Maps
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                    Kết nối với chúng tôi
                  </h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex space-x-4 mb-6">
                        <a
                          href="#"
                          className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                        >
                          <Facebook className="w-6 h-6 text-white" />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                        >
                          <Instagram className="w-6 h-6 text-white" />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                        >
                          <MessageCircle className="w-6 h-6 text-white" />
                        </a>
                      </div>
                      <p className="font-inter text-sm text-gray-600">
                        Theo dõi chúng tôi để cập nhật thông tin xe mới, ưu đãi
                        đặc biệt và sự kiện showroom.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vị trí showroom
              </h2>
              <p className="font-inter text-xl text-gray-600">
                Tọa lạc tại trung tâm Quận 1, thuận tiện di chuyển và đậu xe
              </p>
            </div>

            <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="font-inter text-gray-600">
                  Google Maps sẽ được tích hợp tại đây
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
