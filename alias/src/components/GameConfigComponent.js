import React, { Component } from 'react';

class GameConfig extends Component {
    constructor() {
        super();
        this.state = {
            teams: []
        };
        this.startGame = this.startGame.bind(this);
        this.teamName = React.createRef();
        this.addTeam = this.addTeam.bind(this);
        this.removeTeam = this.removeTeam.bind(this);
    }

    removeTeam(index) {
        var newArr = [...this.state.teams];
        newArr.splice(index,1);
        this.setState({
            teams: newArr
        })
    }

    addTeam() {
        var newTeamName = this.teamName.current.value;
        if (newTeamName) {
            var newTeams = this.state.teams.concat(newTeamName);
            this.setState({
                teams: newTeams
            });
            this.teamName.current.value = "";
        }
    }

    startGame(event) {
        event.preventDefault();
        alert("Start");
    }


    render() {
        const teams = this.state.teams;
        return (
            <div className='setting'>
                <div>
                    <ul className='teams'>
                        {teams.map((item, index) => {
                            return (
                                <li key={index} onClick ={()=> this.removeTeam(index)}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <form onSubmit={this.startGame}>
                    <div>
                        <input type='text' ref={this.teamName} className='team-input'></input>
                        <button type='button' id='addbutton' className='team-add-button' onClick={this.addTeam}>Add team</button>
                    </div>
                    <div>
                        <button>Go</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GameConfig;
