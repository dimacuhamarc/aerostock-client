import React from 'react';
import { LuSquareAsterisk } from 'react-icons/lu';

type InputProps = {
  Icon: React.ReactNode;
  placeholder: string;
  type: string;
  isRequired: boolean;
  ref: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ Icon, placeholder, type, isRequired, ref, ...props }: InputProps) {
  return (
    <label className="input input-bordered flex items-center gap-3">
      {Icon}
      <input
        ref={ref}
        type={type}
        className="grow"
        placeholder={placeholder}
        required={isRequired}
        {...props}
      />
    </label>
  );
}
