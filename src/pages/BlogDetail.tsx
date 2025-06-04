
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  User, 
  Eye, 
  MessageCircle, 
  Share2, 
  Heart, 
  Bookmark, 
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  Clock,
  Tag,
  Quote
} from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');

  // Mock blog data - trong thực tế sẽ fetch từ API
  const blogPost = {
    id: 1,
    title: "Porsche 911 2024: Liệu có xứng đáng với mức giá 8.5 tỷ VND?",
    subtitle: "Đánh giá toàn diện về biểu tượng tốc độ huyền thoại từ Stuttgart",
    content: `
      <p>Porsche 911 là một trong những biểu tượng xe thể thao được yêu thích nhất trên thế giới. Với lịch sử phát triển hơn 60 năm, dòng xe này đã trở thành tiêu chuẩn vàng cho những ai đam mê tốc độ và phong cách.</p>
      
      <h2>Thiết kế ngoại thất: Tinh hoa của nghệ thuật ô tô</h2>
      
      <p>Porsche 911 2024 tiếp tục duy trì ngôn ngữ thiết kế đặc trưng của dòng 911 với những cải tiến tinh tế. Đèn pha LED matrix mới mang đến ánh sáng mạnh mẽ và tiết kiệm năng lượng.</p>
      
      <blockquote>"Thiết kế của 911 không chỉ đẹp mắt mà còn thể hiện sự hoàn hảo về khí động học và công nghệ" - Ferry Porsche</blockquote>
      
      <h2>Nội thất: Sang trọng và hiện đại</h2>
      
      <p>Bước vào cabin của 911 2024, bạn sẽ bị ấn tượng bởi sự kết hợp hoàn hảo giữa chất liệu cao cấp và công nghệ hiện đại. Màn hình cảm ứng 10.9 inch tích hợp đầy đủ các tính năng giải trí và kết nối.</p>
      
      <h2>Hiệu suất động cơ: Sức mạnh đáng kinh ngạc</h2>
      
      <p>Trái tim của 911 Carrera S là khối động cơ boxer 6 xi-lanh tăng áp kép 3.0L, sản sinh công suất 444 mã lực và mô-men xoắn 530 Nm. Kết hợp với hộp số PDK 8 cấp, xe có thể tăng tốc từ 0-100 km/h chỉ trong 3.7 giây.</p>
      
      <h2>Công nghệ an toàn tiên tiến</h2>
      
      <p>911 2024 được trang bị đầy đủ các hệ thống an toàn chủ động như:</p>
      <ul>
        <li>Hệ thống phanh khẩn cấp tự động</li>
        <li>Cảnh báo va chạm phía trước</li>
        <li>Hỗ trợ giữ làn đường</li>
        <li>Hệ thống kiểm soát hành trình thích ứng</li>
      </ul>
      
      <h2>Kết luận: Có nên mua Porsche 911 2024?</h2>
      
      <p>Với mức giá 8.5 tỷ VND, Porsche 911 Carrera S 2024 không phải là lựa chọn dành cho số đông. Tuy nhiên, nếu bạn đang tìm kiếm một chiếc xe thể thao mang tính biểu tượng, với hiệu suất vượt trội và thiết kế vượt thời gian, thì 911 chính là lựa chọn hoàn hảo.</p>
    `,
    category: "car-reviews",
    categoryLabel: "Đánh giá xe",
    author: "Thật Nguyễn",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    authorBio: "Chuyên gia tư vấn xe cao cấp với hơn 10 năm kinh nghiệm. Đam mê khám phá và chia sẻ về thế giới ô tô.",
    date: "15/12/2024",
    readTime: "8 phút đọc",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    views: 2450,
    likes: 186,
    comments: 18,
    tags: ["Porsche", "911", "Đánh giá xe", "Xe thể thao", "Luxury Cars"]
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Mercedes S-Class 2024: Đỉnh cao của sự sang trọng",
      image: "https://images.unsplash.com/photo-1606016159991-f4d7c8d6c0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Đánh giá xe",
      date: "12/12/2024",
      readTime: "10 phút đọc"
    },
    {
      id: 3,
      title: "Top 5 xe cao cấp đáng mua nhất năm 2024",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Tư vấn chọn xe",
      date: "10/12/2024",
      readTime: "12 phút đọc"
    },
    {
      id: 4,
      title: "Xu hướng công nghệ ô tô trong năm 2025",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Công nghệ",
      date: "08/12/2024",
      readTime: "6 phút đọc"
    }
  ];

  const comments = [
    {
      id: 1,
      author: "Minh Hoàng",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "16/12/2024",
      content: "Bài viết rất chi tiết và hữu ích! Tôi đang cân nhắc mua 911, thông tin này giúp tôi quyết định được rồi.",
      likes: 12
    },
    {
      id: 2,
      author: "Thu Hương",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "15/12/2024",
      content: "Anh Thật viết hay quá! Mong có thêm nhiều bài đánh giá về các dòng xe khác nữa ạ.",
      likes: 8
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url('${blogPost.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          
          <div className="relative container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-luxury-gold text-black font-sans">
              {blogPost.categoryLabel}
            </Badge>
            
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              {blogPost.subtitle}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                {blogPost.views.toLocaleString()} lượt xem
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Actions */}
              <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                      liked ? 'bg-red-100 text-red-600' : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                    <span className="font-sans">{blogPost.likes + (liked ? 1 : 0)}</span>
                  </button>
                  
                  <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                      bookmarked ? 'bg-blue-100 text-blue-600' : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
                    <span className="font-sans">Lưu bài</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-sans text-sm text-gray-600">Chia sẻ:</span>
                  <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none font-sans">
                <div 
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  className="leading-relaxed"
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-sans text-lg font-semibold mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {blogPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="font-sans">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <Card className="mt-12 border-0 bg-gray-50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={blogPost.authorAvatar}
                      alt={blogPost.author}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-sans text-2xl font-bold text-gray-900 mb-2">
                        {blogPost.author}
                      </h3>
                      <p className="font-sans text-gray-600 mb-4 leading-relaxed">
                        {blogPost.authorBio}
                      </p>
                      <Button className="font-sans bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                        Đặt lịch tư vấn với {blogPost.author}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="font-sans text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Bình luận ({blogPost.comments})
                </h3>

                {/* Comment Form */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <Textarea
                      placeholder="Chia sẻ suy nghĩ của bạn về bài viết này..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="mb-4 font-sans"
                    />
                    <Button className="font-sans bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                      Gửi bình luận
                    </Button>
                  </CardContent>
                </Card>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <Card key={comment.id} className="border-0 bg-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={comment.avatar}
                            alt={comment.author}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-sans font-semibold text-gray-900">
                                {comment.author}
                              </h4>
                              <span className="font-sans text-sm text-gray-500">
                                {comment.date}
                              </span>
                            </div>
                            <p className="font-sans text-gray-700 mb-3 leading-relaxed">
                              {comment.content}
                            </p>
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-luxury-gold transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{comment.likes}</span>
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact CTA */}
              <Card className="mb-8 border-0 bg-luxury-gold text-black">
                <CardContent className="p-6 text-center">
                  <Quote className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-sans text-xl font-bold mb-3">
                    Cần tư vấn chuyên nghiệp?
                  </h3>
                  <p className="font-sans mb-4">
                    Liên hệ trực tiếp với chuyên gia Thật Nguyễn để được tư vấn miễn phí
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-luxury-gold font-sans">
                      <Phone className="w-4 h-4 mr-2" />
                      Gọi ngay
                    </Button>
                    <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-luxury-gold font-sans">
                      <Mail className="w-4 h-4 mr-2" />
                      Email tư vấn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-bold text-gray-900 mb-6">
                    Bài viết liên quan
                  </h3>
                  <div className="space-y-6">
                    {relatedPosts.map((post) => (
                      <Link key={post.id} to={`/blog/${post.id}`}>
                        <div className="group cursor-pointer">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-32 object-cover rounded-lg mb-3 group-hover:opacity-80 transition-opacity"
                          />
                          <Badge variant="outline" className="mb-2 font-sans text-xs">
                            {post.category}
                          </Badge>
                          <h4 className="font-sans font-semibold text-gray-900 group-hover:text-luxury-gold transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 space-x-3">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-bold text-gray-900 mb-4">
                    Nhận tin mới nhất
                  </h3>
                  <p className="font-sans text-gray-600 mb-4">
                    Đăng ký để nhận bài viết mới về xe cao cấp
                  </p>
                  <Input
                    type="email"
                    placeholder="Email của bạn"
                    className="mb-3 font-sans"
                  />
                  <Button className="w-full font-sans bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                    Đăng ký ngay
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
