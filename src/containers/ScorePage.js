import React from 'react';
import '../css/ScorePage.css';


function ScorePage(props) {
    let justScores= [];
    let scores = [];
    let maxScores;
    let  winner;
    let max;
 
    Object.values(props.location.state.stateFinal.userNames).map(user => {

        if(props.location.state.userScores[user] >= 0){ 
                scores.push( {
                    user: user,
                    score: props.location.state.userScores[user]
                })
                justScores.push(props.location.state.userScores[user])
                max = Math.max(...justScores)
                maxScores= justScores.filter(function(item){
                    return item === max;
                });
        }})
    
        if(maxScores.length === 1 && scores.length > 1 ) {
            let sorted = scores.sort((a, b) =>{return b.score - a.score });
            winner = [sorted[0].user]
        } else if(maxScores.length > 1 && scores.length > 1) {
            let result = scores.filter(item => item.score === max)
            winner = result.map(x => x.user)  
        } else{
            winner = []
        }

        
    return(
        <div className="scorepage-container">
            <h1>Final Scores</h1>
            <div className="scores-container">
                {winner.length === 1 ? <h2>The winner is: {winner[0]}</h2> : winner.length > 1 ? <h2>The winners are: {winner.join(', ')}</h2> : <h2> Good Job!</h2>  }

                    {(Object.values(props.location.state.stateFinal.userNames)).map(user => {
                        return (<h3 key={user}>{user}:&#160;&#160;&#160;{props.location.state.userScores[user]}</h3>)
                    })}

            </div>
        </div>
    );
}

export default ScorePage;