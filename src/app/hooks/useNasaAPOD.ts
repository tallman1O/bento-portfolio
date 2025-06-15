import { useState, useEffect, useRef } from "react";
import { NasaAPODResponse } from "../types/nasa";

interface UseNasaAPODReturn {
  data: NasaAPODResponse | null;
  isLoading: boolean;
  error: Error | null;
}

export const useNasaAPOD = (): UseNasaAPODReturn => {
  const [data, setData] = useState<NasaAPODResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(false);
  const hasFetched = useRef(false);

  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
  console.log("NASA API Key available:", !!apiKey);

  useEffect(() => {
    isMounted.current = true;

    const fetchAPOD = async () => {
      // Prevent multiple fetches
      if (hasFetched.current) return;
      hasFetched.current = true;

      try {
        console.log("Starting to fetch APOD data");
        setIsLoading(true);
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (isMounted.current) {
          console.log("APOD data fetched successfully:", result);
          setData(result);
        }
      } catch (err) {
        if (isMounted.current) {
          console.error("Error fetching APOD:", err);
          setError(err instanceof Error ? err : new Error("An error occurred"));
        }
      } finally {
        if (isMounted.current) {
          console.log("Setting isLoading to false");
          setIsLoading(false);
        }
      }
    };

    fetchAPOD();

    return () => {
      isMounted.current = false;
    };
  }, [apiKey]);

  return { data, isLoading, error };
};
