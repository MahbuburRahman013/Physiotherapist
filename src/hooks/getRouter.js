"use client"

import { useRouter } from "next/router"

function getRouter() {
 const route = useRouter()
 return route;
}

export default getRouter