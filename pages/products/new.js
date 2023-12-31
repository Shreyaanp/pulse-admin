import Layout from "@/component/Layout";
import axios from "axios";
import { useState } from "react";
import Success from "@/component/Success";
import Link from "next/link";
import { useRouter } from "next/router";
import { set } from "mongoose";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [kid, setKid] = useState(false);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountprice, setDiscountPrice] = useState(0);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().toISOString());
  const [statustate, setStatusstate] = useState("");
  const [featured, setFeatured] = useState(false);
  const [newarrival, setNewArrival] = useState(false);
  const [bestseller, setBestSeller] = useState(false);
  const [trending, setTrending] = useState(false);
  const [dealoftheday, setDealOfTheDay] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [selectgender, setSelectGender] = useState(0);
  const router = useRouter();
  const functionDateTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const dateTime =
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    setTime(dateTime);
    setDate(date);
  };

  async function createProduct(e) {
    e.preventDefault();
    if (!gender) {
      alert("Please select a gender before adding the product.");
      return;
    }
    if (!category) {
      alert("Please select a category before adding the product.");
      return;
    }
    if (!subcategory) {
      alert("Please select a subcategory before adding the product.");
      return;
    }
    if (!quantity) {
      alert("Please enter quantity before adding the product.");
      return;
    }
    if (!size) {
      alert("Please enter size before adding the product.");
      return;
    }
    if (!color) {
      alert("Please enter color before adding the product.");
      return;
    }
    if (!brand) {
      alert("Please enter brand before adding the product.");
      return;
    }
    if (!subcategory) {
      alert("Please enter subcategory before adding the product.");
      return;
    }
    if (!category) {
      alert("Please enter category before adding the product.");
      return;
    }
    if (!gender) {
      alert("Please enter Gender before adding the product.");
      return;
    }
    if(discount>100){
      alert("Discount cannot be greater than 100");
      return;
    }

    const data = {
      title,
      description,
      price,
      image,
      gender,
      kid,
      category,
      subcategory,
      brand,
      color,
      size,
      quantity,
      rating,
      reviews,
      discount,
      discountprice,
      date,
      time,
      statustate,
      featured,
      newarrival,
      bestseller,
      trending,
      dealoftheday,
    };
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
      <div
        className="
                flex
                flex-col
                gap-4
                w-3/4
                mx-auto
                bg-gray-300
                p-2
                rounded-lg
            "
      >
        <div
        className="
        flex
        flex-row

        justify-between
        "
        >
        <div className="text-2xl font-bold">

Add new product</div>
<div
onClick={
  () => {
    router.push("/products");
}
}
>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>

</div>
        </div>
        <form className="flex flex-col gap-4" onSubmit={createProduct}>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
              functionDateTime();
            }}
            placeholder="Product name"
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product description"
            className="border-2 border-gray-400 p-2 rounded-lg"
          />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product price"
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            placeholder="Product image"
            className="border-2 border-gray-400 p-2 rounded-lg"
          />
          <div className="grid grid-cols-4 gap-3 bg-gray-100 p-2 rounded-lg">
            Gender :
            <button
              type="button"
              onClick={() => {
                setGender("Male");
                setSelectGender(1);
              }}
              className={
                selectgender === 1
                  ? "bg-blue-500 rounded-lg text-white p-2"
                  : "bg-gray-300 rounded-lg text-black p-2"
              }
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => {
                setGender("Female");
                setSelectGender(2);
              }}
              className={
                selectgender === 2
                  ? "bg-blue-500 rounded-lg text-white p-2"
                  : "bg-gray-300 rounded-lg text-black p-2"
              }
            >
              Female
            </button>
            <button
              type="button"
              onClick={() => {
                setGender("Unisex");
                setSelectGender(3);
              }}
              className={
                selectgender === 3
                  ? "bg-blue-500 rounded-lg text-white p-2"
                  : "bg-gray-300 rounded-lg text-black p-2"
              }
            >
              Unisex
            </button>
          </div>
          <div
            className="
            grid
            grid-cols-2
            gap-3
            bg-gray-100
            p-2
            rounded-lg

          "
          >
            kid :
            <input type="checkbox" onChange={(e) => setKid(e.target.checked)} />
          </div>
          <div
            className="
            grid
            grid-cols-3
            gap-3
            bg-gray-100
            p-2
            rounded-lg

            "
          >
            <text
              className="
              col-span-3
              "
            >
              Category :
            </text>

            <button
              type="button"
              onClick={() => {
                setCategory("Foot Wear");
              }}
              className={
                category === "Foot Wear"
                  ? "bg-blue-500 rounded-lg text-white p-2"
                  : "bg-gray-300 rounded-lg text-black p-2"
              }
            >
              Footwear
            </button>
            <button
              type="button"
              onClick={() => {
                setCategory("Top Wear");
              }}
              className={
                category === "Top Wear"
                  ? "bg-blue-500 rounded-lg text-white p-2"
                  : "bg-gray-300 rounded-lg text-black p-2"
              }
            >
              Top Wear
            </button>
            <button
              type="button"
              onClick={() => {
                setCategory("Bottom Wear");
              }}
              className={
                category === "Bottom Wear"
                  ? "bg-blue-500 rounded-lg text-white p-2"
                  : "bg-gray-300 rounded-lg text-black p-2"
              }
            >
              Bottom Wear
            </button>
            <button
              type="button"
              onClick={() => {
                setCategory("Sport Wear");
              }}
              className={
                category === "Sport Wear"
                  ? "bg-blue-500 rounded-lg text-white p-2"
                  : "bg-gray-300 rounded-lg text-black p-2"
              }
            >
              Sport Wear
            </button>
            <button
              type="button"
              onClick={() => {
                setCategory("Inner Wear");
              }}
              className={
                category === "Inner Wear"
                  ? "bg-blue-500 rounded-lg text-white p-2"
                  : "bg-gray-300 rounded-lg text-black p-2"
              }
            >
              Inner Wear
            </button>
          </div>
          {/* if foot wear is selected then show slider */}
          {category === "Foot Wear" && (
            <div
              className="
              grid
              grid-cols-3
              gap-3
              bg-gray-100
              p-2
              rounded-lg

              "
            >
              <text
                className="
                col-span-3
                "
              >
                Sub Category :
              </text>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Sliders");
                }}
                className={
                  subcategory === "Sliders"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Sliders
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Flip Flops");
                }}
                className={
                  subcategory === "Flip Flops"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Flip Flops
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Sandals");
                }}
                className={
                  subcategory === "Sandals"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Sandals
              </button>
            </div>
          )}
          {category === "Top Wear" && (
            <div
              className="
                        grid
                        grid-cols-3
                        gap-3
                        bg-gray-100
                        p-2
                        rounded-lg

                        "
            >
              <text
                className="
                          col-span-3
                          "
              >
                Sub Category :
              </text>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Tshirt");
                }}
                className={
                  subcategory === "Tshirt"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                T-shirt
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Shirt");
                }}
                className={
                  subcategory === "Shirt"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Shirt
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Long Sleeves");
                }}
                className={
                  subcategory === "Long Sleeves"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Long Sleeves
              </button>
            </div>
          )}
          {category === "Bottom Wear" && (
            <div
              className="
                        grid
                        grid-cols-3
                        gap-3
                        bg-gray-100
                        p-2
                        rounded-lg"
            >
              <text
                className="
                          col-span-3
                          "
              >
                Sub Category :
              </text>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Jeans");
                }}
                className={
                  subcategory === "Jeans"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Jeans
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Shorts");
                }}
                className={
                  subcategory === "Shorts"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Shorts
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Pants");
                }}
                className={
                  subcategory === "Pants"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Pants
              </button>
            </div>
          )}
          {category === "Sport Wear" && (
            <div
              className="
                        grid
                        grid-cols-3
                        gap-3
                        bg-gray-100
                        p-2
                        rounded-lg"
            >
              <text
                className="
                          col-span-3
                          "
              >
                Sub Category :
              </text>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Jersey");
                }}
                className={
                  subcategory === "Jersey"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Jersey
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Shorts");
                }}
                className={
                  subcategory === "Shorts"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Shorts
              </button>
            </div>
          )}
          {category === "Inner Wear" && (
            <div
              className="
                        grid
                        grid-cols-3
                        gap-3
                        bg-gray-100
                        p-2
                        rounded-lg"
            >
              <text
                className="
                          col-span-3
                          "
              >
                Sub Category :
              </text>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Boxers");
                }}
                className={
                  subcategory === "Boxers"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Boxers
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubcategory("Briefs");
                }}
                className={
                  subcategory === "Briefs"
                    ? "bg-blue-500 rounded-lg text-white p-2"
                    : "bg-gray-300 rounded-lg text-black p-2"
                }
              >
                Briefs
              </button>
            </div>
          )}
          <input
            type="text"
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Product brand"
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            placeholder="Product color choices, ex: white, yellow, black"
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="text"
            onChange={(e) => setSize(e.target.value)}
            placeholder="Product size choices, ex: S, M, L or 42, 43, 44"
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="Number"
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Product quantity"
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="Number"
            onChange={(e) => {
              setDiscount(e.target.value);

            }}
            placeholder="Product discount"
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <div className="grid grid-cols-4 gap-3 bg-gray-100 p-2 rounded-lg">
            Status :
            <textarea
              onChange={(e) => setStatusstate(e.target.value)}
              placeholder="Product status"
              className="border-2 border-gray-400 p-2 rounded-lg col-span-4"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-4 gap-3 bg-gray-100 p-2 rounded-lg">
            Featured :
            <input
              type="checkbox"
              onChange={(e) => setFeatured(e.target.checked)}
            />
            New Arrival :
            <input
              type="checkbox"
              onChange={(e) => setNewArrival(e.target.checked)}
            />
            Best Seller :
            <input
              type="checkbox"
              onChange={(e) => setBestSeller(e.target.checked)}
            />
            Trending :
            <input
              type="checkbox"
              onChange={(e) => setTrending(e.target.checked)}
            />
            Deal of the Day :
            <input
              type="checkbox"
              onChange={(e) => setDealOfTheDay(e.target.checked)}
            />
          </div>
          <button
            type="submit"
            onClick={() => {setSuccess(false)
              setDiscountPrice(price - price * (discount / 100));
            }}
            className="bg-blue-500 rounded-lg text-white p-2"
          >
            Add product
          </button>
        </form>
        {/* return to back page */}
        <Link href="/products">goback</Link>
      </div>
      <div className="flex flex-col gap-4 w-1/2 mx-auto">
        {/* image preview section */}
        <div className="bg-gray-100 flex items-center justify-center">
          <div
            className="
        flex
        flex-col
        gap-4
        h-96
    "
          >
            <div className="flex items-center justify-center">
              <img

                src={image} // show image preview
                // if image is not available then show default image
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
                }}
                alt="Image Preview"
                className="
            h-96
            w-96
                rounded-lg object-cover border-4 border-blue-500"
              />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-3xl font-bold">Image Preview</h1>
            </div>
          </div>
        </div>
        {/* if set success is true then show success component */}
        {success && <Success />}
        {/* if set error is true then show error component */}
        {error && <Error />}
      </div>
    </Layout>
  );
}
