import React from 'react'
import { Document, Page } from 'react-pdf'

import test from './Dark_Days.pdf'

function PDFViewer() {

    return (
        <Document file={test}>
            <Page pageNumber={1} />
        </Document>
        //The API version "3.3.122" does not match the Worker version "2.15.349".
    )
}

export default PDFViewer