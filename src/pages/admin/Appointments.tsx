
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
import { Search, Phone, Mail, CheckCircle, XCircle, Calendar } from "lucide-react";
import AdminLayout from '@/components/admin/AdminLayout';

const AdminAppointments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const appointments = [
    {
      id: 1,
      customer: "Nguyễn Văn A",
      email: "nguyenvana@email.com",
      phone: "0901234567",
      service: "Tư vấn Porsche Cayenne",
      preferredDate: "15/12/2024",
      preferredTime: "14:00",
      status: "pending",
      message: "Muốn tìm hiểu về các phiên bản Cayenne hiện có",
      createdAt: "10/12/2024 09:30"
    },
    {
      id: 2,
      customer: "Lê Thị B",
      email: "lethib@email.com",
      phone: "0907654321",
      service: "Tư vấn Mercedes E-Class",
      preferredDate: "16/12/2024",
      preferredTime: "10:30",
      status: "confirmed",
      message: "Quan tâm đến E-Class 2024, muốn lái thử",
      createdAt: "09/12/2024 15:20"
    },
    {
      id: 3,
      customer: "Trần Văn C",
      email: "tranvanc@email.com",
      phone: "0912345678",
      service: "Tư vấn tài chính",
      preferredDate: "17/12/2024",
      preferredTime: "16:00",
      status: "pending",
      message: "Cần tư vấn về các gói vay mua xe",
      createdAt: "11/12/2024 11:45"
    },
    {
      id: 4,
      customer: "Phạm Thị D",
      email: "phamthid@email.com",
      phone: "0998765432",
      service: "Tư vấn Porsche 911",
      preferredDate: "14/12/2024",
      preferredTime: "09:00",
      status: "completed",
      message: "Đã sở hữu 911 Carrera, muốn nâng cấp lên Turbo",
      createdAt: "08/12/2024 14:15"
    },
    {
      id: 5,
      customer: "Hoàng Văn E",
      email: "hoangvane@email.com",
      phone: "0987654321",
      service: "Tư vấn Mercedes S-Class",
      preferredDate: "18/12/2024",
      preferredTime: "11:00",
      status: "cancelled",
      message: "Quan tâm đến S-Class Maybach",
      createdAt: "12/12/2024 08:30"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Chờ xác nhận</Badge>;
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">Đã xác nhận</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800">Hoàn thành</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Đã hủy</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const handleConfirm = (id: number) => {
    console.log('Confirming appointment:', id);
    // Implement confirm logic
  };

  const handleCancel = (id: number) => {
    console.log('Cancelling appointment:', id);
    // Implement cancel logic
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Quản lý lịch tư vấn</h1>
          <p className="text-gray-600 mt-2">Xử lý các yêu cầu tư vấn từ khách hàng</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Chờ xác nhận</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {appointments.filter(a => a.status === 'pending').length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Đã xác nhận</p>
                  <p className="text-2xl font-bold text-green-600">
                    {appointments.filter(a => a.status === 'confirmed').length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Hoàn thành</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {appointments.filter(a => a.status === 'completed').length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Đã hủy</p>
                  <p className="text-2xl font-bold text-red-600">
                    {appointments.filter(a => a.status === 'cancelled').length}
                  </p>
                </div>
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardHeader>
            <CardTitle>Tìm kiếm và lọc</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Tìm kiếm theo tên, email hoặc dịch vụ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="pending">Chờ xác nhận</option>
                <option value="confirmed">Đã xác nhận</option>
                <option value="completed">Hoàn thành</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Appointments Table */}
        <Card>
          <CardHeader>
            <CardTitle>Danh sách lịch tư vấn</CardTitle>
            <CardDescription>
              Tất cả yêu cầu tư vấn ({filteredAppointments.length} lịch hẹn)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Dịch vụ</TableHead>
                  <TableHead>Thời gian mong muốn</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Ngày tạo</TableHead>
                  <TableHead>Hành động</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{appointment.customer}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Mail className="w-3 h-3 mr-1" />
                            {appointment.email}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Phone className="w-3 h-3 mr-1" />
                            {appointment.phone}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{appointment.message}</p>
                      </div>
                    </TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{appointment.preferredDate}</p>
                        <p className="text-sm text-gray-500">{appointment.preferredTime}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                    <TableCell>{appointment.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {appointment.status === 'pending' && (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleConfirm(appointment.id)}
                              className="text-green-600 hover:text-green-700"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleCancel(appointment.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4" />
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

export default AdminAppointments;
