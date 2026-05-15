import { useEffect } from 'react';
import { getSearch } from '../api/search';

export default function Home() {
  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const data = await getSearch('react');
        console.log((data as any).items);
      } catch (err) {
        console.log('데이터 가져오기 실패----', err);
      }
    };
    fetchSearchData();
  }, []);

  return <h1>Home Page</h1>;
}
