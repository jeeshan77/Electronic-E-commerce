import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - HearWithJee`;
        } else {
            document.title = 'HearWithJee | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};
// process
export default useDocTitle;
