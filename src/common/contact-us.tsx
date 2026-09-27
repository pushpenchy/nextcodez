"use client";
import ScheduleMeeting from "@/common/schedule-button";
import SectionTittle from "@/common/section-tittle";
import React, { FormEvent, useState } from "react";
import { Marquee } from "@/components/ui/marquee";

import { cn } from "@/lib/utils";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";
interface GetStartedDataType {
  id: number;
  title: string;
}
function ContactUs({ pad, hideMarquie }: any) {

  const getstarted: GetStartedDataType[] = [
    { id: 1, title: "Get Started" },
    { id: 2, title: "Contact Us" },
    { id: 3, title: "Get Started" },
    { id: 4, title: "Contact Us" },
  ];
  const handleSubmitData = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const field = (name: string) => (formData.get(name) || "").toString().trim();

    const lines = [
      "Hi NextCodez, I'd like to talk about a project.",
      "",
      `Name: ${field("client_name")}`,
      `Email: ${field("client_email")}`,
    ];
    if (field("client_phone")) lines.push(`Phone: ${field("client_phone")}`);
    if (field("company_url")) lines.push(`Company: ${field("company_url")}`);
    lines.push("", field("description"));

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <>
      <div className={`py-20 ${pad ? "pt-0" : ""}  pb-10`} id="contact">
        {!hideMarquie && (
          <div className={cn("w-full bg-white text-black")}>
            <Marquee reverse className="[--duration:20s]">
              {getstarted.map((service) => (
                <div key={service.id}>
                  <p className="md:text-2xl text-xl font-semibold flex items-center gap-5">
                    {service.title}
                    <svg
                      width="57"
                      height="58"
                      viewBox="0 0 57 58"
                      className="w-8 -rotate-6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.8594 30.7899C56.6918 31.2008 56.5637 32.4255 55.6643 32.6554L35.9311 37.6987C35.6484 37.771 35.4113 37.9632 35.2821 38.2249L26.2655 56.4879C25.8546 57.3203 24.6299 57.1922 24.4 56.2928L19.3567 36.5596C19.2844 36.2768 19.0922 36.0397 18.8305 35.9105L0.567514 26.894C-0.264878 26.483 -0.136811 25.2583 0.762591 25.0285L20.4958 19.9851C20.7786 19.9129 21.0157 19.7207 21.1449 19.459L30.1614 1.19598C30.5724 0.363587 31.7971 0.491654 32.0269 1.39106L37.0703 21.1243C37.1425 21.407 37.3347 21.6441 37.5964 21.7733L55.8594 30.7899Z"
                        fill="currentColor"
                      />
                    </svg>
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        )}

        <div className="container mx-auto py-14 pb-5">
          <SectionTittle title="Let's Work Together" des="" />
          <p className="pb-5 lg:w-[55%]">
            Tell us what you&apos;re building. We&apos;ll get back to you with
            honest advice on what it needs and what it will take.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ScheduleMeeting />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xl font-semibold underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <p className="pt-3 text-gray-400">WhatsApp: {WHATSAPP_DISPLAY}</p>
          <div className="my-10 sm:p-5 p-3 sm:py-10 py-5 border-2 border-gray-400 rounded-xl">
            <h1 className="text-4xl font-bold pt-5 pb-10">Project Inquiry</h1>
            <form onSubmit={(e) => handleSubmitData(e)}>
              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  name="client_name"
                  className="w-full p-3 sm:text-xl rounded-xl bg-transparent border-2 border-gray-400"
                  placeholder="Name *"
                  required
                />
                <input
                  type="email"
                  name="client_email"
                  className="w-full p-3 sm:text-xl rounded-xl bg-transparent border-2 border-gray-400"
                  placeholder="Email *"
                  required
                />
                <input
                  type="phone"
                  name="client_phone"
                  className="w-full p-3  sm:text-xl rounded-xl bg-transparent border-2 border-gray-400"
                  placeholder="Phone(optional)"
                />
                <input
                  type="text"
                  name="company_url"
                  className="w-full p-3  sm:text-xl rounded-xl bg-transparent border-2 border-gray-400"
                  placeholder="Company URL (optional)"
                />
              </div>
              <textarea
                id=""
                cols={68}
                rows={7}
                name="description"
                placeholder="Tell us about your project *"
                required
                className="w-full p-4 my-8 mb-2 sm:text-xl bg-transparent border-2 rounded-xl border-gray-400"
              ></textarea>
              <button
                type="submit"
                className="w-fit cursor-pointer slide-anime px-5 py-3 rounded-xl text-xl bg-[#3E7AEE] text-white flex gap-4 items-center"
              >
                Send on WhatsApp
              </button>
              <p className="pt-3 text-sm text-gray-400">
                Opens WhatsApp with your details filled in.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
