import { useState, useEffect } from "react";

interface SpotifyTrack {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
}

interface UseSpotifyReturn {
  track: SpotifyTrack | null;
  isLoading: boolean;
  error: Error | null;
}

// List of artists with their Spotify IDs
const artists = [
  { id: "2h93pZq0e7k5yf4dywlkpM", name: "Frank Ocean" },
  { id: "1uNFoZAHBGtllmzznpCI3s", name: "Justin Bieber" },
  { id: "3HqSLMAZ3g3d5poNaI7GOU", name: "Adele" },
  { id: "1mYsTxnqsietFxj1OgoGbG", name: "Drake" },
  { id: "6eUKZXaKkcviH0Ku9w2n3V", name: "Ed Sheeran" },
  { id: "0OdUWJ0sBjDrqHygGUXeCF", name: "Coldplay" },
  { id: "5K4W6rqBFWDnAN6FQUkS6x", name: "Kanye West" },
  { id: "4gzpq5DPGxSnKTe4SA8HAU", name: "Coldplay" },
  { id: "1u7kkVrr14iBvrpYnZILJR", name: "The Weeknd" },
  { id: "0C8ZW7ezQVs4URX5aX7Kqx", name: "Billie Eilish" },
];

export const useSpotify = (): UseSpotifyReturn => {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        setIsLoading(true);

        const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

        if (!clientId || !clientSecret) {
          throw new Error("Spotify credentials not found");
        }

        const tokenResponse = await fetch(
          "https://accounts.spotify.com/api/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${Buffer.from(
                `${clientId}:${clientSecret}`
              ).toString("base64")}`,
            },
            body: "grant_type=client_credentials",
          }
        );

        if (!tokenResponse.ok) {
          throw new Error("Failed to get Spotify access token");
        }

        const { access_token } = await tokenResponse.json();
        const randomArtist =
          artists[Math.floor(Math.random() * artists.length)];

        const response = await fetch(
          `https://api.spotify.com/v1/artists/${randomArtist.id}/top-tracks?market=US`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Spotify tracks");
        }

        const data = await response.json();
        if (data.tracks && data.tracks.length > 0) {
          setTrack(data.tracks[0]);
        } else {
          throw new Error("No tracks found");
        }
      } catch (err) {
        console.error("Spotify API error:", err);
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  return { track, isLoading, error };
};
