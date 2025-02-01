import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platello | Account",
};

export default function Account(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <div>
      <p>Account Tabs go here</p>
      {children}
    </div>
  );
}
