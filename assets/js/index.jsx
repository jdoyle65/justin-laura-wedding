import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import RsvpRoot from './react/components/RsvpRoot';


(() => {
    const rsvpRoot = ReactDOM.render(
        <RsvpRoot />,
        document.getElementById('react-rsvp-root')
    );

})();