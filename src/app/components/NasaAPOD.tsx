import { useNasaAPOD } from "../hooks/useNasaAPOD";
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

  if (error || !data || data.media_type !== "image") {
    return null;
  }

  return (
    <div className="relative w-full h-[300px]">
      <Image
        src={data.url}
        alt={data.title}
        fill
        className="object-cover rounded-lg"
        priority
      />
    </div>
  );
};
