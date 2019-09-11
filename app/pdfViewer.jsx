import { Document,Outline, Page } from 'react-pdf';
import React, {Component} from 'react';
// const pdfURL = require("./test.pdf");
import samplePDF from './sample.pdf';
//单页加目录链接实现
export default class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
    }
  }

  onItemClick = ({ pageNumber }) => this.setState({ pageNumber });

  render() {
    const { pageNumber } = this.state;

    return (
      <Document file={samplePDF}>
        <Outline onItemClick={this.onItemClick} />
        <Page
          pageNumber={pageNumber || 1}
        />
      </Document>
    );
  }
}