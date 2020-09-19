import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import randomColor from  'randomcolor';
import ls from 'local-storage';
function RenderTeams({ teams, removeTeam}) {
    if (teams && teams.length === 0)
        return (
            <p>
                Create first team ...
            </p>
        )
    else
        return (
            <ul className='teams' >
                {
                    teams.map((item, index) => {
                        return (
                            <li key={index} onClick={() => removeTeam(index)} style={{color:item.color}}>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul >
        )
}

class GameConfig extends Component {
    constructor(props) {
        super(props);
        if (ls.get("gameIsStart")) {
            this.props.history.push('/gameplatform');
        }
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
        newArr.splice(index, 1);
        this.setState({
            teams: newArr
        })
    }

    addTeam() {
        const newTeamName = this.teamName.current.value;
        if (newTeamName) {
            const newTeam = {
                name: newTeamName,
                color: randomColor(),
                score: 0
            };
            const newTeams = this.state.teams.concat(newTeam);
            this.setState({
                teams: newTeams
            });
            this.teamName.current.value = "";
        }
    }

    startGame(event) {
        event.preventDefault();
        console.log(this.props);
        const teams = this.state.teams;
        if (teams.length > 1) {
            ls.set('teams', teams);
            ls.set('gameIsStart', true);
            this.props.history.push('/gameplatform');
        } else 
            alert("Add more 1 team for to start game!");
    }


    render() {
        const teams = this.state.teams;
        return (
            <div className='setting'>
                <div>
                    <RenderTeams teams={teams} removeTeam={this.removeTeam} />
                </div>
                <form onSubmit={this.startGame}>
                    <div>
                        <div>
                            <input type='text' ref={this.teamName} className='team-input'></input>
                        </div>
                        <div>
                            <FaPlus className='team-add-button' onClick={this.addTeam} />
                        </div>
                    </div>
                    <div>
                        <button className='start-game-button'>Go</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GameConfig;
