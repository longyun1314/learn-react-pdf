import { Document, Page } from 'react-pdf';
import React, {Component} from 'react';
// const pdfURL = require("./test.pdf");
import samplePDF from './sample.pdf';
//多页实现 推荐
export default class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
    }
  }
  onDocumentLoadSuccess = (document) =>{
    const { numPages } = document;
    this.setState({
      numPages,
    });
  }

  render() {
    const { numPages } = this.state;

    return (
      <Document
        file={samplePDF}
        onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )}
      </Document>
    );
  }
}