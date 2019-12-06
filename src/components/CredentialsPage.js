import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';


class CredentialsPage extends React.Component{


    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit = {handleSubmit} >
              <div>
                <label htmlFor="Name">Name</label>
                <Field name="Name" component="input" type="text" required/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
              </div>
              <button type="submit">Submit</button>
            </form>
          )
    }
}


export default connect(null , null)(reduxForm({form : 'eventForm'})(CredentialsPage));