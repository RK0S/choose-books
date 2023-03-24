import axios from 'axios';
import { useState, FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookDetailsOnPage } from 'src/entites/Book';
import { useFetching } from 'src/shared/lib/hooks/useFetching/useFetching';

const GetMoreInfo: FC = () => {
    const params = useParams();
    const [data, setData] = useState<any>(null);
    const [fetchingBook, isLoading, error] = useFetching(async () => {
        const res = await axios.get(
            `https://www.googleapis.com/books/v1/volumes/${params.id}?key=AIzaSyCuqeFXVNrq2zlsplouPfPr61lEE1_adGc`
        );
        setData(res.data);
    });

    useEffect(() => {
        fetchingBook();
    }, []);

    if (isLoading) return <h2>Идёт загрузка...</h2>;
    if (error) return <h2>Произошла ошибка при загрузке: {error}</h2>;

    return (
        <BookDetailsOnPage
            title={data?.volumeInfo?.title}
            categories={data?.volumeInfo?.categories}
            authors={data?.volumeInfo?.authors}
            description={data?.volumeInfo?.description}
            img={data?.volumeInfo?.imageLinks?.thumbnail}
        />
    );
};

export default GetMoreInfo;
