import { useEffect } from 'react';

/* Hook for changing the title */
export const useTitle = (title) => {
    useEffect(() => {
        const defaultTitle = document.title;
        const appTitle = 'FinanceForge';
        document.title = appTitle;
        // Reset the title when the component unmounts
        return () => {
            document.title = defaultTitle; 
        };
    }, []);
};
