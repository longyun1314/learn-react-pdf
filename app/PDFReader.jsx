import { PDFReader  } from 'react-read-pdf';
import React, {Component} from 'react';
const pdfURL = require("./sample.pdf");
/* 浏览器版pdf 不能分页*/
export default class Test extends Component{
  render(){
    return <div style={{overflow:'scroll',height:600}}>
            <PDFReader  showAllPage ='true' url={pdfURL}/>
           </div>
  }
}