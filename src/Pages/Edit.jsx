import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditGetProduct, PatchProduct } from "../Redux/productReducer/action";

export const Edit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((store) => store.productReducer.editProduct);

  const [image, setImage] = useState(product.image);
  const [name, setName] = useState(product.name);
  const [desc, setDesc] = useState(product.description);
  const [gender, setGender] = useState(product.gender);
  const [cate, setCate] = useState(product.category);
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    dispatch(EditGetProduct(id));
  }, []);

  const navigate = useNavigate();

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
    dispatch(PatchProduct(id, props)).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
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
          value={image}
        />
        <br />
        <input
          type="text"
          placeholder="Product Name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          type="text"
          placeholder="Product Description..."
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <br />
        <select onChange={(e) => setGender(e.target.value)} value={gender}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />

        <select onChange={(e) => setCate(e.target.value)} value={cate}>
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
          value={price}
        />
        <br />
        <input type="submit" value="Edit Product" />
      </form>
    </div>
  );
};
