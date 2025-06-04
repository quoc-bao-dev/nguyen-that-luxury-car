
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, ArrowRight } from "lucide-react";

const FeaturedVehicles = () => {
  const vehicles = [
    {
      id: 1,
      brand: "Porsche",
      model: "911 Carrera S",
      year: "2024",
      price: "8.5 tỷ VND",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      features: ["3.0L Twin-Turbo", "450 HP", "0-100km/h: 3.5s"],
      badge: "Mới nhất"
    },
    {
      id: 2,
      brand: "Mercedes",
      model: "S-Class S580",
      year: "2024",
      price: "6.8 tỷ VND",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["4.0L V8 Biturbo", "496 HP", "Nội thất siêu sang"],
      badge: "Bán chạy"
    },
    {
      id: 3,
      brand: "Porsche",
      model: "Cayenne Turbo",
      year: "2024",
      price: "7.2 tỷ VND",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["4.0L V8 Twin-Turbo", "541 HP", "SUV thể thao"],
      badge: "Đặc biệt"
    }
  ];

  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-6 font-inter">
            Xe cao cấp
          </Badge>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bộ sưu tập
            <span className="block text-luxury-gold">Xe nổi bật</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những chiếc xe cao cấp được tuyển chọn kỹ lưỡng, 
            mang đến trải nghiệm lái xe đỉnh cao và phong cách sống đẳng cấp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <Badge 
                  className="absolute top-4 left-4 bg-luxury-gold text-black font-inter"
                >
                  {vehicle.badge}
                </Badge>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-gray-900">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <p className="font-inter text-sm text-gray-500">{vehicle.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-inter text-lg font-bold text-luxury-gold">
                      {vehicle.price}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full font-inter group">
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-inter text-lg px-8 py-6"
          >
            Xem tất cả xe cao cấp
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
