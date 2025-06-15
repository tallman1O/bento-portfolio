import { useNasaAPOD } from "../app/hooks/useNasaAPOD";
import Image from "next/image";
import { useEffect } from "react";

interface NasaAPODProps {
  onLoad?: () => void;
}

export const NasaAPOD = ({ onLoad }: NasaAPODProps) => {
  const { data, isLoading, error } = useNasaAPOD();

  useEffect(() => {
    // Call onLoad if we have data or if there's an error (to prevent infinite loading)
    if ((!isLoading && data) || error) {
      console.log("NasaAPOD: Calling onLoad callback", {
        hasData: !!data,
        hasError: !!error,
      });
      onLoad?.();
    }
  }, [isLoading, data, error, onLoad]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white">
        <p className="text-sm text-white/50">Cosmic image unavailable</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-sm text-white/50">Cosmic image unavailable</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      {data.media_type === "image" && (
        <div className="relative w-full h-[20rem]">
          <Image
            src={data.url}
            alt={data.title}
            fill
            className="object-cover rounded-lg shadow-[0_0_8px_2px_rgba(255,255,255,0.6)]"
            priority
            onLoad={() => onLoad?.()}
          />
        </div>
      )}
    </div>
  );
};
