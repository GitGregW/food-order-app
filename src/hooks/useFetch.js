import { useEffect, useState } from 'react';

export default function useFetch(fetchFn, initialValue){
    const [fetchedData, setFetchedData] = useState([]);
    const [error, setError] = useState('');
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await fetchFn();
                setFetchedData(data);
            }
            catch(error){
                setError(prevErrors => (error ?? 'Error connecting to data.'));
                setIsFetching(false);
            }
            setIsFetching(false);
        }
        fetchData();
    }, []);

    return {
        isFetching,
        error,
        fetchedData
    };

}