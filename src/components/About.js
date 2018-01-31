import React from 'react';

const About = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello About!</h1>
            <p>Hello you are at {props.match.params.name}, is good to be with you!</p>
        </div>
        
    );
};

export default About;