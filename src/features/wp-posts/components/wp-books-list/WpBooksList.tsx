import * as React from 'react';

import {wpFetchAllBooks} from '../../../../services/wordpress-rest-api/wordpress-rest-api';

import {WpBook} from '../wp-book/WpBook';

export const WpBooksList: React.FC = () => {
    const [books, setBooks] = React.useState<tWpPost[]>([]);

    const checkPosts = async () => {
        const response = await wpFetchAllBooks();

        if (response) {
            setBooks(response);
            console.log(response);
        }


    };

    React.useEffect(() => {
        void checkPosts();
    }, []);

    return (
        <div id="post__container">
            <div>
                {books.length !== 0 && books.map(book =>
                    <WpBook book={book} key={book.id}/>
                )}
            </div>
        </div>
    );
};
