import Service from "@/mainComponents/service/Service"
import Banner from "@/mainComponents/sheared/Banner"


function ServicePage() {
  return (
    <div>
      <Banner bgImg={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_242057780-1.jpg'} title={'Services'} />
      <Service/>
    </div>
  )
}

export default ServicePage