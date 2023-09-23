import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../Redux/productReducer/action";

export const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [initialGender] = searchParams.getAll("gender");
  const [initialSearch] = searchParams.getAll("name");
  const [search, setSearch] = useState(initialSearch || "");
  const [gender, setGender] = useState(initialGender || "");
  const [initialCate] = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCate || "");
  const [initialSort] = searchParams.getAll("sort");
  const [sort, setSort] = useState(initialSort || "");

  const dispatch = useDispatch();

  const increment = () => {
    setPage(page + 1);
  };
  const decrement = () => {
    setPage(page - 1);
  };

  const products = useSelector((store) => store.productReducer.products);
  console.log(products);

  useEffect(() => {
    let params = {};
    if (gender !== "") {
      params.gender = gender;
    }
    if (search !== "") {
      params.name = search;
    }

    if (category !== "") {
      params.category = category;
    }
    if (sort !== "") {
      params.sort = sort;
    }
    setSearchParams(params);
  }, [page, gender, category, sort, search]);

  useEffect(() => {
    let obj = {
      params: {
        name: searchParams.get("name"),
        category: searchParams.getAll("category"),
        gender: searchParams.getAll("gender"),
        _sort: searchParams.get("sort") && "price",
        _order: searchParams.get("sort"),
      },
    };
    dispatch(GetProducts(page, obj));
  }, [searchParams]);

  return (
    <div>
      <center>
        <Navbar />
      </center>
      <br />
      <br />
      <div style={{ display: "flex", gap: "7px", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Search for product"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Filter By Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select onChange={(e) => setCategory(e.target.value)}>
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

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By Price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <Link to={"/addProduct"}>
          <button>Add Product</button>
        </Link>
      </div>
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Gender</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((el) => (
              <tr key={el.id}>
                <td>{el.image}</td>
                <td>{el.name}</td>
                <td>{el.description}</td>
                <td>{el.gender}</td>
                <td>{el.category}</td>
                <td>{el.price}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <center>
        <button onClick={decrement} disabled={page <= 1}>
          Prev
        </button>
        <button disabled>{page}</button>
        <button onClick={increment}>Next</button>
      </center>
    </div>
  );
};
