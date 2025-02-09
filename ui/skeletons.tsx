export function TableRowSkeleton() {
  return (
    <tr
      className={`w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg`}
    >
      {/* Sno */}
      <td className="whitespace-nowrap px-3 py-1 md:px-6 md:py-2">
        <div className="h-3 w-4 sm:h-6 sm:w-8 rounded bg-gray-100"></div>
      </td>
      {/* Mid */}
      <td className="whitespace-nowrap px-3 py-1 md:px-6 md:py-2">
        <div className="h-3 w-8 sm:h-6 sm:w-16 rounded bg-gray-100"></div>
      </td>
      {/* Name */}
      <td className="whitespace-nowrap px-3 py-1 md:px-6 md:py-2">
        <div className="h-3 w-24 sm:h-6 sm:w-48 rounded bg-gray-100"></div>
      </td>
    </tr>
  );
}

export function TableSkeleton() {
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
        {[...Array(10)].map((_, i) => (
          <TableRowSkeleton key={i} />
        ))}
      </tbody>
    </table>
  );
}
