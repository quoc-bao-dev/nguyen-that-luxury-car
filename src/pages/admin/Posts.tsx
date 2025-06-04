
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react";
import AdminLayout from '@/components/admin/AdminLayout';
import { Link } from 'react-router-dom';

const AdminPosts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      id: 1,
      title: "Đánh giá chi tiết Porsche 911 Turbo S 2024",
      status: "published",
      author: "Thật Nguyễn",
      publishDate: "10/12/2024",
      views: 1200,
      category: "Đánh giá xe"
    },
    {
      id: 2,
      title: "So sánh Mercedes S-Class vs BMW 7-Series",
      status: "draft",
      author: "Thật Nguyễn",
      publishDate: "08/12/2024",
      views: 856,
      category: "So sánh"
    },
    {
      id: 3,
      title: "Xu hướng xe điện cao cấp năm 2024",
      status: "published",
      author: "Thật Nguyễn",
      publishDate: "05/12/2024",
      views: 2100,
      category: "Xu hướng"
    },
    {
      id: 4,
      title: "Hướng dẫn chọn mua Porsche Cayenne phù hợp",
      status: "published",
      author: "Thật Nguyễn",
      publishDate: "03/12/2024",
      views: 1800,
      category: "Tư vấn"
    },
    {
      id: 5,
      title: "Bảo dưỡng xe Mercedes: Những điều cần biết",
      status: "scheduled",
      author: "Thật Nguyễn",
      publishDate: "20/12/2024",
      views: 0,
      category: "Hướng dẫn"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800">Đã xuất bản</Badge>;
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800">Bản nháp</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Đã lên lịch</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Quản lý bài viết</h1>
            <p className="text-gray-600 mt-2">Tạo và quản lý các bài viết blog</p>
          </div>
          <Link to="/admin/posts/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Tạo bài viết mới
            </Button>
          </Link>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardHeader>
            <CardTitle>Tìm kiếm bài viết</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Tìm kiếm theo tiêu đề hoặc danh mục..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle>Danh sách bài viết</CardTitle>
            <CardDescription>
              Tất cả bài viết của bạn ({filteredPosts.length} bài viết)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tiêu đề</TableHead>
                  <TableHead>Danh mục</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Ngày xuất bản</TableHead>
                  <TableHead>Lượt xem</TableHead>
                  <TableHead>Hành động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{post.title}</p>
                        <p className="text-sm text-gray-500">Tác giả: {post.author}</p>
                      </div>
                    </TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>{getStatusBadge(post.status)}</TableCell>
                    <TableCell>{post.publishDate}</TableCell>
                    <TableCell>{post.views.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminPosts;
