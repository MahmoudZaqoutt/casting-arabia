import React, { useEffect, useState } from "react";
import Login from "./auth/login";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/creator");
    } else {
      router.push("/auth/login");
    }
  }, []);

  return "";
};

export default index;
