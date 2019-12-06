import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';



const languageOptions = [
    { key: 'Java & OOPs', text: 'Java & OOPs', value: 'Java & OOPs' },
    { key: 'HTML & CSS', text: 'Chinese', value: 'Chinese' },

]

const Test_Select = () => {
    return (
        <div style ={{"paddingTop" : "200px" , "paddingLeft":"400px" , "fontSize" : "30px"}}>
            Enter the Language test must happen in <br /><br />
        <div > 
            <Dropdown
                button
                className='icon'
                floating
                labeled
                icon='world'
                options={languageOptions}
                search
                text='Select Language'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/common' text="Java" />
                    <Dropdown.Item as={Link} to='/common' text="HTML CSS" />
                </Dropdown.Menu>
            </Dropdown>
        </div>
        </div>
    )
}
export default Test_Select;