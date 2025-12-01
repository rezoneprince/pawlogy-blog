import Link from "next/link";
import { FaBloggerB } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";

const Cards = () => {
  return (
    <div>
      <div className="mt-4 flex p-4 text-2xl font-semibold sm:ml-16 lg:ml-0">
        <div className="text-4xl font-thin">
          <h2>Dashboard</h2>
        </div>
        <Link href={"/admin"}>
          <div className="ml-4 mt-2 flex items-center text-sm text-gray-500">
            <span>Home &gt; </span>

            <span className="text-blue-500">Dashboard</span>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Apartment*/}
        <Link href={"admin/blogs"}>
          <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600   p-6 text-white shadow-lg">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/20"></div>
            <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-white/10"></div>
            <div className="flex justify-between items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <FaBloggerB className="text-xl" />
              </div>
              <button className="text-white/70">•••</button>
            </div>
            <div className="mt-6">
              <p className="text-3xl font-bold">40</p>
              <p className="mt-2 text-sm">Total Blog</p>
            </div>
          </div>
        </Link>

        {/* cards 2 */}
        <Link href={"admin/blogs"}>
          <div className="relative rounded-2xl  bg-gradient-to-br from-purple-500 to-purple-600   p-6 text-white shadow-lg">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/20"></div>
            <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-white/10"></div>
            <div className="flex justify-between items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <MdLocalPostOffice className="text-xl" />
              </div>
              <button className="text-white/70">•••</button>
            </div>
            <div className="mt-6">
              <p className="text-3xl font-bold">40</p>
              <p className="mt-2 text-sm">Total Post</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
