import Table from "@/ui/Table";

async function fetchStaffDetails() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/staff`, {
    cache: "no-store", // Ensures fresh data on every request
  });

  if (!res.ok) {
    console.error("Could not fetch staff details");
    return [];
  }

  const data = await res.json();
  return data.data;
}

const StaffTable = async () => {
  const staff = await fetchStaffDetails();

  return <Table members={staff} />;
};

export default StaffTable;
