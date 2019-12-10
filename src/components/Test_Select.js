import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown , Image } from 'semantic-ui-react';



const languageOptions = [
    { key: 'Java & OOPs', text: 'Java & OOPs', value: 'Java & OOPs' },
    { key: 'HTML & CSS', text: 'Chinese', value: 'Chinese' },

]

const Test_Select = () => {
    return (
        <div style ={{"paddingTop" : "150px" , "marginLeft":"420px" , "fontSize" : "30px"}}>
            Select the Language  <br /><br />
        <div > 
            <Dropdown
                button
                className='icon'
                floating
                labeled
                icon='world'
                options={languageOptions}
                search
                text='Technology'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/common' text="Java" />
                    <Dropdown.Item as={Link} to='/common' text="HTML CSS" />
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <Image src="images/Perficient_logo.jpg" size='medium' style={{ "marginTop": "205px" }} />
        </div>
    )
}
export default Test_Select;