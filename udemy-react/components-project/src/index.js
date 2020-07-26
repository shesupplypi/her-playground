import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

//the code is poorly written, with the class comment duplicated within the app three times to display the comment 3 times
//then rendered the comment detail component into the app
//to do this, had to export the comment detail to make it available to other parts of app
//then, had to import it into index.js to make it available for use
//then we can render it into our other component via component nesting

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));