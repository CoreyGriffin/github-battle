import React, {Component} from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import Player from './Player';
import PlayerPreview from './PlayerPreview';
import Loading from './Loading';

class Results extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }
    
    componentDidMount() {
        let players = queryString.parse(this.props.location.search);
        api.battle([ 
            players.playerOneName, 
            players.playerTwoName,
            ]).then(function (players) {
                if(players === null) {
                    return this.setState(function() {
                        return {
                            error: 'Looks like something went wrong. Check that both users entered exist on Github',
                            loading: false,
                        }
                    });
                }
            //no error found...
                this.setState(function() {
                    return {
                        error: null,
                        winner: players[0],
                        loser: players[1],
                        loading: false,
                    }
                });
            }.bind(this));
    }
    
    render() {
        let error = this.state.error;
        let winner = this.state.winner;
        let loser = this.state.loser;
        let loading = this.state.loading;

        if(loading === true) {
            return <Loading />
        }

        if (error) {
            return (
                <div className="error-msg">
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }

        return (
            <div className="row">
                <Player 
                    label='Winner'
                    score={winner.score}
                    profile={winner.profile}
                />
                <Player
                    label='Loser'
                    score={loser.score}
                    profile={loser.profile}
                />
            </div>
        )
    }
}


export default Results;