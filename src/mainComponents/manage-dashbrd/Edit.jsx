import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Edit({ queryTitle }) {
    return (
        <div>
            <Link href={`/dashboard/manage/${queryTitle}`}>
                <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    )
}

export default Edit