import dynamic from 'next/dynamic'
 
const Dashboard = dynamic(() => import('@/mainComponents/dashboard/Dashboard'), {
  ssr: false,
})

function DashboardPage() {

  return (
    <div className="px-3">
        <Dashboard/>
    </div>
  )
}

export default DashboardPage