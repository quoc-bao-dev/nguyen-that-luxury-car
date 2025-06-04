
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Eye, ArrowLeft } from "lucide-react";
import AdminLayout from '@/components/admin/AdminLayout';
import { Link } from 'react-router-dom';

const PostEditor = () => {
  const [postData, setPostData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    status: 'draft',
    featuredImage: '',
    seoTitle: '',
    seoDescription: '',
    tags: ''
  });

  const categories = [
    'Đánh giá xe',
    'So sánh',
    'Xu hướng',
    'Tư vấn',
    'Hướng dẫn',
    'Tin tức',
    'Phân tích thị trường'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving post:', postData);
    // Implement save logic here
  };

  const handlePublish = () => {
    setPostData({...postData, status: 'published'});
    // Implement publish logic here
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/admin/posts">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Tạo bài viết mới</h1>
              <p className="text-gray-600 mt-2">Tạo nội dung chất lượng cho blog</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Xem trước
            </Button>
            <Button onClick={handleSubmit}>
              <Save className="w-4 h-4 mr-2" />
              Lưu bản nháp
            </Button>
            <Button onClick={handlePublish} className="bg-green-600 hover:bg-green-700">
              Xuất bản
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Nội dung chính</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tiêu đề bài viết</label>
                  <Input
                    placeholder="Nhập tiêu đề bài viết..."
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tóm tắt</label>
                  <Textarea
                    placeholder="Mô tả ngắn gọn về nội dung bài viết..."
                    value={postData.excerpt}
                    onChange={(e) => setPostData({...postData, excerpt: e.target.value})}
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nội dung bài viết</label>
                  <Textarea
                    placeholder="Viết nội dung bài viết của bạn tại đây..."
                    value={postData.content}
                    onChange={(e) => setPostData({...postData, content: e.target.value})}
                    rows={15}
                    className="min-h-[400px]"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Hỗ trợ Markdown. Sử dụng **text** cho chữ đậm, *text* cho chữ nghiêng.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Tối ưu hóa SEO</CardTitle>
                <CardDescription>
                  Cải thiện khả năng tìm kiếm của bài viết
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">SEO Title</label>
                  <Input
                    placeholder="Tiêu đề tối ưu cho SEO..."
                    value={postData.seoTitle}
                    onChange={(e) => setPostData({...postData, seoTitle: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Meta Description</label>
                  <Textarea
                    placeholder="Mô tả meta cho search engine..."
                    value={postData.seoDescription}
                    onChange={(e) => setPostData({...postData, seoDescription: e.target.value})}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cài đặt bài viết</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Danh mục</label>
                  <Select value={postData.category} onValueChange={(value) => setPostData({...postData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Trạng thái</label>
                  <Select value={postData.status} onValueChange={(value) => setPostData({...postData, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Bản nháp</SelectItem>
                      <SelectItem value="published">Đã xuất bản</SelectItem>
                      <SelectItem value="scheduled">Đã lên lịch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <Input
                    placeholder="porsche, mercedes, luxury-cars"
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Phân cách bằng dấu phẩy
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ảnh đại diện</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">URL ảnh</label>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      value={postData.featuredImage}
                      onChange={(e) => setPostData({...postData, featuredImage: e.target.value})}
                    />
                  </div>
                  {postData.featuredImage && (
                    <div className="mt-4">
                      <img
                        src={postData.featuredImage}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default PostEditor;
