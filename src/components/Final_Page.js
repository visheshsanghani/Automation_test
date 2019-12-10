import React from 'react';
import {withRouter} from 'react-router';
import {Image} from 'semantic-ui-react';

const Final_Page = ({history}) =>{
    window.addEventListener("popstate", () => {
        history.push('/');
      });
    
    return(
        <div style ={{"textAlign" : "center" , "paddingTop" : "80px" , "fontSize" : "50px" , "lineHeight" : "200%"}}>
            You have completed the test.
            <br />
            Thanks.
            <Image src="images/Perficient_logo.jpg" size='medium' className="ui centered image" style={{ "marginTop": "190px" }} />
        </div>
    );
}

export default withRouter(Final_Page);