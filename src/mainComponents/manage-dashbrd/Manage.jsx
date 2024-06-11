import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import dynamic from "next/dynamic";

const Edit = dynamic(() => import('./Edit'), {
    ssr: false,
  })
const Delete = dynamic(() => import('./Delete'), {
    ssr: false,
  })




function Manage({ blogsData }) {

 

    return (
        <div>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="">No.</TableHead>
                        <TableHead>Photo</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="text-right">Edit</TableHead>
                        <TableHead className="text-right">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogsData?.map((blog, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>
                                <Image src={blog.img_url} height='50' width='60' />
                            </TableCell>
                            <TableCell>{blog.title}</TableCell>
                            <TableCell className="text-right">
                                <Edit queryTitle={blog.queryTitle} />
                            </TableCell>
                            <TableCell className="text-right">
                                <Delete blog={blog} />
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    );
}

export default Manage;
