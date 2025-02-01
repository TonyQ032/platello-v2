"use client";
// Pages that use the useParams hook must be marked as client-side only

import { useParams } from "next/navigation";
import React from "react";

// This is the page component that will be rendered by the route: /recipes/:recipeId
export default function Recipe() {
  const params = useParams<{ recipeId: string }>();

  return <div>Your recipe id: {params.recipeId}</div>;
}
