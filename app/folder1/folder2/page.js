import React from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <h1>this is folder 2</h1> <br/>
            <Link className='text-red-500' href="/folder1">Back folder 1</Link> <br/> <br/>

            <Link className='text-blue-500' href="/folder1/folder3">navigate folder 3</Link>
        </div>
    );
};

export default page;