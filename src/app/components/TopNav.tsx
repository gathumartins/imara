'use client'
import React, {useState} from 'react'
import Link from "next/link";

function TopNav({menu}:any) {
  const [open, setOpen] = useState(false);
  return (
    <ul className="h-full flex flex-col mx-auto max-lg:gap-6 w-[300px] lg:w-full lg:flex-row place-items-center justify-between font-avenirRoman flex-grow">
      {menu.map((menu: any) => (
        <li key={menu.node.id}>
          <Link
            className="text-iNeutral hover:text-iBlue text-base capitalize"
            href={menu.node.uri}
            onClick={() => setOpen(false)}
          >
            {menu.node.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TopNav