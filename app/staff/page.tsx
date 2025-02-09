"use client";
import { TableSkeleton } from "@/ui/skeletons";
import { useQuery } from "@tanstack/react-query";
import Table from "@/ui/Table";

const Page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["staffDetails"],
    queryFn: () => fetch("/api/staff").then((res) => res.json()),
  });
  return (
    <section className="pt-[12vh] min-h-[50vh] px-4 flex flex-col items-center">
      <h1 className="text-xl md:text-4xl font-bold mb-4 text-gray-800">
        Staff Members
      </h1>
      <div className="w-full max-w-3xl overflow-x-auto mb-4">
        {isLoading ? <TableSkeleton /> : <Table members={data?.data} />}
      </div>
    </section>
  );
};

export default Page;
