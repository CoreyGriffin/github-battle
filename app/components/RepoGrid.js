import React from 'react';
import PropTypes from 'prop-types';

function RepoGrid (props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function (repo) {
        return (
          <li key={repo.name} className='popular-item'>
          <div className="header"></div>
           <div className="repo-content">
            <ul className='space-list-items'>
              <li>
                <div className="avatar-wrapper">
                    <img
                        className='avatar'
                        src={repo.owner.avatar_url}
                        alt={'Avatar for ' + repo.owner.login}
                    />
                </div>
              </li>
              <li>
                <h2 className="repo-header">{repo.name}</h2>
                <p className="repo-description">{repo.description}</p>
              </li>
              <li>
                <div className="repo-meta">
                    <span className="stars">{repo.stargazers_count.toLocaleString()} stars</span>
                    <span className="visit-btn"><a href={repo.html_url}>Visit</a></span>
                </div>
              </li>
            </ul>
           </div>
        </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
   repos: PropTypes.array.isRequired,
}

export default RepoGrid;