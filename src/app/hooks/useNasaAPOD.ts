import { useState, useEffect } from "react";
import { CacheManager } from "@/lib/cache";

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

const NASA_CACHE_KEY = "nasa_apod";

export const useNasaAPOD = (): UseNasaAPODReturn => {
  const [data, setData] = useState<NasaAPODData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        // Check cache first
        const cachedData = CacheManager.get<NasaAPODData>(NASA_CACHE_KEY);
        if (cachedData) {
          setData(cachedData);
          setIsLoading(false);
          return;
        }

        // If no cache, fetch from API
        const response = await fetch("/api/nasa/apod");

        if (!response.ok) {
          throw new Error("Failed to fetch NASA APOD data");
        }

        const apiData = await response.json();

        // Cache the data
        CacheManager.set(NASA_CACHE_KEY, apiData);

        setData(apiData);
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
