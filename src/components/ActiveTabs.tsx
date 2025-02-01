"use client";

import { Tabs } from "@mui/material";
import React, { useState } from "react";

type props = {
  activeTab: string;
  tabs: object[];
};

export default function ActiveTabs(props: props) {
  const [activeTab, setActiveTab] = useState(props?.activeTab);

  const hello: string = "hello";

  return (
    <Tabs
      value={activeTab}
      onChange={(e: any) => {
        setActiveTab(e.target.value);
      }}
    ></Tabs>
  );
}
