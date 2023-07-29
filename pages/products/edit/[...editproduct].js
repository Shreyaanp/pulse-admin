import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '@/component/Layout';
import { useEffect, useState } from 'react';
import ProductForm from '@/component/Productform';
export default function EditProduct() {
    const router = useRouter();

    const {editproduct} = router.query;
    const [productdata, setProductdata] = useState(null);

    useEffect(() => {
        if(!editproduct){
            console.log('No id');
            return;
        }
        axios.get('/api/products?id='+editproduct).then((res) => {
            setProductdata(res.data)

        }).catch((err) => {
            console.log(err);
        });

    }, [editproduct]);
    return (
<Layout>
    {productdata ? (
        <ProductForm
                {...productdata}

        />
    ) : (
        <p>Loading...</p>
    )}

</Layout>

    )
}