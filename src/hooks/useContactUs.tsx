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
          title: "Message from my NextCodez",
          description: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}\nProject Sample: ${data.project_sample}`,
        },
      ],
    };

    try {
      const response: AxiosResponse<DiscordIntegrationResponse> =
        await axios.post(
          process.env.NEXT_PUBLIC_DISCROD_CONTACT_US_HOOK || "",
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

export default useContactUs;
