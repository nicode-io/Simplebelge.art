import *  as React from 'react';

import './wp-post.styles.css';
import {WpAuthor}  from '../wp-author/WpAuthor';

interface iWpPostProps {
    post: tWpPost;
}

export const WpPost: React.FC<iWpPostProps> = ({post}) => {
    const {author, title} = post;
    const date = new Date(post.date).toDateString();

    return (
        <div>
            <h1>{title.rendered}</h1>
            <div>
                <p>{date}</p>
            </div>
            <WpAuthor {...{author}} />
        </div>
    );
};
