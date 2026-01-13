"use client";

import Button from "@/components/ui/Button";

export default function PhaseChanger() {
  return (
    <div className="-mt-0 flex justify-center">
      <Button roundedBottom borderedBottom={true} className=" w-full md:w-48">
        Change Phase
      </Button>
    </div>
  );
}
