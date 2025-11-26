import React from "react";
import { motion, stagger } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamDataType {
  id: number;
  img: string;
  name: string;
  title: string;
  height?: boolean;
  link?: string;
}
const teamMembers: TeamDataType[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1694026307715-0d3709e69adf?q=80&w=687&auto=format&fit=crop",
    name: "Steven Bon",
    title: "Founder & CEO",
    link: "https://www.linkedin.com/in/naymur-rahman/",
  },

  {
    id: 3,
    img: "https://images.unsplash.com/photo-1651582515576-25c61534ad37?q=80&w=687&auto=format&fit=crop",
    name: "Alex Carter",
    title: "Co-Founder & HR Manager",
    link: "#",
  },

  {
    id: 4,
    img: "https://images.unsplash.com/photo-1587568738882-a572cf4fd080?q=80&w=687&auto=format&fit=crop",
    name: "Samir Khan",
    title: "Back-End Developer",
    link: "#",
  },

  {
    id: 5,
    img: "https://images.unsplash.com/photo-1625850902501-cc6baef3e3b2?q=80&w=686&auto=format&fit=crop",
    name: "Leon Matthews",
    title: "Full-Stack Developer",
    link: "#",
  },

  {
    id: 6,
    img: "https://images.unsplash.com/photo-1642060603505-e716140d45d2?q=80&w=880&auto=format&fit=crop",
    name: "Aiden Ross",
    title: "Front-End Developer",
    link: "#",
  },

  {
    id: 8,
    img: "https://images.unsplash.com/photo-1634079949150-22f9b00cc288?q=80&w=687&auto=format&fit=crop",
    name: "Ethan Cole",
    title: "Cyber Security Specialist",
    link: "#",
  },

  {
    id: 7,
    img: "https://images.unsplash.com/photo-1758639842445-b58f639119d2?q=80&w=675&auto=format&fit=crop",
    name: "Ryan Blake",
    title: "SEO Specialist",
    link: "#",
  },

  {
    id: 9,
    img: "https://images.unsplash.com/photo-1681097561932-36d0df02b379?q=80&w=627&auto=format&fit=crop",
    name: "Jordan Miles",
    title: "Video Editor & Voice-Over Artist",
    link: "#",
  },
];

export function TeamMember({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4",
          className
        )}
      >
        {teamMembers.map((member) => {
          return (
            <div key={member.id}>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ ease: "easeOut" }}
                viewport={{ once: true }}
                className="member"
              >
                <div
                  className={`${
                    member.height ? "member-img memeber-height" : "member-img"
                  } w-full 2xl:h-80 xl:h-72 sm:h-64 h-52 relative overflow-hidden`}
                >
                  <Image
                    src={member.img}
                    width={400}
                    height={400}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="info py-2">
                  <p className="md:text-2xl font-semibold">{member.name}</p>
                  <p className="sm:text-base text-sm">{member.title}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}
