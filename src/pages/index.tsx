import { useEffect } from "react";
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

  return <div className="min-h-[600px]"></div>;
};

export default index;
