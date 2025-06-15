import { useState, useEffect } from "react";

interface NasaAPODData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

interface UseNasaAPODReturn {
  data: NasaAPODData | null;
  isLoading: boolean;
  error: string | null;
}

export const useNasaAPOD = (): UseNasaAPODReturn => {
  const [data, setData] = useState<NasaAPODData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const response = await fetch("/api/nasa/apod");

        if (!response.ok) {
          throw new Error("Failed to fetch NASA APOD data");
        }

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching NASA APOD data:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch NASA APOD data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchNasaData();
  }, []);

  return { data, isLoading, error };
};
