import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import { newLogin } from '../actions';


class CredentialsPage extends React.Component{
    onFormSubmit = values =>{
      this.props.newLogin(values);
      this.props.history.push('/test');
    }
    render(){
        console.log(this.props);
        const { handleSubmit } = this.props;
        return (
            <form onSubmit = {handleSubmit(this.onFormSubmit)} >
              <div>
                <label htmlFor="Name">Name</label>
                <Field name="Name" component="input" type="text" required/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" required />
              </div>
              <button
               type="submit">Submit</button>
            </form>
          )
    }
}

const dispatchStateToProps = {
  newLogin : newLogin
}


export default withRouter(connect(null , dispatchStateToProps)(reduxForm({form : 'eventForm'})(CredentialsPage)));