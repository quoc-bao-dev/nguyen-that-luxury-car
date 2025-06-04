
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-luxury-gold fill-current mr-1" />
            ))}
            <span className="ml-2 text-sm font-inter">Đánh giá 5 sao từ khách hàng</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Khám phá
            <span className="block text-luxury-gold">Đẳng cấp xa xỉ</span>
          </h1>

          <p className="font-inter text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Trải nghiệm những chiếc xe cao cấp đỉnh cao cùng dịch vụ tư vấn chuyên nghiệp. 
            Porsche, Mercedes - Nơi ước mơ trở thành hiện thực.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="font-inter text-lg px-8 py-6 bg-luxury-gold hover:bg-luxury-gold/90 text-black">
              Khám phá bộ sưu tập
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-inter text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black"
            >
              Đặt lịch tư vấn
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-in">
              <div className="font-playfair text-3xl md:text-4xl font-bold text-luxury-gold mb-2">50+</div>
              <div className="font-inter text-gray-300">Xe cao cấp</div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-luxury-gold mb-2">1000+</div>
              <div className="font-inter text-gray-300">Khách hàng hài lòng</div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-luxury-gold mb-2">5+</div>
              <div className="font-inter text-gray-300">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
