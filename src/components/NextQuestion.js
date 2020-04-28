import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class NextQuestion extends Component {
    constructor(){
        super()
        this.state={
            previousQuestionNumber: null
        }
    }

    componentDidMount() {
        this.getParam();
     }
 
     getParam = () => {
         this.setState({
             previousQuestionNumber: parseInt(this.props.match.params.previousQuestionNum),
         });
     }


    render() {
        let qNumber = this.state.previousQuestionNumber;
        let nextQuestionNumber = qNumber + 1;
        let nextQNumberString = nextQuestionNumber.toString();
        console.log(typeof(nextQuestionNumber));
        console.log(typeof(nextQNumberString));
        console.log(nextQuestionNumber);
        console.log(nextQNumberString);
        console.log(this.props.location.state.questionContent);
        return (
            <div>
                <h1>Next Question</h1>
               <Link to={{pathname:`/question/${nextQNumberString}`, state: {questionContent: this.props.location.state.questionContent}}} ><input type="submit"  value="Next Question"/></Link>
            </div>
        )
    }
}

export default NextQuestion;



