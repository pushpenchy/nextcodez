import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ScheduleMeeting({
  className,
  btnContent = "Schedule Call",
}: {
  className?: string;
  btnContent?: string;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "first-one",
      });

      cal("on", {
        action: "bookingSuccessfulV2",
        callback: (e) => {
          console.log(e.detail.data);
          alert("Booking Successful V2 event");
        },
      });

      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#000000" } },
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <button
              className={cn(
                "w-fit cursor-pointer slide-anime  border border-neutral-200 px-5 py-3 rounded-full text-xl bg-neutral-100 text-black flex gap-4 items-center font-semibold",
                className
              )}
            >
              {btnContent} <ArrowRight />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-6xl 2xl:h-[70vh] h-[80vh] overflow-auto p-0 bg-black">
            <div className="grid gap-4">
              <Cal
                namespace="first-one"
                calLink="ui-layouts" // <-- CHANGE THIS
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "dark" }}
                calOrigin="https://cal.com"
                embedJsUrl="https://cal.com/embed/embed.js"
              />
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}

export default ScheduleMeeting;
