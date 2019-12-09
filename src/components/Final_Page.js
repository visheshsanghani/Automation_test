import React from 'react';
import {withRouter} from 'react-router';

const Final_Page = ({history}) =>{
    window.addEventListener("popstate", () => {
        history.push('/');
      });
    
    return(
        <div>
            You have completed the test.
        </div>
    );
}

export default withRouter(Final_Page);