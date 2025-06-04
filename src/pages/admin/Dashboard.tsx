
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Eye, TrendingUp } from "lucide-react";
import AdminLayout from '@/components/admin/AdminLayout';

const AdminDashboard = () => {
  const stats = [
    {
      title: "Tổng bài viết",
      value: "24",
      description: "Đã xuất bản",
      icon: FileText,
      trend: "+12%"
    },
    {
      title: "Lịch tư vấn",
      value: "18",
      description: "Chờ xử lý",
      icon: Calendar,
      trend: "+5%"
    },
    {
      title: "Lượt xem",
      value: "12.5K",
      description: "Tháng này",
      icon: Eye,
      trend: "+23%"
    },
    {
      title: "Tỷ lệ chuyển đổi",
      value: "3.2%",
      description: "Khách tiềm năng",
      icon: TrendingUp,
      trend: "+1.2%"
    }
  ];

  const recentPosts = [
    {
      title: "Đánh giá chi tiết Porsche 911 Turbo S 2024",
      status: "Đã xuất bản",
      date: "2 ngày trước",
      views: "1.2K"
    },
    {
      title: "So sánh Mercedes S-Class vs BMW 7-Series",
      status: "Bản nháp",
      date: "3 ngày trước",
      views: "856"
    },
    {
      title: "Xu hướng xe điện cao cấp năm 2024",
      status: "Đã xuất bản",
      date: "1 tuần trước",
      views: "2.1K"
    }
  ];

  const recentAppointments = [
    {
      customer: "Nguyễn Văn A",
      service: "Tư vấn Porsche Cayenne",
      date: "15/12/2024",
      time: "14:00",
      status: "Chờ xác nhận"
    },
    {
      customer: "Lê Thị B",
      service: "Tư vấn Mercedes E-Class",
      date: "16/12/2024",
      time: "10:30",
      status: "Đã xác nhận"
    },
    {
      customer: "Trần Văn C",
      service: "Tư vấn tài chính",
      date: "17/12/2024",
      time: "16:00",
      status: "Chờ xác nhận"
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 mt-2">Tổng quan hoạt động website</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
                <p className="text-xs text-green-600 mt-1">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Bài viết gần đây</CardTitle>
              <CardDescription>Các bài viết được tạo gần đây</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{post.title}</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className={`text-xs px-2 py-1 rounded ${
                          post.status === 'Đã xuất bản' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{post.views} lượt xem</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Appointments */}
          <Card>
            <CardHeader>
              <CardTitle>Lịch tư vấn gần đây</CardTitle>
              <CardDescription>Các yêu cầu tư vấn mới nhất</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{appointment.customer}</h4>
                      <p className="text-xs text-gray-600">{appointment.service}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">
                          {appointment.date} - {appointment.time}
                        </span>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      appointment.status === 'Đã xác nhận' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
