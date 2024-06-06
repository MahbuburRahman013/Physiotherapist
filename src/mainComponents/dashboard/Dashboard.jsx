"use client"
import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';


const img_hosting_api = `https://api.imgbb.com/1/upload?key=dba83ae483256811942a712f4a815835`

function Dashboard() {
    const [content, setContent] = useState('');
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)
   
    

    const handleModelChange = (model) => {
        setContent(model);
    };

    // console.log(content)

    const submitPost = async (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.files[0];
        const imgFile = { image: photo }
        const res = await axiosPublic.post(img_hosting_api, imgFile, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        })
        const img_url = res?.data?.data?.display_url;
        const formData = {
            title,
            img_url,
            content
        };

        if (img_url) {

            axiosPublic.post('/single-blog', { formData })
                .then(res => {
                    if (res.data.acknowledged) {
                        setLoading(false)
                       
                    }
                })
                .catch(err=> {
                    setLoading(false)
                })
        }

    };

    

    return (
        <div className="lg:container mx-auto my-20 rounded-md p-4  shadow-lg border">
            <h1 className='mb-6 font-semibold text-3xl '>Post A Blog</h1>
            <form onSubmit={submitPost} className='w-full flex flex-col gap-y-5'>

                <div className="mb-2 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] rounded">
                    <Label htmlFor="title">Title</Label>
                    <Input required name='title' id='title' type="text" placeholder="Title" />
                </div>

                <div className="mb-2 w-full cursor-pointer md:w-[80%] lg:w-[60%] xl:w-[50%] rounded">
                    <Label htmlFor="picture">Banner Photo</Label>
                    <Input required name='photo' id="picture" type="file" />
                </div>

                <FroalaEditor
                    tag='textarea'
                    model={content}
                    onModelChange={handleModelChange}
                    config={{
                        placeholderText: 'Edit Your Blog Details Here!',
                        charCounterCount: false,
                        toolbarButtons: [
                            'bold', 'italic', 'underline',
                            'fontSize', 'color',
                            'outdent', 'indent', 'undo', 'redo', 'clearFormatting', 'selectAll', 'align','formatOL', 'formatUL'
                        ],
                        fontSizeSelection: true,
                        fontSize: ['8', '10', '12', '14', '16', '18', '24', '30', '36', '42', '48'],
                        listAdvancedTypes: true,
                       

                    }}
                />

                {
                    loading ?
                        <Button className='w-fit rounded-md' disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button> :
                        <Button
                            type='submit'
                            className='w-fit lg:px-12 px-5 rounded-md'
                        >
                            Submit
                        </Button>
                }

            </form>


        </div>
    );
}

export default Dashboard