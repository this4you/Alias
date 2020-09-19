import React, { Component } from 'react';
import ls from 'local-storage';
import classNames from "classnames";
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

class RoundComponent extends Component {
    constructor(props) {
        super(props);
        const { team, time } = ls.get("CurrentRound");
        this.state = {
            team: team,
            time: time
        }
    }

    componentDidMount() {
        if (!this.state.team) {
            this.props.history.push('/gameconfig');
        }
    }

    render() {
        const time = this.state.time || "00";
        return (
            <>
                <div className='timer'>
                    <span>{time}</span>
                    <FaPause preserveAspectRatio='xMidYMin' className='pause' />
                </div>
                <div className='word'>
                    <h1>Word</h1>
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
    }
}

export default RoundComponent;
