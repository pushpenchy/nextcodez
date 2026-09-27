import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface ClientData {
  name: string;
  email: string;
  phone: string;
  message: string;
  project_sample: string;
}

interface DiscordIntegrationResponse {
  status: number;
  // Define the expected properties of the response data here
  // For example, if the response contains a 'status' property, you can add it here.
}

function useContactUs(): [
  (data: ClientData) => Promise<boolean>,
  DiscordIntegrationResponse | undefined
] {
  const [clientData, setClientData] = useState<
    DiscordIntegrationResponse | undefined
  >(undefined);

  const Send = async (data: ClientData) => {
    const hookUrl = process.env.NEXT_PUBLIC_DISCROD_CONTACT_US_HOOK;
    if (!hookUrl) return false;
    const body = {
      username: "NextCodez Bot",
      embeds: [
        {
          title: "📩 New Contact Form Submission",
          description: "A new user submitted a message from NextCodez.",
          color: 0x3b82f6, // blue color for branding

          fields: [
            {
              name: "👤 Name",
              value: data.name || "N/A",
              inline: true,
            },
            {
              name: "📧 Email",
              value: data.email || "N/A",
              inline: true,
            },
            {
              name: "📱 Phone",
              value: data.phone || "N/A",
              inline: true,
            },
            {
              name: "💬 Message",
              value: data.message || "No message provided.",
            },
            {
              name: "📝 Project Sample",
              value: data.project_sample || "N/A",
            },
          ],

          footer: {
            text: "NextCodez Contact Form",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response: AxiosResponse<DiscordIntegrationResponse> =
        await axios.post(hookUrl, body);
      setClientData(response);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return [Send, clientData];
}

export default useContactUs;
