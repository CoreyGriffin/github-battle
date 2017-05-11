import React, { Component } from 'react';
import api from '../utils/api';
import SelectLang from './SelectLang';
import RepoGrid from './RepoGrid';
import Loading from './Loading';

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedLang: 'All', repos: null, }
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    
    componentDidMount () {
        //make any ajax requests here
       this.updateLanguage(this.state.selectedLang);
    }

    updateLanguage(lang) {
        this.setState({ selectedLang: lang });
        api.fetchPopularRepos(lang)
        .then(function (repos) {
            this.setState(function () {
            return {
                repos: repos
            }
            });
        }.bind(this));
    } 

    render() {
        return (
           <div>
            <SelectLang 
                selectedLang={this.state.selectedLang}
                onSelect={this.updateLanguage} />

                {!this.state.repos ? <Loading text='Fetching all the goods'/> : <RepoGrid repos={this.state.repos} />}
                
           </div>
        )
    }
}

export default Popular;