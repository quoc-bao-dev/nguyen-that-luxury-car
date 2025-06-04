import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  User,
  Bell,
  Home,
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Quản lý bài viết", href: "/admin/posts", icon: FileText },
    { name: "Lịch tư vấn", href: "/admin/appointments", icon: Calendar },
    { name: "Cài đặt", href: "/admin/settings", icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-stretch">
      {/* Sidebar */}
      <div className="h-fit sticky top-0">
        <div
          className={`top-0 overflow-hidden h-screen z-50 w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out border-r border-gray-200 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static lg:w-72`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <LayoutDashboard className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Thật Nguyễn</h1>
                <p className="text-sm text-blue-100">Admin Panel</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:bg-blue-600 p-2 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="mt-8 px-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                  flex items-center px-4 py-3 text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group
                  ${
                    location.pathname === item.href
                      ? "bg-blue-50 text-blue-700 border-r-4 border-blue-600 font-medium"
                      : ""
                  }
                `}
                >
                  <item.icon
                    className={`w-5 h-5 mr-3 ${
                      location.pathname === item.href
                        ? "text-blue-600"
                        : "text-gray-500 group-hover:text-blue-600"
                    }`}
                  />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Quick Actions */}
          <div className="mx-4 mt-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Thao tác nhanh
              </h3>
              <div className="space-y-2">
                <Link
                  to="/admin/posts/new"
                  className="block text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  + Tạo bài viết mới
                </Link>
                <Link
                  to="/admin/appointments"
                  className="block text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  📅 Xem lịch tư vấn
                </Link>
              </div>
            </div>
          </div>

          {/* User Profile & Logout */}
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">
                  Administrator
                </p>
                <p className="text-xs text-gray-500">Quản trị viên hệ thống</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Đăng xuất
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden mr-4 p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {menuItems.find((item) => item.href === location.pathname)
                    ?.name || "Dashboard"}
                </h2>
                <p className="text-sm text-gray-500">
                  Quản lý website Thật Nguyễn
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <Link
                to="/"
                target="_blank"
                className="flex items-center text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Xem trang chủ
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 min-h-screen">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
