"use client";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";

const TaskPage = () => {
  const products = useQuery(api.products.getAllProducts);
  const deleteProduct = useMutation(api.products.deleteProduct);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-5xl">All Products are in Real Time</h1>

      {products.map((p) => (
        <div key={p._id} className="flex gap-4">
          <div>{p.name}</div>
          <div>{p.price}</div>
          <Button
            onClick={async () => {
              await deleteProduct({ id: p._id });
            }}
          >
            *
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TaskPage;
