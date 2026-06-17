import React from "react";

const branches = [
  {
    id: 1,
    name: "Nike",
    logo: "https://via.placeholder.com/100",
    desc: "Just Do It",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://via.placeholder.com/100",
    desc: "Impossible is Nothing",
  },
  {
    id: 3,
    name: "Puma",
    logo: "https://via.placeholder.com/100",
    desc: "Forever Faster",
  },
  {
    id: 4,
    name: "New Balance",
    logo: "https://via.placeholder.com/100",
    desc: "Fearlessly Independent",
  },
];

export default function FamousBranch() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        Famous Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {branches.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 object-contain mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800">
              {brand.name}
            </h3>

            <p className="text-sm text-gray-500 text-center mt-1">
              {brand.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}