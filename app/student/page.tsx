import { TableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import Table from "@/app/components/Table";
const students: {
  sno: number;
  mid: string;
  name: string;
  st_yr: number;
  end_yr: number;
}[] = [
  {
    sno: 1,
    mid: "6301845",
    name: "Adusumilli Sri Ram Prasad",
    st_yr: 2023,
    end_yr: 2024,
  },
  {
    sno: 2,
    mid: "7510890",
    name: "Devarapu Naveen Sai Teja",
    st_yr: 2023,
    end_yr: 2024,
  },
];

const Page = () => {
  return (
    <section className="pt-[12vh] min-h-[50vh] px-4 flex flex-col items-center">
      <h1 className="text-xl md:text-4xl font-bold mb-6 text-gray-800">
        Student Members
      </h1>
      <div className="w-full max-w-3xl overflow-x-auto">
        <Suspense fallback={<TableSkeleton />}>
          <Table members={students} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
