import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, Heart, Search, Filter } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedSegment, setSelectedSegment] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const vehicles = [
    {
      id: 1,
      brand: "Porsche",
      model: "911 Carrera S",
      year: "2024",
      price: "8.5 tỷ VND",
      priceValue: 8500000000,
      segment: "Sports Car",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      features: ["3.0L Twin-Turbo", "450 HP", "0-100km/h: 3.5s"],
      badge: "Mới nhất",
      colors: ["Đen", "Trắng", "Đỏ", "Xanh"],
    },
    {
      id: 2,
      brand: "Mercedes",
      model: "S-Class S580",
      year: "2024",
      price: "6.8 tỷ VND",
      priceValue: 6800000000,
      segment: "Luxury Sedan",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["4.0L V8 Biturbo", "496 HP", "Nội thất siêu sang"],
      badge: "Bán chạy",
      colors: ["Đen", "Trắng", "Bạc", "Xám"],
    },
    {
      id: 3,
      brand: "Porsche",
      model: "Cayenne Turbo",
      year: "2024",
      price: "7.2 tỷ VND",
      priceValue: 7200000000,
      segment: "Luxury SUV",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["4.0L V8 Twin-Turbo", "541 HP", "SUV thể thao"],
      badge: "Đặc biệt",
      colors: ["Đen", "Trắng", "Đỏ", "Xanh", "Bạc"],
    },
    {
      id: 4,
      brand: "Mercedes",
      model: "G-Class G63 AMG",
      year: "2024",
      price: "9.5 tỷ VND",
      priceValue: 9500000000,
      segment: "Luxury SUV",
      image:
        "https://images.unsplash.com/photo-1606016159991-f4d7c8d6c0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["4.0L V8 Biturbo", "585 HP", "Offroad hạng sang"],
      badge: "Độc quyền",
      colors: ["Đen", "Trắng", "Xám"],
    },
    {
      id: 5,
      brand: "Porsche",
      model: "Panamera Turbo S",
      year: "2024",
      price: "10.2 tỷ VND",
      priceValue: 10200000000,
      segment: "Luxury Sedan",
      image:
        "https://images.unsplash.com/photo-1606608848180-4d3f03249c1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["4.0L V8 Twin-Turbo", "630 HP", "Hybrid Technology"],
      badge: "Cao cấp nhất",
      colors: ["Đen", "Trắng", "Bạc", "Xanh", "Đỏ"],
    },
    {
      id: 6,
      brand: "Mercedes",
      model: "E-Class E300 AMG",
      year: "2024",
      price: "3.2 tỷ VND",
      priceValue: 3200000000,
      segment: "Executive Sedan",
      image:
        "https://images.unsplash.com/photo-1606016159991-f4d7c8d6c0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      features: ["2.0L Turbo", "258 HP", "Công nghệ thông minh"],
      badge: "Phổ biến",
      colors: ["Đen", "Trắng", "Bạc", "Xanh"],
    },
  ];

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand =
      selectedBrand === "all" || vehicle.brand === selectedBrand;
    const matchesSegment =
      selectedSegment === "all" || vehicle.segment === selectedSegment;
    const matchesPrice =
      selectedPriceRange === "all" ||
      (selectedPriceRange === "under-5" && vehicle.priceValue < 5000000000) ||
      (selectedPriceRange === "5-8" &&
        vehicle.priceValue >= 5000000000 &&
        vehicle.priceValue <= 8000000000) ||
      (selectedPriceRange === "above-8" && vehicle.priceValue > 8000000000);

    return matchesSearch && matchesBrand && matchesSegment && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Header Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 font-inter">
                Bộ sưu tập xe cao cấp
              </Badge>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Khám phá
                <span className="block text-luxury-gold mt-3">
                  Xe cao cấp hàng đầu
                </span>
              </h1>
              <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                Tuyển chọn những chiếc xe cao cấp từ Porsche và Mercedes, mang
                đến trải nghiệm lái xe đỉnh cao và phong cách sống đẳng cấp.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Tìm kiếm xe theo tên hoặc hãng..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 font-inter"
                    />
                  </div>
                </div>

                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger className="font-inter">
                    <SelectValue placeholder="Chọn hãng xe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả hãng</SelectItem>
                    <SelectItem value="Porsche">Porsche</SelectItem>
                    <SelectItem value="Mercedes">Mercedes</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={selectedSegment}
                  onValueChange={setSelectedSegment}
                >
                  <SelectTrigger className="font-inter">
                    <SelectValue placeholder="Phân khúc" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả phân khúc</SelectItem>
                    <SelectItem value="Sports Car">Xe thể thao</SelectItem>
                    <SelectItem value="Luxury Sedan">
                      Sedan hạng sang
                    </SelectItem>
                    <SelectItem value="Luxury SUV">SUV hạng sang</SelectItem>
                    <SelectItem value="Executive Sedan">
                      Sedan điều hành
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={selectedPriceRange}
                  onValueChange={setSelectedPriceRange}
                >
                  <SelectTrigger className="font-inter">
                    <SelectValue placeholder="Mức giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả mức giá</SelectItem>
                    <SelectItem value="under-5">Dưới 5 tỷ</SelectItem>
                    <SelectItem value="5-8">5 - 8 tỷ</SelectItem>
                    <SelectItem value="above-8">Trên 8 tỷ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <p className="font-inter text-gray-600">
                  Hiển thị {filteredVehicles.length} xe từ tổng số{" "}
                  {vehicles.length} xe
                </p>
                <Button variant="outline" className="font-inter">
                  <Filter className="w-4 h-4 mr-2" />
                  Lọc nâng cao
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <Card
                  key={vehicle.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <Badge className="absolute top-4 left-4 bg-luxury-gold text-black font-inter">
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
                  </div>

                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-gray-900">
                          {vehicle.brand} {vehicle.model}
                        </h3>
                        <p className="font-inter text-sm text-gray-500">
                          {vehicle.year} • {vehicle.segment}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-inter text-lg font-bold text-luxury-gold">
                          {vehicle.price}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {vehicle.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {vehicle.colors.map((color, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 px-2 py-1 rounded font-inter"
                        >
                          {color}
                        </span>
                      ))}
                    </div>

                    <Link to={`/product/${vehicle.id}`}>
                      <Button className="w-full font-inter group">
                        Xem chi tiết
                        <Eye className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredVehicles.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                  Không tìm thấy xe phù hợp
                </h3>
                <p className="font-inter text-gray-600 mb-8">
                  Hãy thử điều chỉnh bộ lọc hoặc liên hệ với chúng tôi để được
                  tư vấn.
                </p>
                <Link to="/contact">
                  <Button className="font-inter">Liên hệ tư vấn</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
