import { useRef } from "react";
import plus from "@/assets/common/plus.svg"
import minus from "@/assets/common/minus.svg"
import Image from "next/image";

const Accordian = ({ focused, handleFocus, faq }) => {
  const answerRef = useRef(null);
  return (
    <div className="mt-4 select-none">
      <div onClick={handleFocus} className="flex border-b cursor-pointer border-white w-full pb-2 text-xl sm:text-lg">
        <Image width={16} height={16} src={!focused ? plus : minus} className="mr-4" />{faq.question}
      </div>
      <div
        style={
          focused
            ? { height: `${answerRef.current?.scrollHeight}px` }
            : { height: 0 }
        }
        ref={answerRef}
        className="overflow-hidden transition-all duration-300 text-xl sm:text-lg"
      >
        <div className="py-3">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
