import * as React    from 'react';
import {wpFetchUser} from '../../../../services/wordpress-rest-api/wordpress-rest-api';

interface iWpAuthor {
    author: number;
}

export const WpAuthor: React.FC<iWpAuthor> = ({author}) => {
    const [authorData, setAuthorData] = React.useState<any>(null);

    const getAuthorData = async () => {
        const response = await wpFetchUser(author);

        if (response) {
            setAuthorData(response);
        }
    };

    React.useEffect(() => {
        void getAuthorData();
    }, []);

    return (
        <div>
            <h1>Post by:{authorData ? authorData.name : 'Author unknown'}</h1>
        </div>
    );
};
