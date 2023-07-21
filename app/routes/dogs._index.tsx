import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { route } from "routes-gen";

import { db } from "~/db/config.server";
import { dogs } from "~/db/schema.server";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export const loader = () => {
  const result = db.select().from(dogs).all();
  return json(result);
};

export default function DogList() {
  const data = useLoaderData<typeof loader>();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = data?.slice(startIndex, endIndex) || [];

  const totalPages = Math.ceil((data?.length || 0) / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <th>
                <kbd className="kbd">{item.id}</kbd>
              </th>
              <td>{item.name}</td>
              <td>{item.breed}</td>
              <td>
                <Link
                  to={route("/dogs/:dogId/details", {
                    dogId: item.id.toString(),
                  })}
                >
                  <kbd className="kbd">Edit</kbd>
                </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-2 py-1 rounded ${
              currentPage === index + 1 ? "bg-gray-400 text-white" : "bg-white-200"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
