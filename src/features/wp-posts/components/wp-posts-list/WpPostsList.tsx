import * as React        from 'react';
import {wpFetchAllPosts} from '../../../../services/wordpress-rest-api/wordpress-rest-api';
import {WpPost}          from '../wp-post/WpPost';

export const WpPostsList: React.FC = () => {
    const [posts, setPosts] = React.useState<tWpPost[]>([]);

    const checkPosts = async () => {
        const response = await wpFetchAllPosts();

        if (response) {
            setPosts(response);
        }
    };

    React.useEffect(() => {
        void checkPosts();
    }, []);

    return (
        <div id="post__container">
            <div>
                {posts.length !== 0 && posts.map(post =>
                    <WpPost post={post} key={post.id}/>
                )}
            </div>
        </div>
    );
};
