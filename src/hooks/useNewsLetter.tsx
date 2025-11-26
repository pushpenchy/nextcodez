import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface ClientData {
  email: string;
}

interface DiscordIntegrationResponse {
  status: number;
}

function useNewsLetter(): [
  (data: ClientData) => Promise<void>,
  DiscordIntegrationResponse | undefined
] {
  const [clientData, setClientData] = useState<
    DiscordIntegrationResponse | undefined
  >(undefined);

  const Send = async (data: ClientData) => {
    const body = {
      username: "NextCodez Bot",
      avatar_url: "https://ui-layouts.com/apple-touch-icon.png", // optional
      embeds: [
        {
          title: "📰 New Newsletter Signup",
          description:
            "A new user subscribed to the NextCodez weekly newsletter.",
          color: 0x3b82f6, // blue brand color

          fields: [
            {
              name: "📧 Email",
              value: data.email || "N/A",
            },
          ],

          footer: {
            text: "NextCodez Newsletter",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response: AxiosResponse<DiscordIntegrationResponse> =
        await axios.post(
          process.env.NEXT_PUBLIC_DISCROD_NEWSLETTER_HOOK || "",
          body
        );
      setClientData(response);

      // You can check the status code here if needed, e.g., if (response.status === 204) { ... }
    } catch (error) {
      console.error(error);
    }
  };

  return [Send, clientData];
}

export default useNewsLetter;
