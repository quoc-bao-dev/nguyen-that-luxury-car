
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Award, Users, Car, Trophy } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Chuyên gia hàng đầu",
      description: "5+ năm kinh nghiệm trong ngành xe cao cấp"
    },
    {
      icon: Users,
      title: "Tư vấn cá nhân hóa",
      description: "Dịch vụ tận tâm, hiểu nhu cầu từng khách hàng"
    },
    {
      icon: Car,
      title: "Bộ sưu tập đa dạng",
      description: "50+ mẫu xe cao cấp từ Porsche đến Mercedes"
    },
    {
      icon: Trophy,
      title: "Uy tín hàng đầu",
      description: "1000+ khách hàng tin tưởng và giới thiệu"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 font-inter">
              Về Thật Nguyễn
            </Badge>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Đam mê tạo nên
              <span className="block text-luxury-gold">Trải nghiệm đẳng cấp</span>
            </h2>

            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Với niềm đam mê và hiểu biết sâu sắc về ngành công nghiệp ô tô cao cấp, 
              tôi đã dành 5 năm để xây dựng thương hiệu cá nhân với sứ mệnh mang đến 
              những trải nghiệm tuyệt vời nhất cho khách hàng yêu xe.
            </p>

            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Không chỉ đơn thuần là việc bán xe, tôi tin rằng mỗi chiếc xe cao cấp 
              đều mang trong mình một câu chuyện riêng, và công việc của tôi là giúp 
              khách hàng tìm được chiếc xe phù hợp nhất với phong cách và cá tính của họ.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Thật Nguyễn - Chuyên gia xe cao cấp"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-luxury-gold mb-1">
                  1000+
                </div>
                <div className="font-inter text-sm text-gray-600">
                  Khách hàng<br />hài lòng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
