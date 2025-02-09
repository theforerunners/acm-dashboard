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
import { useQuery } from "@tanstack/react-query";

const years = [...Array(8).keys()]
  .map((i) => [i + 2016, i + 1 + 2016])
  .reverse();

export default function EventsSection() {
  const [selectedYear, setSelectedYear] = useState([2023, 2024]);

  const { data } = useQuery({
    queryKey: [selectedYear],
    queryFn: () =>
      fetch(`/api/events?start=${selectedYear[0]}&end=${selectedYear[1]}`).then(
        (res) => res.json(),
      ),
  });

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
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.data.map(
              (
                event: {
                  title: string;
                  description: string;
                  date: string;
                  image: string;
                },
                index: number,
              ) => (
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
              ),
            )}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
