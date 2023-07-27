import Layout from "@/component/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


export default await function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/products");
      const products = await res.json();
      setProducts(products);

    };
    getProducts();
  }, []);
  const router = useRouter();

  return (
    <Layout>
      <Link
        className="
          bg-blue-500
          rounded-lg
          text-white
          p-2
        "
        href={'/products/new'}
      >
        Add new product
      </Link>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Function</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (

            <tr key={product._id}>
              <td className="border px-4 py-2">

                  {product.title}

              </td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 rounded-lg text-white p-2"
                  onClick={() => router.push(
                    {
                      pathname: '/products/view',
                      query : {data : JSON.stringify(product._id)},
                    }
                  )

                }
                >
                  Edit
                </button>
                <button className="bg-red-500 rounded-lg text-white p-2"
                  onClick={async () => {
                    const res = await fetch(`/api/products/${product._id}`, {
                      method: 'DELETE',
                    });
                    const data = await res.json();
                    console.log(data);
                    router.push('/products');
                  }}
                >
                  Delete
                </button>


              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </Layout>
  );
}