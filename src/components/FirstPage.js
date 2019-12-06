import React from 'react';

import { Image  , Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const FirstPage = () => {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <Image src="images/Perficient_logo.jpg" size='medium' className="ui centered image" style={{ "marginTop": "200px" }} />
                </div>
                <div className="col-6" style={{ "textAlign": "center", "fontSize": "35px", "marginTop": "200px"  }}>
                    Enter to Take the test
                    <br/>
                    <br />
                    <Link to = "/credentials">
                    <Button inverted  size='huge' color='green'>
                        Perficient
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;