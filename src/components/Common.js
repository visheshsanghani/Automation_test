import React from 'react';
import { Form, Radio, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const data = [{ "id": 1, "Question": "In hac habitasse platea dictumst.", "Option_1": "Alfa", "Option_2": "Mike Whiskey", "Option_3": "Juliett Romeo", "Correct": "Alfa" },
{ "id": 2, "Question": "Donec posuere metus vitae ipsum.", "Option_1": "India Hotel", "Option_2": "Delta", "Option_3": "Golf", "Correct": "India Hotel" },
{ "id": 3, "Question": "Aliquam quis turpis eget elit sodales scelerisque.", "Option_1": "Papa", "Option_2": "Papa", "Option_3": "Victor", "Correct": true },
{ "id": 4, "Question": "In est risus, auctor sed, tristique in, tempus sit amet, sem.", "Option_1": "Delta", "Option_2": "Papa", "Option_3": "Sierra Quebec", "Correct": false },
{ "id": 5, "Question": "Suspendisse potenti.", "Option_1": "Yankee India", "Option_2": "Bravo", "Option_3": "Lima", "Correct": true }];

class Common extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            q  : 0,
            score : 0
        }
    }

    handleChange = (e, { value }) => this.setState({ value })

    onClickHandler = () =>{
        
        this.state.value === data[this.state.q].Correct ?
        this.setState({
            q : this.state.q+1,
            score : this.state.score +1
        })
        
        :
        this.setState({
            q : this.state.q+1
        })
        console.log("SCore", this.state.score)
        console.log("Value", this.state.value) 
    }

    onPrevClickHandler = () =>{
        
        this.state.value === data[this.state.q].Correct ?
        this.setState({
            q : this.state.q-1,
            score : this.state.score +1
        })
        
        :
        this.setState({
            q : this.state.q-1
        })
        console.log("SCore", this.state.score)
        console.log("Value", this.state.value) 
    }

    onSubmit = () =>{
        console.log("SCore", this.state.score)
    }
    
    render(){
    return (
        <div>
     <Form>
        <Form.Field>
          {`${data[this.state.q].Question}`}
        </Form.Field>
        <Form.Field>
          <Radio
            label=  {`${data[this.state.q].Option_1}`}
            name='radioGroup'
            value = 'Alfa'
            checked={this.state.value === 'Alfa'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={`${data[this.state.q].Option_2}`}
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={`${data[this.state.q].Option_3}`}
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button positive disabled = {this.state.q <= 0 } onClick = {this.onPrevClickHandler} content = "Previous"/>
        <Button positive disabled = {this.state.q >= data.length-1 } onClick = {this.onClickHandler} content = "Next"/>
        <Button negative as = {Link} to = '/final'onClick = {this.onSubmit} content = "Submit Test"/>
      </Form>
        </div>
    )
    }
}

export default Common;