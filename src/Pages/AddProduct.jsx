import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PostProducts } from "../Redux/productReducer/action";

export const AddProduct = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");
  const [cate, setCate] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    const props = {
      image: image,
      name: name,
      description: desc,
      gender: gender,
      category: cate,
      price: price,
    };
    dispatch(PostProducts(props));
    alert("Product added Successfully");
  };

  return (
    <div>
      <center>
        <h1>Add Product</h1>
      </center>
      <form
        style={{
          width: "40%",
          margin: "auto",
          textAlign: "center",
          fontSize: "larger",
        }}
        onSubmit={handelSubmit}
      >
        <input
          type="text"
          placeholder="Image URL..."
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product Description..."
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />

        <select onChange={(e) => setCate(e.target.value)}>
          <option value="">Filter By Category</option>
          <option value="Shirt">Shirt</option>
          <option value="Jeans">Jeans</option>
          <option value="Trousers">Trousers</option>
          <option value="Suits">Suits</option>
          <option value="Saree">Saree</option>
          <option value="Kurti">Kurti</option>
          <option value="Legenga">Legenga</option>
          <option value="Jackets">Jackets</option>
        </select>
        <br />

        <input
          type="number"
          placeholder="Price..."
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input type="submit" value="Add Product Button" />
      </form>
    </div>
  );
};
