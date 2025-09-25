<<<<<<< HEAD
import React, { useState } from "react";
import breda from "../images/bread.jpg";
import pizza from "../images/pizza.jpg";
import hamburger from "../images/Hamburger.jpg";
import cake from "../images/Cake.jpg";
import { useDispatch } from "react-redux";
type Product = {
  id: number;
  title: string;
  image: string;
  content: string;
  price: number;
};
const data = [
  {
    id: 1,
    title: "pizza",
    image: pizza,
    content: "pizza",
    price: 15,
  },
  {
    id: 2,
    title: "Hamburger",
    image: hamburger,
    content: "	Hamburger",
    price: 30,
  },
  {
    id: 3,
    title: "	Bread",
    image: breda,
    content: "	Bread",
    price: 30,
  },
  {
    id: 4,
    title: "	Cake",
    image: cake,
    content: "	Cake",
    price: 10,
  },
];

export default function ProductList() {
     const [products, setProducts] = useState<Product[]>(data);
      const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };

  return (
    <div>
        <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                  <div>
                    {products.map((item, index) => (
                      <div key={index}>
                        <div className="media product">
                          <div className="media-left">
                            <a href="#">
                              <img
                                className="media-object"
                                src={item.image}
                                alt="pizza"
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">{item.title}</h4>
                            <p>{item.content}</p>
                            <input
                              name="quantity-product-1"
                              type="number"
                              defaultValue={4}
                            />
                            <a data-product={1} className="price" onClick={() => addToCart(item)}>
                              {item.price} USD{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
    </div>
  )
}
=======
import React, { useState } from "react";
import breda from "../images/bread.jpg";
import pizza from "../images/pizza.jpg";
import hamburger from "../images/Hamburger.jpg";
import cake from "../images/Cake.jpg";
import { useDispatch } from "react-redux";
type Product = {
  id: number;
  title: string;
  image: string;
  content: string;
  price: number;
};
const data = [
  {
    id: 1,
    title: "pizza",
    image: pizza,
    content: "pizza",
    price: 15,
  },
  {
    id: 2,
    title: "Hamburger",
    image: hamburger,
    content: "	Hamburger",
    price: 30,
  },
  {
    id: 3,
    title: "	Bread",
    image: breda,
    content: "	Bread",
    price: 30,
  },
  {
    id: 4,
    title: "	Cake",
    image: cake,
    content: "	Cake",
    price: 10,
  },
];

export default function ProductList() {
     const [products, setProducts] = useState<Product[]>(data);
      const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };

  return (
    <div>
        <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                  <div>
                    {products.map((item, index) => (
                      <div key={index}>
                        <div className="media product">
                          <div className="media-left">
                            <a href="#">
                              <img
                                className="media-object"
                                src={item.image}
                                alt="pizza"
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">{item.title}</h4>
                            <p>{item.content}</p>
                            <input
                              name="quantity-product-1"
                              type="number"
                              defaultValue={4}
                            />
                            <a data-product={1} className="price" onClick={() => addToCart(item)}>
                              {item.price} USD{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
    </div>
  )
}
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
