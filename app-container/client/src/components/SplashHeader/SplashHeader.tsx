import React from "react";

import './SplashHeader.css';

import globeIcon from "../../../public/images/globeIcon.png";

interface Props {
   host: string
};

interface State {
   logoSrc: string
};

class SplashHeader extends React.Component<Props, State> {
   constructor(props: Props) {
      super(props);
      this.state = {
         logoSrc: `${this.props.host}/toptenmap/images/globeIcon.png`
      };
   }

   render() {
      return (
         <div id="SplashHeaderContainer" className="container">
            <div className="row"> 
               <div className="col-5 d-flex align-items-center justify-content-center">
                  <h5>Tom Connolly</h5>
               </div>
               <div className="col-2">
                  <img className="mx-auto d-block" width="100" height="100" src={globeIcon}/>
               </div>
               <div className="col-5 d-flex align-items-center justify-content-center">
                  <h5>toptenmap</h5>
               </div>
            </div>
         </div>
      );
   }
}
export default SplashHeader;