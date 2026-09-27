import { ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/contact";

function ScheduleMeeting({
  className,
  btnContent = "Chat on WhatsApp",
}: {
  className?: string;
  btnContent?: string;
}) {
  return (
    <a
      href={whatsappLink("Hi NextCodez, I'd like to talk about a project.")}
      target="_blank"
      rel="noopener noreferrer"
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
