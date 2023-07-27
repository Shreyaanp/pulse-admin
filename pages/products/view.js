import { useRouter } from 'next/router';
import Layout from '@/component/Layout';
import { useState, useEffect } from 'react';

export default function ViewProduct() {
  const router = useRouter();
  const { data } = router.query;
  const [myObject, setMyObject] = useState(null);

  // Parse data once it is available
  useEffect(() => {
    if (data) {
      try {
        setMyObject(JSON.parse(data));
      } catch (error) {
        console.error('Error parsing JSON data:', error);
      }
    }
  }, [data]);

  return (
    <Layout>
      <h1>Hello this is</h1>
      {myObject ? (
        <pre>{JSON.stringify(myObject, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}
