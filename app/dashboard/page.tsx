'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [data, setData] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetch("/api/protected", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.status !== 200) {
          localStorage.removeItem("token");
          router.push("/login");
        } else {
          const json = await res.json();
          setData(json.message);
        }
      });
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>{data}</p>
    </div>
  );
}
