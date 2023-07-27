import Layout from "@/component/Layout"
import axios from "axios"
import { useState } from "react"
import Success from "@/component/Success"
import Link from "next/link";


export default function NewProduct() {
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[price, setPrice] = useState(0);
  const[image, setImage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
 async function createProduct(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      price,
      image,
    }
    try {
      await axios.post("/api/products", data);
      setSuccess(true);
      setError(false);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle errors caused by user input
        console.error("Error creating product:", error.response.data);

        setSuccess(false);
        setError(true);
      } else {
        // Handle other types of errors, if needed
        console.error("Error creating product:", error);
        setSuccess(false);
        setError(true);
      }
    }
  }
  return (
    <Layout>
      <div className="
                flex
                flex-col
                gap-4
                w-1/2
                mx-auto
            ">
        <div className="text-2xl font-bold">Add new product</div>
        <form className="flex flex-col gap-4" onSubmit={ createProduct}>
          <input type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product name" className="border-2 border-gray-400 p-2 rounded-lg" />
          <input type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product description" className="border-2 border-gray-400 p-2 rounded-lg" />
          <input type="text"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product price" className="border-2 border-gray-400 p-2 rounded-lg" />
          <input type="text"
            onChange={(e) => setImage(e.target.value)}
            placeholder="Product image" className="border-2 border-gray-400 p-2 rounded-lg" />
          <button
            type="submit"
            onClick={() => setSuccess(false)}
            className="bg-blue-500 rounded-lg text-white p-2">Add product</button>

        </form>
        {/* return to back page */}
        <Link
          href="/products"
        >
        goback
        </Link>
      </div>
      <div className="flex flex-col gap-4 w-1/2 mx-auto">
        {/* image preview section */}
        <div className="bg-gray-100 flex items-center justify-center">
          <div className="
        flex
        flex-col
        gap-4
        h-96
    ">
            <div className="flex items-center justify-center">
              <img
                src= {image}// show image preview
                alt="Image Preview"
                className="w-60 h-60 rounded-full object-cover border-4 border-blue-500"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-3xl font-bold">Image Section</h1>
            </div>
          </div>

        </div>
      {/* if set success is true then show success component */}
      {success && <Success/>}
      {/* if set error is true then show error component */}
      {error && <Error/>}

      </div>

    </Layout>
  )
}