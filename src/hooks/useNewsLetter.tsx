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
      content: "Message Received",
      tts: false,
      color: "white",
      embeds: [
        {
          title: "Message for Weekly News-letter from NextCodez",
          description: `Email: ${data.email}`,
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
