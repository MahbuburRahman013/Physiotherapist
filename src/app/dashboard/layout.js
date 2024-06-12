import Sidebar from "@/mainComponents/dashboard/Sidebar";
import dynamic from "next/dynamic";
const PrivateRoute = dynamic(()=> import('@/mainComponents/auth/PrivateRoute'), {
  ssr: false
})

function DashboardLayoutPage({ children }) {
  return (
    <PrivateRoute>
      <div className="flex justify-between min-h-screen overflow-auto">
        <Sidebar />
        <div className="flex-1 px-3 py-5 min-w-[700px]"> {children}</div>
      </div>
    </PrivateRoute>
  );
}

export default DashboardLayoutPage;
