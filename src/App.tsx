import React         from 'react';

import './App.css';
import {WpBooksList} from './features/wp-posts/components/wp-books-list/WpBooksList';
import {WpPostsList} from './features/wp-posts/components/wp-posts-list/WpPostsList';

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Simplebelge.art</h1>
                <WpPostsList/>
                <WpBooksList/>
            </header>
        </div>
    );
};
