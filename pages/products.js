import Layout from "@/component/Layout";
import Success from "@/component/Success"
import Error from "@/component/Error"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/api/products")
      const products = await res.json();
      setProducts(products);
      setLoading(false); // Set loading to false once data is fetched
    };
    getProducts();
  }, []);

  const router = useRouter();

  return (
    <Layout>
      <div className="flex
      flex-row
      gap-4

      w-full
      mx-auto

      ">
      <Link
        className="
          bg-blue-500
          rounded-lg
          text-white
          p-4
          mr-4
          w-1/5


        "
        href={'/products/new'}
      >
        Add new product
      </Link>

      {loading ? ( // Show loading state while data is being fetched

                  <table className="
        w-4/5
        animate-pulse


        ">
          <thead
          className="
          bg-gray-200
          "
          >
            <tr>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Discount</th>
              <th className="border px-4 py-2">Function</th>
            </tr>
          </thead>
          <tbody>

              <tr>
                <td className="border px-4 py-2">
                  .........
                </td>

                <td className="border px-4 py-2">
.........
                </td>
                <td className="border px-4 py-2">
.........
                </td>
                <td className="border px-4 py-2">
.........
                </td>
                <td className="border px-4 py-2">
                  discount rate =  <br />
                  dprice =
                </td>
                <td className="border px-4 py-2
                flex
                flex-row
                gap-4
                justify-center
                items-center

                ">
                  <button
                    className="bg-blue-500 rounded-lg text-white p-2"

                  >
                    view
                  </button>

                  <button
                    className="bg-green-500 rounded-lg text-white p-2"
                  >
                    Edit
                  </button>

                  <button
    className="bg-red-500 rounded-lg text-white p-2"

  >
    Delete
  </button>

                </td>


              </tr>

          </tbody>
        </table>

      ) : (
        <table className="
        w-4/5


        ">
          <thead
          className="
          bg-gray-200
          "
          >
            <tr>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Discount</th>
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
                  {product.price}
                </td>
                <td className="border px-4 py-2">
                  {product.category}
                </td>
                <td className="border px-4 py-2">
                  {product.quantity}
                </td>
                <td className="border px-4 py-2">
                  discount rate = {product.discount } % <br />
                  dprice ={(product.price - (product.price * product.discount / 100)).toFixed(4)}
                </td>
                <td className="border px-4 py-2
                flex
                flex-row
                gap-4
                justify-center
                items-center

                ">
                  <button
                    className="bg-blue-500 rounded-lg text-white p-2"
                    onClick={() => router.push({
                      pathname: '/products/view',
                      query: { data: JSON.stringify(product._id) },
                    })}
                  >
                    view
                  </button>

                  <Link href={'/products/edit/' + product._id}
                    className="bg-green-500 rounded-lg text-white p-2"
                  >
                    Edit
                  </Link>

                  <button
    className="bg-red-500 rounded-lg text-white p-2"
    onClick={async () => {

      await axios.delete("/api/products?id=" + product._id).then((res) => {
        // render <Success> component
        setSuccess(true);
        const newProducts = products.filter((item) => item._id !== product._id);
        setProducts(newProducts);
      }).catch((err) => {
        console.log(err);
      });
    }}

  >
    Delete
  </button>

                </td>


              </tr>
            ))}
          </tbody>
        </table>
      )}

      </div>

    </Layout>
  );
}
