import React from "react";
type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center p-24">
      {children}
    </div>
  );
}
