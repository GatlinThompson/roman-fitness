import Image from "next/image";
import loadingSpinner from "@/public/loading-spinner.svg";

type SpinnerProps = {
  className?: string;
};

export default function Spinner({ className = "w-6 h-6" }: SpinnerProps) {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={loadingSpinner}
        alt="loading"
        height={32}
        width={32}
        className={`animate-spin ${className}`}
        loading="eager"
      />
    </div>
  );
}
