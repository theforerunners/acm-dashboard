import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

const teamMembers = [
  {
    name: "Dr. M. Sreelatha",
    role: "Faculty Sponsor",
    image: "/Hod.jpg",
  },
  {
    name: "Sk. Roshan Ali",
    role: "Chair",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "N. Yamini Sri",
    role: "Vice Chair",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "M. Abhiram",
    role: "Treasurer",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "P. Ramya Sree",
    role: "Secretary",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "K. Kailash Nath",
    role: "Web Master",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "V. Harika",
    role: "Membership Chair",
    image: "/placeholder.svg?height=150&width=150",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className={cn(index === 0 && "col-span-full")}>
              <CardHeader>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={130}
                  height={130}
                  className="rounded-[50%] object-cover mx-auto sm:w-48 sm:h-48 w-32 h-32"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>{member.name}</CardTitle>
                {index === 0 && (
                  <p className="text-gray-600">Prof. &amp; Head CSE</p>
                )}
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
