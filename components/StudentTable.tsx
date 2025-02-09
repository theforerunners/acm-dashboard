import Table from "@/ui/Table";

interface YearProps {
  start: number;
  end: number;
}

async function fetchStaffDetails(start: number, end: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/student`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ start, end }),
  });

  if (!res.ok) {
    console.error("Could not fetch staff details");
    return [];
  }

  const data = await res.json();
  console.log(data);
  return data.data;
}

const StudentTable = async ({ start, end }: YearProps) => {
  const staff = await fetchStaffDetails(start, end);

  return <Table members={staff} />;
};

export default StudentTable;
