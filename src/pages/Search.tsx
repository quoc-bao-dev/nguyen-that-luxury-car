
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search as SearchIcon, Filter, Eye, Heart, Calendar, User } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');

  // Mock data
  const vehicles = [
    {
      id: 1,
      type: 'vehicle',
      brand: "Porsche",
      model: "911 Carrera S",
      year: "2024",
      price: "8.5 tỷ VND",
      priceValue: 8500000000,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      colors: ["Đen", "Trắng", "Đỏ"],
      badge: "Mới nhất"
    },
    {
      id: 2,
      type: 'vehicle',
      brand: "Mercedes",
      model: "S-Class S580",
      year: "2024",
      price: "6.8 tỷ VND",
      priceValue: 6800000000,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      colors: ["Đen", "Trắng", "Bạc"],
      badge: "Bán chạy"
    },
    {
      id: 3,
      type: 'vehicle',
      brand: "Porsche",
      model: "Cayenne Turbo",
      year: "2024",
      price: "7.2 tỷ VND",
      priceValue: 7200000000,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      colors: ["Đen", "Trắng", "Xanh"],
      badge: "Đặc biệt"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      type: 'blog',
      title: "Porsche 911 2024: Liệu có xứng đáng với mức giá 8.5 tỷ VND?",
      excerpt: "Đánh giá toàn diện về Porsche 911 Carrera S 2024...",
      category: "Đánh giá xe",
      author: "Thật Nguyễn",
      date: "15/12/2024",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      views: 2450
    },
    {
      id: 2,
      type: 'blog',
      title: "5 điều cần biết trước khi mua Mercedes S-Class",
      excerpt: "Hướng dẫn chi tiết để bạn có thể đưa ra quyết định đúng đắn...",
      category: "Tư vấn chọn xe",
      author: "Thật Nguyễn",
      date: "10/12/2024",
      image: "https://images.unsplash.com/photo-1606016159991-f4d7c8d6c0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      views: 3200
    }
  ];

  // Filter functions
  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand;
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'under-5' && vehicle.priceValue < 5000000000) ||
      (selectedPriceRange === '5-8' && vehicle.priceValue >= 5000000000 && vehicle.priceValue <= 8000000000) ||
      (selectedPriceRange === 'above-8' && vehicle.priceValue > 8000000000);
    const matchesColor = selectedColor === 'all' || vehicle.colors.includes(selectedColor);
    
    return matchesSearch && matchesBrand && matchesPrice && matchesColor;
  });

  const filteredBlogPosts = blogPosts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const allResults = [...filteredVehicles, ...filteredBlogPosts];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32">
        {/* Search Header */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 font-inter">
                Tìm kiếm nâng cao
              </Badge>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tìm kiếm
                <span className="block text-luxury-gold">Mọi thứ bạn cần</span>
              </h1>
              <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
                Tìm kiếm xe cao cấp, bài viết blog, dịch vụ và nhiều thông tin hữu ích khác 
                với công cụ tìm kiếm thông minh của chúng tôi.
              </p>
            </div>

            {/* Main Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <SearchIcon className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
                <Input
                  placeholder="Tìm kiếm xe, bài viết, dịch vụ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg font-inter border-2 border-gray-200 focus:border-luxury-gold"
                />
              </div>

              {/* Advanced Filters */}
              <div className="grid md:grid-cols-4 gap-4">
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

                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
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

                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger className="font-inter">
                    <SelectValue placeholder="Màu sắc" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả màu</SelectItem>
                    <SelectItem value="Đen">Đen</SelectItem>
                    <SelectItem value="Trắng">Trắng</SelectItem>
                    <SelectItem value="Đỏ">Đỏ</SelectItem>
                    <SelectItem value="Xanh">Xanh</SelectItem>
                    <SelectItem value="Bạc">Bạc</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="font-inter">
                  <Filter className="w-4 h-4 mr-2" />
                  Bộ lọc khác
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-2">
                    Kết quả tìm kiếm
                  </h2>
                  <p className="font-inter text-gray-600">
                    Tìm thấy {allResults.length} kết quả{searchQuery ? ` cho "${searchQuery}"` : ''}
                  </p>
                </div>
              </div>
            </div>

            {allResults.length > 0 ? (
              <Tabs defaultValue="all" className="w-full mb-8">
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                  <TabsTrigger value="all" className="font-inter">Tất cả ({allResults.length})</TabsTrigger>
                  <TabsTrigger value="vehicles" className="font-inter">Xe ({filteredVehicles.length})</TabsTrigger>
                  <TabsTrigger value="blog" className="font-inter">Blog ({filteredBlogPosts.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allResults.map((result) => (
                      result.type === 'vehicle' ? (
                        <Card 
                          key={`vehicle-${result.id}`}
                          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <div className="relative overflow-hidden">
                            <img 
                              src={result.image}
                              alt={`${result.brand} ${result.model}`}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            
                            <Badge 
                              className="absolute top-4 left-4 bg-luxury-gold text-black font-inter"
                            >
                              {result.badge}
                            </Badge>

                            <div className="absolute top-4 right-4 flex space-x-2">
                              <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                <Heart className="w-4 h-4 text-gray-700" />
                              </button>
                              <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                <Eye className="w-4 h-4 text-gray-700" />
                              </button>
                            </div>
                          </div>

                          <CardContent className="p-6">
                            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                              {result.brand} {result.model}
                            </h3>
                            <p className="font-inter text-sm text-gray-500 mb-3">{result.year}</p>

                            <div className="flex items-center justify-between mb-4">
                              <p className="font-inter text-lg font-bold text-luxury-gold">
                                {result.price}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {result.colors.map((color, i) => (
                                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded font-inter">
                                    {color}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <Link to={`/product/${result.id}`}>
                              <Button className="w-full font-inter">
                                Xem chi tiết
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card 
                          key={`blog-${result.id}`}
                          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <div className="relative overflow-hidden">
                            <img 
                              src={result.image}
                              alt={result.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            
                            <Badge 
                              variant="outline" 
                              className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm font-inter"
                            >
                              {result.category}
                            </Badge>
                          </div>

                          <CardContent className="p-6">
                            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-luxury-gold transition-colors line-clamp-2">
                              {result.title}
                            </h3>
                            
                            <p className="font-inter text-gray-600 mb-4 leading-relaxed line-clamp-2">
                              {result.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-1" />
                                  {result.author}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {result.date}
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {result.views.toLocaleString()}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="vehicles">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVehicles.map((vehicle) => (
                      <Card 
                        key={vehicle.id}
                        className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative overflow-hidden">
                          <img 
                            src={vehicle.image}
                            alt={`${vehicle.brand} ${vehicle.model}`}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          <Badge 
                            className="absolute top-4 left-4 bg-luxury-gold text-black font-inter"
                          >
                            {vehicle.badge}
                          </Badge>

                          <div className="absolute top-4 right-4 flex space-x-2">
                            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                              <Heart className="w-4 h-4 text-gray-700" />
                            </button>
                            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                              <Eye className="w-4 h-4 text-gray-700" />
                            </button>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                            {vehicle.brand} {vehicle.model}
                          </h3>
                          <p className="font-inter text-sm text-gray-500 mb-3">{vehicle.year}</p>

                          <div className="flex items-center justify-between mb-4">
                            <p className="font-inter text-lg font-bold text-luxury-gold">
                              {vehicle.price}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {vehicle.colors.map((color, i) => (
                                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded font-inter">
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Link to={`/product/${vehicle.id}`}>
                            <Button className="w-full font-inter">
                              Xem chi tiết
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="blog">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogPosts.map((post) => (
                      <Card 
                        key={post.id}
                        className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative overflow-hidden">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          <Badge 
                            variant="outline" 
                            className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm font-inter"
                          >
                            {post.category}
                          </Badge>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-luxury-gold transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="font-inter text-gray-600 mb-4 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {post.date}
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.views.toLocaleString()}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SearchIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                  Không tìm thấy kết quả
                </h3>
                <p className="font-inter text-gray-600 mb-8 max-w-lg mx-auto">
                  Không tìm thấy kết quả nào phù hợp với tiêu chí tìm kiếm của bạn. 
                  Vui lòng thử lại với từ khóa hoặc bộ lọc khác.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedBrand('all');
                      setSelectedPriceRange('all');
                      setSelectedColor('all');
                    }}
                    className="font-inter"
                  >
                    Xóa bộ lọc
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline" className="font-inter">
                      Liên hệ tư vấn
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
