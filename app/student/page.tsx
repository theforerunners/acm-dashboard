"use client";
import { TableSkeleton } from "@/ui/skeletons";
import { Suspense } from "react";
import Table from "@/components/Table";
import { Button } from "@/ui/button";
import { useState, useEffect } from "react";

const students: {
  mid: string;
  name: string;
  st_yr: number;
  end_yr: number;
}[] = [
  {
    mid: "6301845",
    name: "Adusumilli Sri Ram Prasad",
    st_yr: 2023,
    end_yr: 2024,
  },
  {
    mid: "7510890",
    name: "Devarapu Naveen Sai Teja",
    st_yr: 2023,
    end_yr: 2024,
  },
  {
    mid: "3242342",
    name: "Shaik Mohammad Haneef",
    st_yr: 2024,
    end_yr: 2025,
  },
  {
    mid: "458411",
    name: "Kiran Kanth",
    st_yr: 2022,
    end_yr: 2024,
  },
  {
    mid: "323231",
    name: "Shaik Roshan Ali",
    st_yr: 2023,
    end_yr: 2025,
  },
];

const years = [...Array(9).keys()]
  .map((i) => [i + 2016, i + 1 + 2016])
  .reverse();

const Page = () => {
  const [selectedYear, setSelectedYear] = useState([2024, 2025]);
  const filterMembers = (year: number[]) => {
    return students.filter(
      (student) => student.st_yr <= year[0] && student.end_yr >= year[1],
    );
  };
  const [members, setMembers] = useState(filterMembers(selectedYear));

  useEffect(() => {
    setMembers(filterMembers(selectedYear));
  }, [selectedYear]);

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
        <Suspense fallback={<TableSkeleton />}>
          <Table members={members} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
