"use client";

import { useState } from "react";
import { X, Eye, EyeClosed } from "lucide-react";

export type FlashData = {
  question: string;
  response: string;
};

type Props = {
  data: FlashData;
  onDelete: () => void;
};

const RenderFlash = ({ data, onDelete }: Props) => {
  const [trade, setTrade] = useState(false);

  return (
    <main className="flex justify-between items-center px-4 mb-4 min-h-[4em] p-2 w-[65%] bg-[#F7F8FA] rounded-sm shadow-md">
      <span>
        {!trade ? (
          <h1 className="text-black font-bold">{data.question}</h1>
        ) : (
          <h1 className="text-black break-all">{data.response}</h1>
        )}
      </span>

      <span className="flex gap-4 p-4">
        {!trade ? (
          <EyeClosed
            className="cursor-pointer"
            color="black"
            onClick={() => setTrade((prev) => !prev)}
          />
        ) : (
          <Eye
            className="cursor-pointer"
            color="black"
            onClick={() => setTrade((prev) => !prev)}
          />
        )}

        <X color="red" className="cursor-pointer" onClick={onDelete} />
      </span>
    </main>
  );
};

export default RenderFlash;
