
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Minh Tuấn",
      position: "CEO TechCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      content: "Anh Thật đã tư vấn tôi chọn được chiếc Porsche 911 hoàn hảo. Sự hiểu biết sâu sắc và tận tâm của anh thực sự ấn tượng. Dịch vụ hậu mãi cũng rất chuyên nghiệp.",
      rating: 5,
      car: "Porsche 911 Carrera S"
    },
    {
      id: 2,
      name: "Lê Thị Hương",
      position: "Giám đốc Marketing",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      content: "Tôi rất hài lòng với chiếc Mercedes S-Class đã mua qua anh Thật. Từ việc tư vấn cho đến hỗ trợ thủ tục, tất cả đều được thực hiện một cách chuyên nghiệp và tận tình.",
      rating: 5,
      car: "Mercedes S-Class S580"
    },
    {
      id: 3,
      name: "Trần Đức Minh",
      position: "Doanh nhân",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      content: "Dịch vụ tư vấn của anh Thật vượt xa mong đợi của tôi. Không chỉ giúp tôi tìm được chiếc xe ưng ý mà còn hỗ trợ cả về tài chính và bảo hiểm. Thực sự đáng tin cậy!",
      rating: 5,
      car: "Porsche Cayenne Turbo"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-6 font-inter">
            Khách hàng nói gì
          </Badge>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Đánh giá từ
            <span className="block text-luxury-gold">Khách hàng thân thiết</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Hàng nghìn khách hàng đã tin tưởng và có những trải nghiệm tuyệt vời 
            khi mua xe cao cấp thông qua dịch vụ của chúng tôi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-gradient-to-br from-white to-gray-50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-luxury-gold/30 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                    ))}
                  </div>
                </div>

                <p className="font-inter text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="font-inter text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                      <p className="font-inter text-xs text-luxury-gold font-medium mt-1">
                        Đã mua: {testimonial.car}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-playfair text-3xl font-bold text-luxury-gold mb-2">
                  98%
                </div>
                <div className="font-inter text-sm text-gray-600">
                  Khách hàng hài lòng
                </div>
              </div>
              <div>
                <div className="font-playfair text-3xl font-bold text-luxury-gold mb-2">
                  4.9/5
                </div>
                <div className="font-inter text-sm text-gray-600">
                  Đánh giá trung bình
                </div>
              </div>
              <div>
                <div className="font-playfair text-3xl font-bold text-luxury-gold mb-2">
                  1000+
                </div>
                <div className="font-inter text-sm text-gray-600">
                  Đánh giá tích cực
                </div>
              </div>
              <div>
                <div className="font-playfair text-3xl font-bold text-luxury-gold mb-2">
                  85%
                </div>
                <div className="font-inter text-sm text-gray-600">
                  Khách giới thiệu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
