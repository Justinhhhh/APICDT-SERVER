import React, { Component } from 'react';

class Footer extends Component{
    render() { 
        return ( 
            <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div>
                    <h4>联系方式</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <h4>关注我们</h4>   
                </div>
                <div className="col-12 ">
                  <h4>合作伙伴 Title Partner</h4>
                </div>
                <div className="col-12 ">
                  <h4>宣传伙伴 Supporting Partner</h4>
                </div>
                <div className="col-12 ">
                  <h4>赞助商 Sponsors</h4>
                </div>
                <div className="col-12 ">
                  <h4> 媒体伙伴 Media Partners</h4>
                </div>
            </div>
        </div>
        );
    }
}
 export default Footer;