import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


const Blog = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        <div className='p-5 min-h-[83vh]'>
            <h2 className='text-4xl text-center font-bold'>Blog Page</h2>
            <div>
                <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                </div>
            <div className='p-5'>

                <h2 className='text-xl font-medium text-gray-600'> Tell us the differences between uncontrolled and controlled components.</h2>
                <p>Ans :CONTROLLED COMPONENT	Does not maintain its internal state, UNCONTROLLED COMPONENT Maintains its internal state.</p>
                <h2 className='text-xl font-medium text-gray- 600'>How to validate React props using PropTypes</h2>
                <p>Ans :PropTypes.any : The prop can be of any data type. PropTypes.bool : The prop should be a Boolean. PropTypes.number : The prop should be a number. PropTypes.string : The prop should be a string. PropTypes.func : The prop should be a function. PropTypes.array : The prop should be an array.</p>
                <h2 className='text-xl font-medium text-gray- 600'>Tell us the difference between nodejs and express js.</h2>
                <p>Ans :Express is a minimal and flexible node. js web application framework, other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications</p>
                <h2 className='text-xl font-medium text-gray- 600'>What is a custom hook, and why will you create a custom hook?</h2>
                <p>Ans :Custom React JS hooks  makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;