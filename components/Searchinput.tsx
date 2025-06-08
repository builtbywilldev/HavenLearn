"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const Searchinput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  // const query = searchParams.get("topic") || "";

  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === "/companions") {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 500)
    }, [searchQuery, router, searchParams, pathname]);

  return (
    <div
      className="reletive border border-black 
    rounded-lg items-center 
    flex gap-2 px-2 py-1 h-fit"
    >
      <Image src="/icons/search.svg" alt="" width={15} height={15} />
      <input
        placeholder="Search Companions..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchinput;
