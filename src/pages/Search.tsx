
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon, Calendar, User, Star, Eye, MessageCircle } from "lucide-react";

// Define types for better TypeScript support
interface Vehicle {
  id: number;
  type: 'vehicle';
  brand: string;
  model: string;
  year: string;
  price: string;
  priceValue: number;
  image: string;
  colors: string[];
  badge: string;
}

interface BlogPost {
  id: number;
  type: 'blog';
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  views: number;
}

type SearchResult = Vehicle | BlogPost;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'vehicle', label: 'Xe cao cấp' },
    { value: 'blog', label: 'Bài viết' },
    { value: 'porsche', label: 'Porsche' },
    { value: 'mercedes', label: 'Mercedes' }
  ];

  const priceRanges = [
    { value: 'all', label: 'Tất cả mức giá' },
    { value: 'under-5', label: 'Dưới 5 tỷ' },
    { value: '5-10', label: '5 - 10 tỷ' },
    { value: '10-15', label: '10 - 15 tỷ' },
    { value: 'above-15', label: 'Trên 15 tỷ' }
  ];

  const searchResults: SearchResult[] = [
    // Vehicles
    {
      id: 1,
      type: 'vehicle',
      brand: 'Porsche',
      model: '911 Carrera S',
      year: '2024',
      price: '8.5 tỷ VND',
      priceValue: 8.5,
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      colors: ['Đen', 'Trắng', 'Xám'],
      badge: 'Mới nhất'
    },
    {
      id: 2,
      type: 'vehicle',
      brand: 'Mercedes',
      model: 'S-Class S500',
      year: '2024',
      price: '6.2 tỷ VND',
      priceValue: 6.2,
      image: 'https://images.unsplash.com/photo-1606016159991-f4d7c8d6c0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      colors: ['Đen', 'Bạc', 'Trắng'],
      badge: 'Bán chạy'
    },
    // Blog posts
    {
      id: 3,
      type: 'blog',
      title: 'Porsche 911 2024: Liệu có xứng đáng với mức giá 8.5 tỷ VND?',
      excerpt: 'Đánh giá toàn diện về Porsche 911 Carrera S 2024...',
      category: 'Đánh giá xe',
      author: 'Thật Nguyễn',
      date: '15/12/2024',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      views: 2450
    },
    {
      id: 4,
      type: 'blog',
      title: 'Thị trường xe sang Việt Nam 2024: Xu hướng và dự báo',
      excerpt: 'Phân tích chi tiết về tình hình thị trường xe hạng sang...',
      category: 'Phân tích thị trường',
      author: 'Thật Nguyễn',
      date: '12/12/2024',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      views: 1890
    }
  ];

  const filteredResults = searchResults.filter(result => {
    const matchesSearch = result.type === 'vehicle' 
      ? `${(result as Vehicle).brand} ${(result as Vehicle).model}`.toLowerCase().includes(searchTerm.toLowerCase())
      : (result as BlogPost).title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      result.type === selectedCategory ||
      (result.type === 'vehicle' && (result as Vehicle).brand.toLowerCase() === selectedCategory);
    
    const matchesPrice = priceRange === 'all' || result.type !== 'vehicle' ||
      (priceRange === 'under-5' && (result as Vehicle).priceValue < 5) ||
      (priceRange === '5-10' && (result as Vehicle).priceValue >= 5 && (result as Vehicle).priceValue <= 10) ||
      (priceRange === '10-15' && (result as Vehicle).priceValue > 10 && (result as Vehicle).priceValue <= 15) ||
      (priceRange === 'above-15' && (result as Vehicle).priceValue > 15);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 font-sans">
                Tìm kiếm
              </Badge>
              <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tìm kiếm xe và
                <span className="block text-luxury-gold">Nội dung</span>
              </h1>
              <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
                Tìm kiếm xe cao cấp và bài viết theo sở thích của bạn
              </p>
            </div>

            {/* Search Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="md:col-span-2">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Tìm kiếm xe hoặc bài viết..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 font-sans"
                    />
                  </div>
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="font-sans">
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="font-sans">
                    <SelectValue placeholder="Mức giá" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="font-sans text-3xl font-bold text-gray-900 mb-4">
                Kết quả tìm kiếm
              </h2>
              <p className="font-sans text-gray-600">
                Hiển thị {filteredResults.length} kết quả
                {searchTerm && ` cho "${searchTerm}"`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResults.map((result) => (
                <Card key={result.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={result.image}
                      alt={result.type === 'vehicle' ? `${(result as Vehicle).brand} ${(result as Vehicle).model}` : (result as BlogPost).title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    <Badge 
                      variant="outline" 
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm font-sans"
                    >
                      {result.type === 'vehicle' ? (result as Vehicle).badge : (result as BlogPost).category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    {result.type === 'vehicle' ? (
                      // Vehicle Card Content
                      <>
                        <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
                          {(result as Vehicle).brand} {(result as Vehicle).model}
                        </h3>
                        <p className="font-sans text-gray-600 mb-4">
                          Năm sản xuất: {(result as Vehicle).year}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-sans text-2xl font-bold text-luxury-gold">
                            {(result as Vehicle).price}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          {(result as Vehicle).colors.map((color, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs font-sans">
                              {color}
                            </span>
                          ))}
                        </div>
                        <Link to={`/product/${result.id}`}>
                          <Button className="w-full font-sans bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                            Xem chi tiết
                          </Button>
                        </Link>
                      </>
                    ) : (
                      // Blog Post Card Content
                      <>
                        <h3 className="font-sans text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {(result as BlogPost).title}
                        </h3>
                        
                        <Badge variant="outline" className="mb-3 font-sans">
                          {(result as BlogPost).category}
                        </Badge>
                        
                        <p className="font-sans text-gray-600 mb-4 line-clamp-3">
                          {(result as BlogPost).excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {(result as BlogPost).author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {(result as BlogPost).date}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Eye className="w-4 h-4 mr-1" />
                            {(result as BlogPost).views.toLocaleString()}
                          </div>
                          
                          <Link to={`/blog/${result.id}`}>
                            <Button variant="ghost" size="sm" className="font-sans text-luxury-gold hover:text-luxury-gold/80">
                              Đọc thêm
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredResults.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SearchIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-gray-900 mb-4">
                  Không tìm thấy kết quả
                </h3>
                <p className="font-sans text-gray-600 mb-8">
                  Hãy thử tìm kiếm với từ khóa khác hoặc thay đổi bộ lọc.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="font-sans"
                >
                  Xóa bộ lọc
                </Button>
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
