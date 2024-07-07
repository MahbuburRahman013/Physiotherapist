"use client"
import { Button } from "@/components/ui/button"
import useAxiosPublic from "@/hooks/useAxiosPublic"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Swal from 'sweetalert2'

function Delete({ blog }) {
    const axiosPublic = useAxiosPublic()
    const router = useRouter()

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`delete-blog/${id}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                            router.push('/dashboard/manage')
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            router.push('/dashboard/manage')
                            router.push('/dashboard/manage')
                            router.push('/dashboard/manage')
                        }
                    })


            }
        });



    }

    return (
        <div>
            <Button onClick={() => handleDelete(blog._id)} variant="outline" className="bg-red-200 hover:bg-red-300" size="icon">
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default Delete