"use client";
import ScheduleMeeting from "@/common/schedule-button";
import SectionTittle from "@/common/section-tittle";
import React, { FormEvent, useState } from "react";
import { Marquee } from "@/components/ui/marquee";

import useContactUs, { ClientData } from "@/hooks/useContactUs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
interface GetStartedDataType {
  id: number;
  title: string;
}
function ContactUs({ pad, hideMarquie }: any) {
  const [Send, cilentData] = useContactUs();

  const getstarted: GetStartedDataType[] = [
    { id: 1, title: "Get Started" },
    { id: 2, title: "Contact Us" },
    { id: 3, title: "Get Started" },
    { id: 4, title: "Contact Us" },
  ];
  const handleSubmitData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const clientName = formData.get("client_name")!;
    const clientEmail = formData.get("client_email")!;
    const clientPhone = formData.get("client_phone")!;
    const companyURL = formData.get("company_url")!;
    const description = formData.get("description")!;

    const data: ClientData = {
      name: clientName.toString(),
      email: clientEmail.toString(),
      phone: clientPhone.toString(),
      message: description.toString(),
      project_sample: companyURL.toString(),
    };

    Send(data);
    toast.success("We Received Your Message, Thanks");
    target.reset();
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
            Don&apos;t settle for clunky and confusing enterprise software.
            Contact us today to see how our user-centered approach can benefit
            your business and improve the overall user experience for your
            employees and customers.
          </p>
          <ScheduleMeeting />
          <div className="project-inquiry my-10 sm:p-5 p-3 sm:py-10 py-5 border-2 border-gray-400 rounded-xl">
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
                  placeholder="Compnay URL(optional)"
                />
              </div>
              <textarea
                id=""
                cols={68}
                rows={7}
                name="description"
                placeholder="Tell us About your project *"
                className="w-full p-4 my-8 mb-2 sm:text-xl bg-transparent border-2 rounded-xl border-gray-400"
              ></textarea>
              <button
                type="submit"
                className="w-fit cursor-pointer slide-anime px-5 py-3 rounded-xl text-xl bg-[#3E7AEE] text-white flex gap-4 items-center"
              >
                Submit Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
