import { Document, Page } from 'react-pdf';
import React, {Component} from 'react';
const pdfURL = require("./sample.pdf");
//单页实现
class PDFViewer extends Component{
    render() {
        return (
          <Document
            file={pdfURL}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={1} />
          </Document>
        );
      }
  }
  
  export default PDFViewer