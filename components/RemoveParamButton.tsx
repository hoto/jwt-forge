import { FC } from "react";

const RemoveParamButton: FC<{ onBtnClick: Function }> = ({ onBtnClick }) => {
  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center rounded-full bg-gradient-to-r from-purple-700 to-rose-500 p-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200"
      onClick={() => onBtnClick()}
    >
      <MinusIcon />
    </button>
  );
};

const MinusIcon: FC = () => {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"></path>
    </svg>
  );
};

export default RemoveParamButton;
