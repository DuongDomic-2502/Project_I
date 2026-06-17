import React from "react";
const products = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: 2500000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 3200000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 2100000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "New Balance 550",
    price: 2800000,
    image: "https://via.placeholder.com/300",
  },
];

export default function BestSeller() {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Best Seller
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {product.name}
              </h3>

              <p className="text-blue-600 font-bold mt-2">
                {product.price.toLocaleString("vi-VN")} ₫
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}