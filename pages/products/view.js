import { useRouter } from 'next/router';
import Layout from "@/component/Layout";
import { useState, useEffect } from 'react';
export default function viewProduct(){
    const router = useRouter();
    const {data} = router.query;
    const myObject = JSON.parse(data);
    return(
        <Layout>
            <h1>Hello this is
                {myObject}
            </h1>
        </Layout>

    )
}