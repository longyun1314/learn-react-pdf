import { MobilePDFReader } from 'react-read-pdf';
import React, {Component} from 'react';
const pdfURL = require("./sample.pdf");
/* 移动端的pdf阅读 控制台会报错，是库里的报错*/
export default class Test extends Component{
  render(){
    return <div style={{overflow:'scroll',height:600}}>
            <MobilePDFReader url={pdfURL}/>
           </div>
  }
}