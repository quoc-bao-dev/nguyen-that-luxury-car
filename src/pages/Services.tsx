
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  CreditCard, 
  Shield, 
  FileText, 
  Wrench, 
  UserCheck,
  Phone,
  Mail,
  Clock,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Tư vấn mua xe chuyên nghiệp",
      description: "Dịch vụ tư vấn 1:1 giúp bạn chọn được chiếc xe phù hợp nhất với nhu cầu, sở thích và ngân sách.",
      features: [
        "Phân tích nhu cầu sử dụng chi tiết",
        "So sánh các dòng xe cùng phân khúc", 
        "Tư vấn màu sắc và tùy chọn phụ kiện",
        "Lên lịch test drive tại showroom",
        "Tư vấn thời điểm mua xe tối ưu"
      ],
      process: [
        "Liên hệ đặt lịch tư vấn",
        "Gặp gỡ và trao đổi nhu cầu",
        "Đề xuất các lựa chọn phù hợp",
        "Test drive và trải nghiệm",
        "Hỗ trợ quyết định cuối cùng"
      ],
      price: "Miễn phí",
      duration: "60-90 phút"
    },
    {
      icon: CreditCard,
      title: "Hỗ trợ tài chính & vay vốn",
      description: "Kết nối với các ngân hàng uy tín để có được gói vay với lãi suất ưu đãi và thủ tục đơn giản nhất.",
      features: [
        "Lãi suất cạnh tranh từ 6.5%/năm",
        "Vay tối đa 80% giá trị xe",
        "Thời hạn vay linh hoạt 3-7 năm",
        "Thủ tục nhanh chóng 24-48h",
        "Hỗ trợ chuẩn bị hồ sơ đầy đủ"
      ],
      process: [
        "Tư vấn phương án vay phù hợp",
        "Chuẩn bị hồ sơ vay vốn",
        "Nộp hồ sơ tại ngân hàng",
        "Thẩm định và phê duyệt",
        "Giải ngân và nhận xe"
      ],
      price: "Miễn phí tư vấn",
      duration: "2-3 ngày làm việc"
    },
    {
      icon: Shield,
      title: "Bảo hiểm xe toàn diện",
      description: "Dịch vụ bảo hiểm toàn diện cho xe cao cấp với mức bảo hiểm phù hợp và quy trình bồi thường nhanh chóng.",
      features: [
        "Bảo hiểm vật chất xe cao cấp",
        "Bảo hiểm trách nhiệm dân sự",
        "Bảo hiểm người ngồi trên xe",
        "Hỗ trợ 24/7 khi có sự cố",
        "Quy trình bồi thường nhanh chóng"
      ],
      process: [
        "Tư vấn gói bảo hiểm phù hợp",
        "Báo giá và so sánh các gói",
        "Thực hiện thủ tục mua bảo hiểm",
        "Nhận giấy chứng nhận bảo hiểm",
        "Hỗ trợ khi có yêu cầu bồi thường"
      ],
      price: "Từ 1.5% giá trị xe",
      duration: "30 phút - 1 giờ"
    },
    {
      icon: FileText,
      title: "Đăng ký biển số & thủ tục",
      description: "Hỗ trợ hoàn tất toàn bộ thủ tục pháp lý và đăng ký biển số cho xe mới một cách nhanh chóng.",
      features: [
        "Thủ tục đăng ký xe trọn gói",
        "Đăng ký biển số thường/VIP",
        "Làm giấy phép lái xe quốc tế",
        "Chuyển đổi giấy tờ xe",
        "Tư vấn thủ tục pháp lý"
      ],
      process: [
        "Chuẩn bị hồ sơ đầy đủ",
        "Nộp hồ sơ tại cục đăng kiểm",
        "Kiểm định an toàn kỹ thuật",
        "Đăng ký và cấp biển số",
        "Bàn giao xe và giấy tờ"
      ],
      price: "Từ 5 triệu VND",
      duration: "1-2 ngày làm việc"
    },
    {
      icon: Wrench,
      title: "Bảo dưỡng & dịch vụ hậu mãi",
      description: "Chăm sóc và bảo dưỡng xe định kỳ tại các trung tâm ủy quyền chính hãng với kỹ thuật viên chuyên nghiệp.",
      features: [
        "Bảo dưỡng định kỳ theo lịch",
        "Sử dụng phụ tùng chính hãng",
        "Kỹ thuật viên được đào tạo bài bản",
        "Bảo hành dịch vụ toàn diện",
        "Dịch vụ đưa đón xe tận nơi"
      ],
      process: [
        "Đặt lịch bảo dưỡng trước",
        "Kiểm tra tổng thể xe",
        "Thực hiện bảo dưỡng theo tiêu chuẩn",
        "Test drive sau bảo dưỡng",
        "Bàn giao xe và báo cáo"
      ],
      price: "Theo từng loại dịch vụ",
      duration: "2-4 giờ"
    },
    {
      icon: MessageCircle,
      title: "Hỗ trợ khách hàng 24/7",
      description: "Hỗ trợ khách hàng 24/7 qua nhiều kênh để giải đáp mọi thắc mắc và hỗ trợ khẩn cấp.",
      features: [
        "Hotline hỗ trợ 24/7",
        "Chat trực tuyến qua website",
        "Tư vấn qua video call",
        "Hỗ trợ khẩn cấp trên đường",
        "Cộng đồng khách hàng VIP"
      ],
      process: [
        "Liên hệ qua kênh thuận tiện",
        "Mô tả vấn đề cần hỗ trợ",
        "Nhận tư vấn từ chuyên gia",
        "Thực hiện giải pháp đề xuất",
        "Theo dõi và đánh giá dịch vụ"
      ],
      price: "Miễn phí",
      duration: "Tức thì - 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 font-inter border-white text-white">
              Dịch vụ chuyên nghiệp
            </Badge>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Trải nghiệm dịch vụ
              <span className="block text-luxury-gold">Đẳng cấp & Toàn diện</span>
            </h1>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
              Từ tư vấn mua xe đến dịch vụ hậu mãi, chúng tôi đồng hành cùng bạn 
              trong suốt hành trình sở hữu và trải nghiệm xe cao cấp.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-luxury-gold/20 transition-colors">
                        <service.icon className="w-8 h-8 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </div>
                          <div className="font-medium text-luxury-gold">
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-inter font-semibold text-gray-900 mb-3">
                          Tính năng nổi bật
                        </h4>
                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-luxury-gold mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-inter font-semibold text-gray-900 mb-3">
                          Quy trình thực hiện
                        </h4>
                        <div className="space-y-2">
                          {service.process.map((step, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-600">
                              <div className="w-5 h-5 rounded-full bg-luxury-gold/20 text-luxury-gold flex items-center justify-center text-xs font-medium mr-2 flex-shrink-0">
                                {i + 1}
                              </div>
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button className="flex-1 font-inter bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                        <Phone className="w-4 h-4 mr-2" />
                        Đặt lịch ngay
                      </Button>
                      <Button variant="outline" className="flex-1 font-inter">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Tư vấn trực tuyến
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Đặt lịch tư vấn dịch vụ
                </h2>
                <p className="font-inter text-xl text-gray-600">
                  Điền thông tin bên dưới để được tư vấn chi tiết về dịch vụ phù hợp nhất
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-inter text-lg font-semibold text-gray-900 mb-6">
                        Thông tin liên hệ
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-luxury-gold" />
                          <div>
                            <div className="font-inter font-medium">Hotline 24/7</div>
                            <div className="text-gray-600">+84 901 234 567</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-luxury-gold" />
                          <div>
                            <div className="font-inter font-medium">Email</div>
                            <div className="text-gray-600">services@thatnguyen.vn</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-5 h-5 text-luxury-gold" />
                          <div>
                            <div className="font-inter font-medium">Chat trực tuyến</div>
                            <div className="text-gray-600">Zalo: 0901234567</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-inter text-lg font-semibold text-gray-900 mb-6">
                        Đặt lịch tư vấn
                      </h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="Họ và tên *" className="font-inter" />
                          <Input placeholder="Số điện thoại *" className="font-inter" />
                        </div>
                        <Input placeholder="Email" className="font-inter" />
                        <select className="w-full p-3 border border-gray-300 rounded-md font-inter">
                          <option>Chọn dịch vụ quan tâm</option>
                          <option>Tư vấn mua xe</option>
                          <option>Hỗ trợ tài chính</option>
                          <option>Bảo hiểm xe</option>
                          <option>Đăng ký biển số</option>
                          <option>Bảo dưỡng xe</option>
                          <option>Hỗ trợ khẩn cấp</option>
                        </select>
                        <Textarea 
                          placeholder="Mô tả chi tiết nhu cầu của bạn..." 
                          className="font-inter"
                          rows={4}
                        />
                        <Button className="w-full font-inter bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                          Gửi yêu cầu tư vấn
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
