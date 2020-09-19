import React, { Component } from 'react';
import ls from 'local-storage';
import classNames from "classnames";

class GamePlatform extends Component {
    constructor(props) {
        super(props);
        const teams = ls.get("teams") || [];
        this.state = {
            teams: teams,
            activeTeam: ls.get('activeTeam') || (teams.length > 0 && teams[0]) || null
        };
        this.startRound = this.startRound.bind(this);
    }

    startRound() {
        ls.set("CurrentRound", {
            team: this.state.activeTeam,
            time: 60,
            score: 0
        });
    }

    componentDidMount() {
        const currentRound = ls.get("CurrentRound");
        if (this.state.teams.length === 0) {
            this.props.history.push('/gameconfig');
        } else if (currentRound) {
            this.props.history.push('/gameround');
        }
    }

    render() {
        const teams = this.state.teams || [];
        return (
            <div>
                {teams.map((item, index) => {
                    return (
                        <div key={index} className={classNames("team-platform", {
                            'team-active': item === this.state.activeTeam
                        })} style={{ color: item.color }}>{item.name}
                            <span className='team-score'>{item.score}</span>
                        </div>
                    )
                })}
                <div>
                    <button onClick={this.startRound} className='start-game-button'>Let's go</button>
                </div>
            </div>
        )
    }
}

export default GamePlatform;
