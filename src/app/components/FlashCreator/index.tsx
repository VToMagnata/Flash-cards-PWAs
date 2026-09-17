"use client";

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { FlashData } from "../RenderFlash";

type Props = {
  setInf: Dispatch<SetStateAction<FlashData[]>>;
};

const FlashCreator = ({ setInf }: Props) => {
  const [value, setValue] = useState<FlashData>({
    question: "",
    response: "",
  });

  const handleSubmit = () => {
    if (!value.question.trim() || !value.response.trim()) {
      return;
    }

    setInf((prev) => [
      ...prev,
      {
        question: value.question,
        response: value.response,
      },
    ]);

    setValue({
      question: "",
      response: "",
    });
  };

  return (
    <main className="flex flex-col p-4 w-[65%] gap-8 bg-[#F7F8FA] mt-12 rounded-sm shadow-md mb-12">
      <h1 className="text-black text-5xl font-bold">Novo Flashcard</h1>

      <input
        type="text"
        placeholder="Pergunta"
        className="border p-1 rounded-sm text-black"
        value={value.question}
        onChange={(e) =>
          setValue((prev) => ({
            ...prev,
            question: e.target.value,
          }))
        }
      />

      <input
        type="text"
        placeholder="Resposta"
        className="border p-1 rounded-sm text-black"
        value={value.response}
        onChange={(e) =>
          setValue((prev) => ({
            ...prev,
            response: e.target.value,
          }))
        }
      />

      <button
        type="button"
        className="w-full bg-[#007AFE] p-2 rounded-sm cursor-pointer"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
    </main>
  );
};

export default FlashCreator;
