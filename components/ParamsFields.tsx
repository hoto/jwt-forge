import { FC, ReactNode } from "react";

const ParamsFields: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <form>
      <div className="grid grid-cols-3 gap-x-2 gap-y-4">{children}</div>
    </form>
  );
};

export default ParamsFields;
