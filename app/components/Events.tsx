"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { ScrollArea } from "@/app/ui/scroll-area";
import { Button } from "@/app/ui/button";

const eventsByYear: Record<
  string,
  { title: string; description: string; date: string; image: string }[]
> = {
  "2023-24": [
    {
      title: "Technizen",
      description:
        "A two-day intercollegiate event encompassing over different contests",
      date: "February 5-6, 2024",
      image: "/technizenGroup.jpg",
    },
    {
      title: "Hackathon 2024",
      description: "48-hour coding marathon with over 200 participants",
      date: "March 15-17, 2024",
      image: "/placeholder.svg",
    },
    {
      title: "AI Workshop",
      description: "Hands-on workshop on the latest AI technologies",
      date: "April 5, 2024",
      image: "/placeholder.svg",
    },
    {
      title: "Tech Talk Series",
      description: "Weekly talks by industry experts on cutting-edge topics",
      date: "Ongoing",
      image: "/placeholder.svg",
    },
  ],
  "2022-23": [
    {
      title: "Cybersecurity Symposium",
      description: "A day-long event focusing on the latest in cybersecurity",
      date: "November 10, 2022",
      image: "/placeholder.svg",
    },
    {
      title: "Code for Good",
      description: "Hackathon focused on solving social issues",
      date: "February 20-21, 2023",
      image: "/placeholder.svg",
    },
  ],
  "2021-22": [
    {
      title: "Virtual Reality Expo",
      description: "Showcasing the latest in VR technology",
      date: "October 15, 2021",
      image: "/placeholder.svg",
    },
    {
      title: "Women in Tech Panel",
      description: "Inspiring talks from leading women in the tech industry",
      date: "March 8, 2022",
      image: "/placeholder.svg",
    },
  ],
  "2020-21": [
    {
      title: "Online Coding Competition",
      description: "A week-long coding challenge for students",
      date: "April 1-7, 2021",
      image: "/placeholder.svg",
    },
    {
      title: "Data Science Workshop",
      description: "Introduction to data analysis and machine learning",
      date: "November 20, 2020",
      image: "/placeholder.svg",
    },
  ],
  "2019-20": [
    {
      title: "Blockchain Conference",
      description: "Exploring the potential of blockchain technology",
      date: "February 5, 2020",
      image: "/placeholder.svg",
    },
    {
      title: "Game Development Bootcamp",
      description: "Intensive weekend course on game development",
      date: "September 14-15, 2019",
      image: "/placeholder.svg",
    },
  ],
  "2018-19": [
    {
      title: "IoT Showcase",
      description: "Demonstrating student projects in Internet of Things",
      date: "May 1, 2019",
      image: "/placeholder.svg",
    },
    {
      title: "Tech Career Fair",
      description: "Connecting students with tech industry recruiters",
      date: "November 30, 2018",
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
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
          Our Events
        </h2>
        <div className="flex justify-center space-x-4 mb-8 flex-grow-0">
          {Object.keys(eventsByYear).map((year) => (
            <Button
              key={year}
              onClick={() => setSelectedYear(year)}
              variant={selectedYear === year ? "default" : "outline"}
            >
              {year}
            </Button>
          ))}
        </div>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventsByYear[selectedYear].map((event, index) => (
              <Card key={index} className="w-full">
                <CardHeader>
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover rounded-t-lg transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
