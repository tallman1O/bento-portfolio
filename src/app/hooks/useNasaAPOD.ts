import { useState, useEffect } from "react";
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

  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  return { data, isLoading, error };
};
