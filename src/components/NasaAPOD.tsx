import { useNasaAPOD } from "../app/hooks/useNasaAPOD";

import Image from "next/image";

export const NasaAPOD = () => {
  const { data, isLoading, error } = useNasaAPOD();

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
        Error: {error.message}
      </div>
    );
  }

  if (!data) {
    return null;
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
          />
        </div>
      )}
    </div>
  );
};
