import axios from "axios"
import { useEffect, useState } from "react"
import Success from "@/component/Success"
import Link from "next/link";


export default function ProductForm(productdata) {
  const[title, setTitle] = useState(productdata.title);
  const[description, setDescription] = useState(productdata.description);
  const[price, setPrice] = useState(productdata.price);
  const[image, setImage] = useState(productdata.image);
  const [gender, setGender] = useState(productdata.gender);
  const [kid, setKid] = useState(productdata.kid);
  const [category, setCategory] = useState(productdata.category);
  const [subcategory, setSubcategory] = useState(productdata.subcategory);
  const [brand, setBrand] = useState(productdata.brand);
  const [color, setColor] = useState(productdata.color);
  const [size, setSize] = useState(productdata.size);
  const [quantity, setQuantity] = useState(productdata.quantity);
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState('');
  const [discount, setDiscount] = useState(productdata.discount );
  const [discountprice, setDiscountPrice] = useState(price - price * (discount / 100));
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().toISOString());
  const [featured, setFeatured] = useState(false);
  const [newarrival, setNewArrival] = useState(false);
  const [bestseller, setBestSeller] = useState(false);
  const [trending, setTrending] = useState(false);
  const [dealoftheday, setDealOfTheDay] = useState(false);
  const [statustate, setStatusstate] = useState(productdata.statustate);
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

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  console.log(productdata);
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
    }
    try {
      // this is for editing the product
      await axios.post("/api/products?id="+productdata._id, data);
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
    <>
     <div
        className="
                flex
                flex-col
                gap-4
                w-1/2
                mx-auto
            "
      >
        <div className="text-2xl font-bold">Add new product</div>
        <form className="flex flex-col gap-4" onSubmit={createProduct}>

          <input
            type="text"
            onChange={(e) => {
              setTitle(
                e.target.value
              );
              functionDateTime();
            }}
            defaultValue={productdata.title}

            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={productdata.description}

            className="border-2 border-gray-400 p-2 rounded-lg"
          />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
           defaultValue = {productdata.price}
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            defaultValue={productdata.image}
            className="border-2 border-gray-400 p-2 rounded-lg"
          />
          <div className="grid grid-cols-4 gap-3 bg-gray-100 p-2 rounded-lg">
            Gender :
            <button
              type="button"
              onClick={() => {
                setGender("Male");

              }}
              className={
                gender === 'Male'
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

              }}
              className={
                gender === "Female"
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

              }}
              className={
                gender === "Unisex"
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
            <input type="checkbox" onChange={(e) => setKid(e.target.checked)}
            defaultChecked={productdata.kid}
            />
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
            defaultValue={productdata.brand}
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            placeholder="Product color choices, ex: white, yellow, black"
            defaultValue={productdata.color}
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="text"
            onChange={(e) => setSize(e.target.value)}
            placeholder="Product size choices, ex: S, M, L or 42, 43, 44 only single entry"
            defaultValue={productdata.size}
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="Number"
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Product quantity"
            defaultValue={productdata.quantity}
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <input
            type="Number"
            onChange={(e) => {
              setDiscount(e.target.value);
              setDiscountPrice(price - price * (e.target.value / 100));
            }}
            defaultValue={productdata.discount}
            placeholder="Product discount"
            className="border-2 border-gray-400 p-2 rounded-lg"

          />
          <div className="grid grid-cols-4 gap-3 bg-gray-100 p-2 rounded-lg">
            Status :
            <textarea
              onChange={(e) => setStatusstate(e.target.value)}
              defaultValue={productdata.statustate}
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
              defaultChecked={productdata.featured}
            />
            New Arrival :
            <input
              type="checkbox"
              onChange={(e) => setNewArrival(e.target.checked)}
              defaultChecked={productdata.newarrival}

            />
            Best Seller :
            <input
              type="checkbox"
              onChange={(e) => setBestSeller(e.target.checked)}
              defaultChecked={productdata.bestseller}
            />
            Trending :
            <input
              type="checkbox"
              onChange={(e) => setTrending(e.target.checked)}
              defaultChecked={productdata.trending}
            />
            Deal of the Day :
            <input
              type="checkbox"
              onChange={(e) => setDealOfTheDay(e.target.checked)}
              defaultChecked={productdata.dealoftheday}
            />
          </div>
          <button
            type="submit"
            onClick={() => setSuccess(false)}
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
        {success && <Success />}
        {/* if set error is true then show error component */}
        {error && <Error />}
      </div>
    </>
  )
}
