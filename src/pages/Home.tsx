import { useEffect } from 'react';
import { getSearch } from '../api/search';

interface SearchData {
  bloggerlink: string;
  bloggername: string;
  description: string;
  link: string;
  postdate: string;
  title: string;
}

interface SearchResponse {
  items: SearchData[] | null;
}

export default function Home() {
  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const data = await getSearch('react');
        console.log((data as SearchResponse).items);
      } catch (err) {
        console.log('데이터 가져오기 실패----', err);
      }
    };
    fetchSearchData();
  }, []);

  return <h1>Home Page</h1>;
}
