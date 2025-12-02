import Link from "next/link";
import { FaBlog, FaBloggerB, FaCalendarAlt } from "react-icons/fa";
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
          <div className="group rounded-md p-2 text-black  border border-gray-200 shadow-lg">
            <div className="flex justify-between items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400 transform transition-transform -translate-y-5 duration-300 ease-in-out group-hover:-translate-y-8">
                <FaBloggerB className="text-[40px] text-white" />
              </div>
              <div className="mt-2">
                <span className="mt-2 text-sm text-blue-400 font-bold flex justify-end">
                  Total Blog
                </span>
                <p className="text-3xl text-gray-700">40,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaBlog className="text-blue-500" />
              <span className="text-gray-400 text-sm">More Blog</span>
            </div>
          </div>
        </Link>

        {/* cards 2 */}
        <Link href={"admin/blogs"}>
          <div className="group rounded-md p-2 text-black border border-gray-200 shadow-lg">
            <div className="flex justify-between items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-400 transform transition-transform -translate-y-5 duration-300 ease-in-out group-hover:-translate-y-8">
                <MdLocalPostOffice className="text-[40px] text-white" />
              </div>
              <div className="mt-2">
                <span className="mt-2 text-sm text-red-400 font-bold flex justify-end">
                  Total Post
                </span>
                <p className="text-3xl text-gray-700">50,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-red-400" />
              <span className="text-gray-400 text-sm">Last 24 Hours</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
