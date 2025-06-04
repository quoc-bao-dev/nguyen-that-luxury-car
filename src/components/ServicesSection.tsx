import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CreditCard,
  FileText,
  MessageCircle,
  Shield,
  UserCheck,
  Wrench,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: UserCheck,
    title: "Tư vấn mua xe",
    description:
      "Tư vấn chuyên sâu giúp bạn chọn được chiếc xe phù hợp nhất với nhu cầu và ngân sách.",
    features: [
      "Phân tích nhu cầu cá nhân",
      "So sánh các dòng xe",
      "Tư vấn 1:1 miễn phí",
    ],
  },
  {
    icon: CreditCard,
    title: "Hỗ trợ tài chính",
    description:
      "Kết nối với các ngân hàng uy tín để có được gói vay với lãi suất ưu đãi nhất.",
    features: [
      "Lãi suất cạnh tranh",
      "Thủ tục nhanh chóng",
      "Tư vấn phương án vay",
    ],
  },
  {
    icon: Shield,
    title: "Bảo hiểm xe",
    description:
      "Dịch vụ bảo hiểm toàn diện cho xe cao cấp với mức bảo hiểm phù hợp.",
    features: [
      "Bảo hiểm vật chất",
      "Bảo hiểm trách nhiệm",
      "Quy trình bồi thường nhanh",
    ],
  },
  {
    icon: FileText,
    title: "Đăng ký biển số",
    description:
      "Hỗ trợ hoàn tất toàn bộ thủ tục pháp lý và đăng ký biển số cho xe mới.",
    features: ["Thủ tục trọn gói", "Tiết kiệm thời gian", "Đảm bảo chính xác"],
  },
  {
    icon: Wrench,
    title: "Dịch vụ hậu mãi",
    description:
      "Chăm sóc và bảo dưỡng xe định kỳ tại các trung tâm ủy quyền chính hãng.",
    features: [
      "Bảo dưỡng định kỳ",
      "Phụ tùng chính hãng",
      "Kỹ thuật viên chuyên nghiệp",
    ],
  },
  {
    icon: MessageCircle,
    title: "Tư vấn 24/7",
    description:
      "Hỗ trợ khách hàng 24/7 qua nhiều kênh để giải đáp mọi thắc mắc về xe.",
    features: ["Hotline 24/7", "Chat trực tuyến", "Tư vấn qua video call"],
  },
];

const ServicesSection = () => {
  const nav = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-6 font-inter">
            Dịch vụ của chúng tôi
          </Badge>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trải nghiệm dịch vụ
            <span className="block text-luxury-gold mt-3">
              Toàn diện & Tận tâm
            </span>
          </h2>

          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Từ tư vấn mua xe đến dịch vụ hậu mãi, chúng tôi đồng hành cùng bạn
            trong suốt hành trình sở hữu và trải nghiệm xe cao cấp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-luxury-gold/20 transition-colors">
                    <service.icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full font-inter group-hover:bg-luxury-gold group-hover:text-black group-hover:border-luxury-gold transition-all"
                  onClick={() => nav("/services")}
                >
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            className="font-inter text-lg px-8 py-6 bg-luxury-gold hover:bg-luxury-gold/90 text-black"
          >
            Đăng ký tư vấn miễn phí
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
