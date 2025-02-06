"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { ScrollArea } from "@/ui/scroll-area";
import { Button } from "@/ui/button";

const eventsByYear: Record<
  string,
  { title: string; description: string; date: string; image: string }[]
> = {
  "2023-24": [
    {
      title: "TECHNIZEN",
      description:
        "A two day intercollegiate event comprising of different challenging contests",
      date: "February 5-6, 2024",
      image: "/placeholder.svg",
    },
    {
      title: "Hour of Code",
      description:
        'An outreach event organized at YANAMADALA ZILLA PARISHIT HIGH SCHOOL for class 6 and 8 students on the theme "Creativity with AI"',
      date: "December 12, 2023",
      image: "/placeholder.svg",
    },
    {
      title: "Future Readiness Orientation on Industry-Higher Studies",
      description:
        "Guest lecture by Dr. Hari Prasad Devarapalli, Senior Scientist, TCS, Hyderabad",
      date: "November 18, 2023",
      image: "/placeholder.svg",
    },
    {
      title: "ACM Awareness Programme",
      description:
        "An event to raise awareness about the significance of ACM and its pivotal role in computer science.",
      date: "October 18, 2023",
      image: "/placeholder.svg",
    },
    {
      title: "CODEWIZ",
      description:
        "An intracollegiate Python programming contest with over 711 participants",
      date: "September 26, 2023",
      image: "/placeholder.svg",
    },
  ],
  "2022-23": [
    {
      title: "Technology Awareness Programme",
      description:
        "A social outreach event organized at Sri Venkateswara Bala Kuteer School, Chowdavaram",
      date: "November 7, 2022",
      image: "/placeholder.svg",
    },
    {
      title: "ESTRATEGIA",
      description: "An intracollegiate contest on C programming",
      date: "November 5, 2022",
      image: "/placeholder.svg",
    },
    {
      title: "CODEWIZ",
      description: "An intracollegiate python programming contest",
      date: "August 30, 2022",
      image: "/placeholder.svg",
    },
    {
      title: "ACM Awareness Programme",
      description:
        "An event to raise awareness about the significance of ACM and its pivotal role in computer science.",
      date: "August 24, 2022",
      image: "/placeholder.svg",
    },
  ],
  "2021-22": [
    {
      title: "CODAGE",
      description: "An intracollegiate programming contest on data structures",
      date: "April 16, 2022",
      image: "/placeholder.svg",
    },
    {
      title: "Codage",
      description: "An intracollegiate programming contest",
      date: "November 13, 2021",
      image: "/placeholder.svg",
    },
    {
      title: "Micro Services and its implementation",
      description:
        "A guest lecture given by Sri. K. Krishna Mohan, Director and Principal Consultant, Glarimmy Technology Services",
      date: "Novermber 5, 2021",
      image: "/placeholder.svg",
    },
    {
      title: "CODEWIZ",
      description: "An intracollegiate python programming contest",
      date: "July 8, 2021",
      image: "/placeholder.svg",
    },
    {
      title: "ACM Awareness Programme",
      description:
        "An event to raise awareness about the significance of ACM and its pivotal role in computer science.",
      date: "June 30, 2021",
      image: "/placeholder.svg",
    },
  ],
  "2020-21": [
    {
      title: "Explore-IT",
      description:
        "An intercollegiate contest on presentations on latest trends in IT",
      date: "April 24, 2021",
      image: "/placeholder.svg",
    },
    {
      title: "Hour of code",
      description:
        "A social outreach event organized online for school students of various schools",
      date: "December 26, 2020",
      image: "/placeholder.svg",
    },
    {
      title: "CODAGE",
      description: "An intracollegiate programming contest",
      date: "November 5, 2020",
      image: "/placeholder.svg",
    },
  ],
  "2019-20": [
    {
      title: "Data Structures using Python",
      description:
        "A 3 days online workshop to improve the problem solving skills of students",
      date: "May 26-28, 2020",
      image: "/placeholder.svg",
    },
    {
      title: "Code Challenger",
      description:
        "An intercollegiate event compirising of 4 contests PCODE,CCODE,JCODE and SCODE",
      date: "February 20, 2020",
      image: "/placeholder.svg",
    },
    {
      title: "CODAGE",
      description: "An intracollegiate programming contest on data structures",
      date: "January 30, 2020",
      image: "/placeholder.svg",
    },
    {
      title: "Hour of Code",
      description:
        "A social outreach event organized at Sri Venkateswara Bala Kuteer School, Chowdavaram",
      date: "December 12, 2019",
      image: "/placeholder.svg",
    },
    {
      title: "Technizen",
      description: "An intercollegiate event comprising of different contests",
      date: "July 16, 2019",
      image: "/placeholder.svg",
    },
    {
      title: "Query Cracking Contest",
      description: "An intracollegiate database design contest",
      date: "July 4, 2019",
      image: "/placeholder.svg",
    },
    {
      title: "ACM Awareness Programme and Membership Drive",
      description:
        "An event to raise awareness about the significance of ACM and its pivotal role in computer science.",
      date: "June 24, 2019",
      image: "/placeholder.svg",
    },
  ],
  "2018-19": [
    {
      title: "Tech Maerid",
      description: "An intracollegiate project expo contest",
      date: "March 12, 2019",
      image: "/placeholder.svg",
    },
    {
      title: "INDOCTRINATION",
      description: "An intracollegiate coding contest",
      date: "March 07, 2019",
      image: "/placeholder.svg",
    },
    {
      title: "Techstalk",
      description: "An intra collegiate tech hunt event",
      date: "February 22, 2019",
      image: "/placeholder.svg",
    },
    {
      title: "Hour of Code",
      description:
        'An outreach event organized at YANAMADALA ZILLA PARISHIT HIGH SCHOOL for class 6 and 8 students on the theme "Creativity with AI"',
      date: "December 5, 2018",
      image: "/placeholder.svg",
    },
    {
      title: "THEME PARAUSIASI",
      description: "An intracollegiate paper presentation contest",
      date: "September 29, 2018",
      image: "/placeholder.svg",
    },
    {
      title: "Estrategia",
      description: "An intracollegaite coding contest",
      date: "September 11, 2018",
      image: "/placeholder.svg",
    },
  ],
  "2017-18": [
    {
      title: "Multi-Core Programming",
      description:
        "A guest lecture delivered by Sri. A.V Maruthi Sariam, Scientist 'E', DRDO",
      date: "December 29, 2017",
      image: "/placeholder.svg",
    },
    {
      title: "Inauguration of ACM Student Chapter",
      description:
        "Inaugurating our student chapter addressed by Sri. Ajay Deshpande, CTO, Rakya Technologies, Pune",
      date: "August 30, 2017",
      image: "/placeholder.svg",
    },
    {
      title: "SMAC Technologies and the Future",
      description:
        "A guest lecture delievered by Sri. Ajay Deshpande, CTO, Rakya Technologies, Pune",
      date: "August 30, 2017",
      image: "/placeholder.svg",
    },
    {
      title: "Logo and Web Page Designing Contest in PHP",
      description: "An intracollegiate logo and web designing contest",
      date: "August 28, 2017",
      image: "/placeholder.svg",
    },
    {
      title: "Reverse Coding Contest",
      description: "An intracollegiate reverse coding contest",
      date: "August 28, 2017",
      image: "/placeholder.svg",
    },
  ],
};

export default function EventsSection() {
  const [selectedYear, setSelectedYear] = useState("2023-24");

  return (
    <section
      id="events"
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
          Our Events
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(eventsByYear).map((year) => (
            <Button
              key={year}
              onClick={() => setSelectedYear(year)}
              variant={selectedYear === year ? "default" : "outline"}
              className="mb-2"
            >
              {year}
            </Button>
          ))}
        </div>
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventsByYear[selectedYear].map((event, index) => (
              <Card key={index} className="w-full">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 overflow-hidden group">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                  <p className="mt-2">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
