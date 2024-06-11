import Sidebar from "@/mainComponents/dashboard/Sidebar";


function DashboardLayoutPage({ children }) {
 

  return (
    <div className="flex justify-between min-h-screen overflow-auto">
      <Sidebar/>
      <div className="flex-1 px-3 py-5 min-w-[700px]"> {children}</div>
    </div>
  );
}

export default DashboardLayoutPage;
