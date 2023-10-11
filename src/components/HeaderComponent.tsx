import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeaderComponent() {
  return (
    <header className="sticky top-0 w-full flex-none bg-white border-b ">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-100 mx-4 lg:px-8 lg:mx-0">
          <div className="relative flex items-center">
            <a href="/" className="flex items-center">
              <span className="sr-only">Home page</span>
              <Image
                src={"/logo.png"}
                alt={"logo"}
                width={40}
                height={40}
                className="mr-1"
              />
              <span className="items-center text-2xl font-semibold text-slate-700">
                MyList
              </span>
            </a>
            <div className="relative hidden ml-auto lg:flex items-center">
              <nav className="text-sm leading-3 font-semibold text-slate-700">
                <ul className="flex space-x-8">
                  <li>
                    <Link href={"/top10s"} className="hover:text-sky-500">
                      Top 10s
                    </Link>
                  </li>
                  <li>
                    <Link href={"/recent"} className="hover:text-sky-500">
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link href={"/popular"} className="hover:text-sky-500">
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link href={"/saved"} className="hover:text-sky-500">
                      Saved
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6">
                <label className="sr-only">User</label>
                <button type="button" className="flex items-center">
                  <Image
                    src={"/user.png"}
                    alt={"user"}
                    width="32"
                    height="32"
                    className="w-8 h-8 "
                  />
                  <span className=" hover:underline ml-2">Vivek Topiya</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
