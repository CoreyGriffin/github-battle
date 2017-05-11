import React from 'react';
import PropTypes from 'prop-types';

function SelectLang (props) {
     let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
        <ul className="languages">
            {languages.map((lang) => {
            return (
                <li key={lang} 
                    onClick={props.onSelect.bind(null, lang)}
                    style={lang === props.selectedLang ? {color: '#d0021b'} : null}>
                    {lang}
                </li>
                )
            })}
        </ul>
    )
}

SelectLang.PropTypes = {
    selectedLang: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default SelectLang;