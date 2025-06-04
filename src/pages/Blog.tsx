import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Eye,
  MessageCircle,
  Share2,
} from "lucide-react";

const categories = [
  { value: "all", label: "Tất cả bài viết" },
  { value: "market-analysis", label: "Phân tích thị trường" },
  { value: "car-reviews", label: "Đánh giá xe" },
  { value: "buying-guide", label: "Tư vấn chọn xe" },
  { value: "technology", label: "Công nghệ ô tô" },
  { value: "maintenance", label: "Bảo dưỡng xe" },
  { value: "lifestyle", label: "Phong cách sống" },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const nav = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Porsche 911 2024: Liệu có xứng đáng với mức giá 8.5 tỷ VND?",
      excerpt:
        "Đánh giá toàn diện về Porsche 911 Carrera S 2024, từ thiết kế, hiệu suất đến giá trị đầu tư. Có nên mua hay không?",
      category: "car-reviews",
      categoryLabel: "Đánh giá xe",
      author: "Thật Nguyễn",
      date: "15/12/2024",
      readTime: "8 phút đọc",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      featured: true,
      views: 2450,
      comments: 18,
    },
    {
      id: 2,
      title: "Thị trường xe sang Việt Nam 2024: Xu hướng và dự báo",
      excerpt:
        "Phân tích chi tiết về tình hình thị trường xe hạng sang tại Việt Nam, những thay đổi trong thị hiếu khách hàng và dự báo cho năm 2025.",
      category: "market-analysis",
      categoryLabel: "Phân tích thị trường",
      author: "Thật Nguyễn",
      date: "12/12/2024",
      readTime: "12 phút đọc",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      views: 1890,
      comments: 24,
    },
    {
      id: 3,
      title: "5 điều cần biết trước khi mua Mercedes S-Class",
      excerpt:
        "Hướng dẫn chi tiết để bạn có thể đưa ra quyết định đúng đắn khi lựa chọn Mercedes S-Class phù hợp với nhu cầu và ngân sách.",
      category: "buying-guide",
      categoryLabel: "Tư vấn chọn xe",
      author: "Thật Nguyễn",
      date: "10/12/2024",
      readTime: "6 phút đọc",
      image:
        "https://images.unsplash.com/photo-1606016159991-f4d7c8d6c0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      views: 3200,
      comments: 31,
    },
    {
      id: 4,
      title: "Công nghệ hybrid trong xe cao cấp: Tương lai đã đến",
      excerpt:
        "Tìm hiểu về công nghệ hybrid mới nhất trên các dòng xe Porsche và Mercedes, lợi ích và những điều cần lưu ý.",
      category: "technology",
      categoryLabel: "Công nghệ ô tô",
      author: "Thật Nguyễn",
      date: "08/12/2024",
      readTime: "10 phút đọc",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: false,
      views: 1650,
      comments: 12,
    },
    {
      id: 5,
      title: "Bí quyết bảo dưỡng xe Porsche để giữ giá trị qua thời gian",
      excerpt:
        "Hướng dẫn chi tiết cách bảo dưỡng xe Porsche đúng cách, giúp xe luôn trong tình trạng tốt nhất và giữ được giá trị cao.",
      category: "maintenance",
      categoryLabel: "Bảo dưỡng xe",
      author: "Thật Nguyễn",
      date: "05/12/2024",
      readTime: "7 phút đọc",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80",
      featured: false,
      views: 980,
      comments: 8,
    },
    {
      id: 6,
      title: "Phong cách sống đẳng cấp cùng xe cao cấp",
      excerpt:
        "Khám phá cách những chiếc xe cao cấp không chỉ là phương tiện di chuyển mà còn là biểu tượng của phong cách sống đẳng cấp.",
      category: "lifestyle",
      categoryLabel: "Phong cách sống",
      author: "Thật Nguyễn",
      date: "03/12/2024",
      readTime: "5 phút đọc",
      image:
        "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=4032&q=80",
      featured: false,
      views: 2100,
      comments: 19,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-6 font-sans">
                Blog & Tin tức
              </Badge>
              <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Khám phá thế giới
                <span className="block text-luxury-gold">Xe cao cấp</span>
              </h1>
              <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
                Cập nhật thông tin thị trường, đánh giá xe, tư vấn chọn xe và
                những kiến thức bổ ích về thế giới ô tô cao cấp.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Tìm kiếm bài viết..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 font-sans"
                    />
                  </div>
                </div>

                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="font-sans">
                    <SelectValue placeholder="Chọn chủ đề" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "all" && !searchTerm && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="font-sans text-3xl font-bold text-gray-900 mb-8 text-center">
                Bài viết nổi bật
              </h2>

              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="grid lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover min-h-[400px]"
                      onClick={() => nav(`/blog/${featuredPost.id}`)}
                    />
                    <Badge className="absolute top-4 left-4 bg-luxury-gold text-black font-sans">
                      Nổi bật
                    </Badge>
                  </div>

                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4 font-sans">
                      {featuredPost.categoryLabel}
                    </Badge>

                    <h3 className="font-sans text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>

                    <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views.toLocaleString()}
                      </div>
                    </div>

                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="w-fit font-sans bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                        Đọc bài viết
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {searchTerm || selectedCategory !== "all" ? (
              <div className="mb-8">
                <h2 className="font-sans text-3xl font-bold text-gray-900 mb-4">
                  Kết quả tìm kiếm
                </h2>
                <p className="font-sans text-gray-600">
                  Hiển thị {filteredPosts.length} bài viết
                  {searchTerm && ` cho "${searchTerm}"`}
                  {selectedCategory !== "all" &&
                    ` trong "${
                      categories.find((c) => c.value === selectedCategory)
                        ?.label
                    }"`}
                </p>
              </div>
            ) : (
              <h2 className="font-sans text-3xl font-bold text-gray-900 mb-8 text-center">
                Bài viết mới nhất
              </h2>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || selectedCategory !== "all"
                ? filteredPosts
                : regularPosts
              ).map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      onClick={() => nav(`/blog/${featuredPost.id}`)}
                    />

                    <Badge
                      variant="outline"
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm font-sans"
                    >
                      {post.categoryLabel}
                    </Badge>

                    <div className="absolute top-4 right-4">
                      <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Share2 className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-sans text-xl font-bold text-gray-900 mb-3 group-hover:text-luxury-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="font-sans text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </div>
                      </div>

                      <Link to={`/blog/${post.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="font-sans p-0 h-auto text-luxury-gold hover:text-luxury-gold/80"
                        >
                          Đọc thêm
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-gray-900 mb-4">
                  Không tìm thấy bài viết
                </h3>
                <p className="font-sans text-gray-600 mb-8">
                  Hãy thử tìm kiếm với từ khóa khác hoặc chọn chủ đề khác.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="font-sans"
                >
                  Xem tất cả bài viết
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="font-sans">
                  Xem thêm bài viết
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Đăng ký nhận bài viết mới
              </h2>
              <p className="font-sans text-xl text-gray-600 mb-8">
                Cập nhật những bài viết mới nhất về thế giới xe cao cấp, xu
                hướng thị trường và tư vấn chuyên nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Nhập địa chỉ email của bạn"
                  className="font-sans"
                />
                <Button className="font-sans bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                  Đăng ký ngay
                </Button>
              </div>
              <p className="font-sans text-sm text-gray-500 mt-4">
                Miễn phí. Có thể hủy đăng ký bất kỳ lúc nào.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
