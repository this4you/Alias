import React, { Component } from 'react';
import ls from 'local-storage';
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
const RoundState = {
    Start: "Start",
    InProgress: "InProgress",
    Pause: "Pause",
    Finish: "Finish"
};
class RoundComponent extends Component {
    constructor(props) {
        super(props);
        const { team, time, roundState } = ls.get("CurrentRound");
        this.state = {
            team: team,
            time: time,
            roundState: roundState || RoundState.Start
        }
        this.startRound = this.startRound.bind(this);
    }

    componentDidMount() {
        if (!this.state.team) {
            this.props.history.push('/gameconfig');
            return;
        }
    }

    startRound() {
        var scope = this;
        this.setState({
            roundState: RoundState.InProgress
        });
        this.interval = setInterval(() => {
            if (this.state.time > 0) {
                this.tick();
            } else {
                clearInterval(scope.interval);
                this.setState({
                    roundState: RoundState.Finish
                });
            }
        }, 1000);
    }

    tick() {
        this.setState(state => ({
            time: state.time - 1
        }));
    }

    render() {
        const roundState = this.state.roundState;
        const time = this.state.time || "00";
        if (roundState === RoundState.Start) {
            return (
                <div>
                    <span className='start-round-button' onClick={ this.startRound}>
                        Start
                    </span>
                </div>
            )
        } else if (roundState === RoundState.InProgress) {
            return (
                <>
                    <div className='timer'>
                        <span>{time}</span>
                        <FaPause preserveAspectRatio='xMidYMin' className='pause' />
                    </div>
                    <div className='word'>
                        <h1>{this.state.roundState}</h1>
                    </div>
                    <div className='round-controls'>
                        <span>
                            <FaCheck />
                        </span>
                        <span>
                            <FaTimes />
                        </span>
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    Round result
                </div>
            )
        }
    }
}

export default RoundComponent;
