"use client";
import { useState } from "react";
import { Button, Divider } from "antd";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";

export default function NavigationBar() {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <>
      <div className="hidden sm:block fixed left-0 right-0 top-0 bg-white shadow-lg z-999">
        <nav className="flex flex-col items-center justify-center h-[12vh] space-y-1 xl:space-y-4">
          <div>
            <Link href="/home" className="text-3xl link font-caveat font-bold">
              RupaKoe
            </Link>
          </div>
          {/* <div className="text-2xl">RupaKoe</div> */}
          <ol className="flex space-x-4">
            <Link href="/about-us" className="link">
              Tentang Kami
            </Link>
            <p>|</p>
            <Link href="/predict" className="link">
              Coba Sekarang
            </Link>
          </ol>
        </nav>
      </div>
      <div className="block sm:hidden absolute top-4 right-4 bg-transparent">
        <Button className="!bg-transparent !px-3" onClick={() => setNavbar(!navbar)}>
          <MenuOutlined />
        </Button>
      </div>
      <div className="block sm:hidden z-999">
        <nav hidden={!navbar} className="flex flex-col items-center justify-center py-2 space-y-3 xl:space-y-4">
          <Link href="/home" className="pt-2 block text-3xl link font-caveat font-bold">
            RupaKoe
          </Link>
          <ol className="flex flex-col items-center space-y-2">
            <Link href="/about-us" className="block link text-sm">
              Tentang Kami
            </Link>
            <Link href="/predict" className="block link text-sm">
              Coba Sekarang
            </Link>
          </ol>
        </nav>
      </div>
    </>
  );
}
