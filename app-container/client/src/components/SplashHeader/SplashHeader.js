import React from "react";

import './SplashHeader.css';

class SplashHeader extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         logoSrc: `${this.props.host}/toptenmap/images/globeIcon.png`
      };
   }

   render() {
      return (
         <><div id="SplashHeaderContainer" class="container">
               <div class="row"> 
                  <div class="col-5 d-flex align-items-center justify-content-center">
                     <h5>Tom Connolly</h5>
                  </div>
                  <div class="col-2">
                     <img class="mx-auto d-block" width="100" height="100" src={this.state.logoSrc}/>
                  </div>
                  <div class="col-5 d-flex align-items-center justify-content-center">
                     <h5>toptenmap</h5>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
export default SplashHeader;