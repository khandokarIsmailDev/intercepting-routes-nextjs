import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='bg-gray-200'>
            This is Folder 1 <br/>

            <Link className='text-green-500' href="/folder1/folder2"> Navigate folder 2</Link>
        </div>
    );
};

export default page;