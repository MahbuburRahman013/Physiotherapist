"use client"
import Dashboard from "@/mainComponents/dashboard/Dashboard"
import { useEffect, useState } from "react";


function DashboardPage() {


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="px-3">
        <Dashboard/>
    </div>
  )
}

export default DashboardPage