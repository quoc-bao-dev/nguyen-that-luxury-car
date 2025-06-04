export default function PageLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin" />
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Đang tải nội dung...
        </p>
      </div>
    </div>
  );
}
