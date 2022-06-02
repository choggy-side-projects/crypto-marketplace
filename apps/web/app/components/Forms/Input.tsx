import * as React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input {...props} className={`h-8 bg-gray-100 ${props.className ?? ""}`} />
  );
};
