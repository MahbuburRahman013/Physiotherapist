"use client"
import {useQuery} from '@tanstack/react-query'

async function getAllManageBlog() {
    const {data} = useQuery({
        queryKey:['dashboard-all-blogs'],
        queryFn: async ()=> {
            const result = await fetch(`https://physiotherapistserver.vercel.app/all-blogs-manage`, {
                cache: "no-cache",
              });

              return await result.json();
        }
    }) 
    
      return [data];
}

export default getAllManageBlog
