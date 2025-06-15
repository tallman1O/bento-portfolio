import { useState, useEffect } from "react";

interface SpotifyTrack {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
}

interface UseSpotifyReturn {
  track: SpotifyTrack | null;
  isLoading: boolean;
  error: string | null;
}

const ARTISTS = [
  "0OdUWJ0sBjDrqHygGUXeCF", // Coldplay
  "1uNFoZAHBGtllmzznpCI3s", // Justin Bieber
  "3HqSLMAZ3g3d5poNaI7GOU", // Adele
  "1dfeR4HaWDbWqFHLkxsg1d", // Queen
  "0C0XlULifJtAgn6ZNCW2eu", // The Killers
  "4gzpq5DPGxSnKTe4SA8HAU", // Coldplay
  "1uNFoZAHBGtllmzznpCI3s", // Justin Bieber
  "3HqSLMAZ3g3d5poNaI7GOU", // Adele
  "1dfeR4HaWDbWqFHLkxsg1d", // Queen
  "0C0XlULifJtAgn6ZNCW2eu", // The Killers
];

export const useSpotify = (): UseSpotifyReturn => {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Get a random artist from the list
        const randomArtist =
          ARTISTS[Math.floor(Math.random() * ARTISTS.length)];

        // Get access token from our API route
        const tokenResponse = await fetch("/api/spotify/token");
        if (!tokenResponse.ok) {
          throw new Error("Failed to get Spotify token");
        }
        const { access_token } = await tokenResponse.json();

        // Fetch top tracks for the artist
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${randomArtist}/top-tracks?market=US`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Spotify data");
        }

        const data = await response.json();
        if (!data.tracks || data.tracks.length === 0) {
          throw new Error("No tracks found");
        }

        // Get a random track from the top tracks
        const randomTrack =
          data.tracks[Math.floor(Math.random() * data.tracks.length)];
        setTrack(randomTrack);
        setError(null);
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch Spotify data"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  return { track, isLoading, error };
};
