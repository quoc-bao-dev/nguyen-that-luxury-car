import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Phone,
  Share2,
  Star,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Mock data - trong thực tế sẽ fetch từ API
const vehicle = {
  id: 1,
  brand: "Porsche",
  model: "911 Carrera S",
  year: "2024",
  price: "8.5 tỷ VND",
  originalPrice: "8.8 tỷ VND",
  segment: "Sports Car",
  badge: "Mới nhất",
  images: [
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ],
  colors: ["Đen Jet", "Trắng Carrara", "Đỏ Carmine", "Xanh Racing"],
  description:
    "Porsche 911 Carrera S 2024 là biểu tượng của sự hoàn hảo trong thiết kế và hiệu suất. Với động cơ twin-turbo 3.0L mạnh mẽ và thiết kế thể thao đặc trưng, đây là chiếc xe dành cho những ai đam mê tốc độ và phong cách.",
  features: [
    "Động cơ 3.0L Twin-Turbo H6",
    "Công suất 450 HP",
    "Mô-men xoắn 530 Nm",
    "Tăng tốc 0-100km/h: 3.5s",
    "Tốc độ tối đa 308 km/h",
    "Hộp số PDK 8 cấp",
    "Dẫn động cầu sau",
  ],
  specifications: {
    engine: {
      type: "6-cylinder horizontally opposed twin-turbo",
      displacement: "2,981 cc",
      power: "450 HP @ 6,000 rpm",
      torque: "530 Nm @ 2,300-5,000 rpm",
    },
    performance: {
      acceleration: "0-100 km/h: 3.5s",
      topSpeed: "308 km/h",
      fuelConsumption: "9.0L/100km",
    },
    dimensions: {
      length: "4,519 mm",
      width: "1,852 mm",
      height: "1,300 mm",
      wheelbase: "2,450 mm",
    },
  },
  exclusiveOffers: [
    "Miễn phí bảo hiểm năm đầu trị giá 150 triệu",
    "Tặng gói bảo dưỡng 3 năm",
    "Hỗ trợ vay 80% giá trị xe với lãi suất ưu đãi",
    "Đăng ký biển số VIP miễn phí",
    "Tặng phụ kiện chính hãng trị giá 100 triệu",
  ],
};

const reviews = [
  {
    id: 1,
    name: "Nguyễn Minh Tuấn",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    date: "2 tháng trước",
    content:
      "Xe tuyệt vời! Động cơ mạnh mẽ, thiết kế đẹp. Dịch vụ tư vấn của anh Thật rất chuyên nghiệp.",
    verified: true,
  },
  {
    id: 2,
    name: "Lê Thị Hương",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    rating: 5,
    date: "1 tháng trước",
    content:
      "Trải nghiệm lái tuyệt vời. Hỗ trợ thủ tục rất nhanh chóng và thuận tiện.",
    verified: true,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nav = useNavigate();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 font-inter text-sm text-gray-600">
            <Link to="/" className="hover:text-black">
              Trang chủ
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-black">
              Xe cao cấp
            </Link>
            <span>/</span>
            <span className="text-black">
              {vehicle.brand} {vehicle.model}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />

                <Badge className="absolute top-4 left-4 bg-luxury-gold text-black font-inter">
                  {vehicle.badge}
                </Badge>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-4">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index
                        ? "border-luxury-gold"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-2">
                  {vehicle.brand} {vehicle.model}
                </h1>
                <p className="font-inter text-gray-600">
                  {vehicle.year} • {vehicle.segment}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="font-playfair text-3xl font-bold text-luxury-gold">
                  {vehicle.price}
                </div>
                {vehicle.originalPrice && (
                  <div className="font-inter text-lg text-gray-500 line-through">
                    {vehicle.originalPrice}
                  </div>
                )}
              </div>

              <p className="font-inter text-gray-700 leading-relaxed">
                {vehicle.description}
              </p>

              {/* Key Features */}
              <div>
                <h3 className="font-inter text-lg font-semibold text-gray-900 mb-4">
                  Thông số nổi bật
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {vehicle.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-inter text-lg font-semibold text-gray-900 mb-4">
                  Màu sắc có sẵn
                </h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.colors.map((color, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm font-inter"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-6 border-t">
                <Button
                  size="lg"
                  className="w-full font-inter text-lg py-6 bg-luxury-gold hover:bg-luxury-gold/90 text-black"
                  onClick={() => nav("/contact")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Đặt lịch tư vấn ngay
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full font-inter text-lg py-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat tư vấn trực tuyến
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mb-16">
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specs" className="font-inter">
                  Thông số kỹ thuật
                </TabsTrigger>
                <TabsTrigger value="offers" className="font-inter">
                  Ưu đãi độc quyền
                </TabsTrigger>
                <TabsTrigger value="reviews" className="font-inter">
                  Đánh giá khách hàng
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specs" className="mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-inter text-lg font-semibold mb-4">
                        Động cơ
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Loại:</span>
                          <span className="font-medium">
                            {vehicle.specifications.engine.type}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dung tích:</span>
                          <span className="font-medium">
                            {vehicle.specifications.engine.displacement}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Công suất:</span>
                          <span className="font-medium">
                            {vehicle.specifications.engine.power}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mô-men xoắn:</span>
                          <span className="font-medium">
                            {vehicle.specifications.engine.torque}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-inter text-lg font-semibold mb-4">
                        Hiệu suất
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tăng tốc:</span>
                          <span className="font-medium">
                            {vehicle.specifications.performance.acceleration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tốc độ tối đa:</span>
                          <span className="font-medium">
                            {vehicle.specifications.performance.topSpeed}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Tiêu hao nhiên liệu:
                          </span>
                          <span className="font-medium">
                            {vehicle.specifications.performance.fuelConsumption}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-inter text-lg font-semibold mb-4">
                        Kích thước
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dài:</span>
                          <span className="font-medium">
                            {vehicle.specifications.dimensions.length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rộng:</span>
                          <span className="font-medium">
                            {vehicle.specifications.dimensions.width}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cao:</span>
                          <span className="font-medium">
                            {vehicle.specifications.dimensions.height}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Chiều dài cơ sở:
                          </span>
                          <span className="font-medium">
                            {vehicle.specifications.dimensions.wheelbase}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="offers" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                      Ưu đãi độc quyền khi mua qua Thật Nguyễn
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {vehicle.exclusiveOffers.map((offer, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-luxury-gold rounded-full flex items-center justify-center mt-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-inter text-gray-700">
                            {offer}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-6 bg-luxury-gold/10 rounded-xl">
                      <p className="font-inter text-gray-800 mb-4">
                        <strong>Lưu ý:</strong> Các ưu đãi trên chỉ áp dụng khi
                        mua xe thông qua Thật Nguyễn. Liên hệ ngay để được tư
                        vấn chi tiết và nhận báo giá tốt nhất.
                      </p>
                      <Button className="font-inter bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                        Nhận báo giá chi tiết
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-inter font-semibold text-gray-900">
                                {review.name}
                              </h4>
                              {review.verified && (
                                <Badge
                                  variant="outline"
                                  className="text-xs font-inter"
                                >
                                  Đã xác minh
                                </Badge>
                              )}
                              <span className="font-inter text-sm text-gray-500">
                                {review.date}
                              </span>
                            </div>
                            <div className="flex mb-3">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-luxury-gold fill-current"
                                />
                              ))}
                            </div>
                            <p className="font-inter text-gray-700">
                              {review.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Back to Products */}
          <div className="text-center">
            <Link to="/products">
              <Button variant="outline" size="lg" className="font-inter">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Quay lại danh sách xe
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
