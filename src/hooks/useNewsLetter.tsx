import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface ClientData {
  email: string;
}

interface DiscordIntegrationResponse {
  status: number;
}

function useNewsLetter(): [
  (data: ClientData) => Promise<boolean>,
  DiscordIntegrationResponse | undefined
] {
  const [clientData, setClientData] = useState<
    DiscordIntegrationResponse | undefined
  >(undefined);

  const Send = async (data: ClientData) => {
    const hookUrl = process.env.NEXT_PUBLIC_DISCROD_NEWSLETTER_HOOK;
    if (!hookUrl) return false;
    const body = {
      username: "NextCodez Bot",
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

export default useNewsLetter;
