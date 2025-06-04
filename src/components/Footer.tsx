
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Send
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Xe cao cấp', href: '#vehicles' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Liên hệ', href: '#contact' }
  ];

  const services = [
    'Tư vấn mua xe',
    'Hỗ trợ tài chính',
    'Bảo hiểm xe',
    'Đăng ký biển số',
    'Dịch vụ hậu mãi',
    'Tư vấn 24/7'
  ];

  const carBrands = [
    'Porsche 911',
    'Porsche Cayenne',
    'Porsche Panamera',
    'Mercedes S-Class',
    'Mercedes E-Class',
    'Mercedes G-Class'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Đăng ký nhận thông tin xe mới nhất
            </h3>
            <p className="font-inter text-gray-400 mb-8">
              Cập nhật những mẫu xe cao cấp mới nhất, ưu đãi đặc biệt và tin tức thị trường ô tô.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Nhập email của bạn"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 font-inter"
              />
              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-black font-inter">
                <Send className="w-4 h-4 mr-2" />
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h2 className="font-playfair text-2xl font-bold mb-4">Thật Nguyễn</h2>
            <p className="font-inter text-gray-400 mb-6 leading-relaxed">
              Thương hiệu cá nhân chuyên tư vấn và phân phối xe cao cấp. 
              Mang đến trải nghiệm đẳng cấp và dịch vụ tận tâm cho khách hàng yêu xe.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="font-inter text-gray-300">+84 901 234 567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="font-inter text-gray-300">contact@thatnguyen.vn</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold" />
                <span className="font-inter text-gray-300">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-inter text-gray-400 hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-inter text-lg font-semibold mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-inter text-gray-400 hover:text-luxury-gold transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Models */}
          <div>
            <h3 className="font-inter text-lg font-semibold mb-6">Dòng xe nổi bật</h3>
            <ul className="space-y-3">
              {carBrands.map((car) => (
                <li key={car}>
                  <span className="font-inter text-gray-400 hover:text-luxury-gold transition-colors duration-300 cursor-pointer">
                    {car}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-inter text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Thật Nguyễn. Tất cả quyền được bảo lưu.
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-luxury-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-luxury-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-luxury-gold transition-colors duration-300"
                aria-label="Zalo"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
