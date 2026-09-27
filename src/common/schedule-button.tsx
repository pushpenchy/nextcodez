import { ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

function ScheduleMeeting({
  className,
  btnContent = "Email Us",
}: {
  className?: string;
  btnContent?: string;
}) {
  return (
    <a
      href="mailto:dev.pushpen@gmail.com?subject=Project%20enquiry%20for%20NextCodez"
      className={cn(
        "w-fit cursor-pointer slide-anime  border border-neutral-200 px-5 py-3 rounded-full text-xl bg-neutral-100 text-black flex gap-4 items-center font-semibold",
        className
      )}
    >
      {btnContent} <ArrowRight />
    </a>
  );
}

export default ScheduleMeeting;
