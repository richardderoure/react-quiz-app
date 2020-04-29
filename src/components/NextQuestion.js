import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

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
        let questionNumber = this.state.previousQuestionNumber;
        let nextQuestionNumber = questionNumber + 1;
        let nextQNumberString = nextQuestionNumber.toString();
        let currentQuestionScores = this.props.location.state.questionScores;
        console.log(typeof(nextQuestionNumber));
        console.log(typeof(nextQNumberString));
        console.log(nextQuestionNumber);
        console.log(nextQNumberString);
        console.log(this.props.location.state.questionStateNext);
        let stateNext = this.props.location.state.questionStateNext;
        return (
            <div>
                <h1>Next Question</h1>
                    
                {questionNumber == 9 ? <Link to={{ pathname:"/scores", state:{userScores: currentQuestionScores, stateFinal: stateNext }}}><input type="button" value="View Scores!" /></Link> : <Link to={{pathname:`/question/${nextQNumberString}`, state: {qNumber: nextQuestionNumber, questionState: stateNext, previousQuestionScores: currentQuestionScores}}} ><input type="submit"  value="Next Question"/></Link>}
          </div>
               
            
        )
    }
}

export default NextQuestion;


