export default function Table(props: {
  members?: {
    sno?: number;
    mid: string;
    name: string;
    st_yr?: number;
    end_yr?: number;
  }[];
}) {
  const members = props.members;
  return (
    <table className="w-full border border-gray-300 border-separate border-spacing-0 shadow-lg rounded-lg overflow-hidden text-[0.6rem]/[1rem] sm:text-sm md:text-base mb-8">
      <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg ">
        <tr className="rounded-t-lg overflow-hidden">
          <th className="px-3 py-1 md:px-6 md:py-2 text-left  font-semibold">
            S. No.
          </th>
          <th className="px-3 py-1 md:px-6 md:py-2 text-left font-semibold">
            Membership ID
          </th>
          <th className="px-3 py-1 md:px-6 md:py-2 text-left font-semibold">
            Name
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {members?.map((member, index) => (
          <tr
            key={member.mid}
            className={`hover:bg-gray-100 transition-colors duration-200 ${index === members.length - 1 ? "last:rounded-b-lg" : ""}`}
          >
            <td className="px-3 py-1 md:px-6 md:py-2 text-gray-800 border border-gray-300">
              {index + 1}
            </td>
            <td className="px-3 py-1 md:px-6 md:py-2 text-gray-800 border border-gray-300">
              {member.mid}
            </td>
            <td className="px-3 py-1 md:px-6 md:py-2 text-gray-800 border border-gray-300">
              {member.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
