import { Suspense } from "react";
import Table from "@/components/Table";
import { TableSkeleton } from "../../ui/skeletons";
const staff: { sno: number; mid: string; name: string }[] = [
  {
    sno: 1,
    mid: "1179272",
    name: "Dr. M. SreeLatha",
  },
  {
    sno: 2,
    mid: "6054622",
    name: "Dr. A. Sri Nagesh",
  },
  {
    sno: 3,
    mid: "9846605",
    name: "Dr. Ch. Aparna",
  },
  {
    sno: 4,
    mid: "0900736",
    name: "Dr. R. Lakshmi Tulasi",
  },
  {
    sno: 5,
    mid: "1699791",
    name: "Sri. Ch. Ratna Babu",
  },
  {
    sno: 6,
    mid: "2698619",
    name: "Dr. M. Srikanth",
  },
  {
    sno: 7,
    mid: "9503102",
    name: "Dr. B. Varaprasad Rao",
  },
  {
    sno: 8,
    mid: "7695313",
    name: "Smt. M. Vasavi",
  },
  {
    sno: 9,
    mid: "6896235",
    name: "Sri. M. Brahmaiah",
  },
  {
    sno: 10,
    mid: "3431614",
    name: "Sri. P. Siva Prasad",
  },
  {
    sno: 11,
    mid: "6832325",
    name: "Dr. K. Siva Kumar",
  },
  {
    sno: 12,
    mid: "8794119",
    name: "Sri. E. Ramesh",
  },
  {
    sno: 13,
    mid: "2543402",
    name: "Smt. S.J.R.K PadminiValli V",
  },
  {
    sno: 14,
    mid: "1393242",
    name: "Sri. R. Mabu Basha",
  },
  {
    sno: 15,
    mid: "8571014",
    name: "Smt. Z. Sunitha Bai",
  },
  {
    sno: 16,
    mid: "8891397",
    name: "Ms. Ch. Vijaya Madhavi",
  },
  {
    sno: 17,
    mid: "7802000",
    name: "Smt. B. Manasa",
  },
  {
    sno: 18,
    mid: "8369468",
    name: "Sri. P. Rama Krishna",
  },
  {
    sno: 19,
    mid: "1278749",
    name: "Smt. N. Zareena",
  },
];

const Page = () => {
  return (
    <section className="pt-[12vh] min-h-[50vh] px-4 flex flex-col items-center">
      <h1 className="text-xl md:text-4xl font-bold mb-4 text-gray-800">
        Staff Members
      </h1>
      <div className="w-full max-w-3xl overflow-x-auto">
        <Suspense fallback={<TableSkeleton />}>
          <Table members={staff} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
