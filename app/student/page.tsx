"use client";
import { TableSkeleton } from "@/ui/skeletons";
import Table from "@/ui/Table";
import { Button } from "@/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const years = [...Array(8).keys()]
  .map((i) => [i + 2016, i + 1 + 2016])
  .reverse();

const Page = () => {
  const [selectedYear, setSelectedYear] = useState([2023, 2024]);

  const { data, isLoading } = useQuery({
    queryKey: [selectedYear],
    queryFn: () =>
      fetch(
        `/api/student?start=${selectedYear[0]}&end=${selectedYear[1]}`,
      ).then((res) => res.json()),
  });

  console.log(data);

  return (
    <section className="pt-[12vh] min-h-[50vh] px-4 flex flex-col items-center">
      <h1 className="text-xl md:text-4xl font-bold mb-6 text-gray-800">
        Student Members
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {years.map((year, index) => (
          <Button
            key={index}
            onClick={() => setSelectedYear(year)}
            variant={
              JSON.stringify(selectedYear) === JSON.stringify(year)
                ? "default"
                : "outline"
            }
            className="mb-2"
          >
            {`${year[0]}-${year[1] % 100}`}
          </Button>
        ))}
      </div>

      <div className="w-full max-w-3xl overflow-x-auto">
        {isLoading ? <TableSkeleton /> : <Table members={data?.data} />}
      </div>
    </section>
  );
};

export default Page;
