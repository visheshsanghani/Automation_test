import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { newLogin } from '../actions';

import { Button, Form, Segment , Image} from 'semantic-ui-react';

class CredentialsPage extends React.Component {
  onFormSubmit = values => {
    this.props.newLogin(values);
    this.props.history.push('/test');
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style = {{ 'marginLeft' : '200px' , 'paddingTop': '50px' , 'marginRight' : '200px', "fontSize" : "30px" }}>
        <div>
          Please Enter Your Details
        </div>
        <Segment inverted>
        <Form inverted onSubmit={handleSubmit(this.onFormSubmit)} className ="ui huge form" >
          <div>
            <label htmlFor="Name">Name :</label>
            <Field name="Name" component="input" type="text" required />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email : </label>
            <Field name="email" component="input" type="email" required />
          </div>
          <br />
          <Button primary
            type="submit">Submit</Button>
          <Button 
           onClick = { () => this.props.history.push('/')} content = 'Cancel'></Button>
        </Form>
        </Segment>
        <Image src="images/Perficient_logo.jpg" size='medium' className="ui centered image" style={{ "marginTop": "120px" }} />
      </div>
    )
  }
}

const dispatchStateToProps = {
  newLogin: newLogin
}


export default withRouter(connect(null, dispatchStateToProps)(reduxForm({ form: 'eventForm' })(CredentialsPage)));