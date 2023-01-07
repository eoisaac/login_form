import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  label: string
  srLabel?: boolean
  icon?: JSX.Element
  errorMessage?: string
  // func: register: UseFormRegister<FieldValues>
  register?: UseFormRegisterReturn<string>
}

export const InputField = ({
  type = 'text',
  label,
  srLabel = false,
  errorMessage,
  icon,
  register,
  ...rest
}: InputFieldProps) => {
  const hasError = Boolean(errorMessage)
  const hasIcon = Boolean(icon)

  return (
    <label className="group relative my-2 w-full">
      <span
        className={`${
          srLabel
            ? 'sr-only'
            : 'block pl-1 text-left text-sm font-medium text-neutral-500'
        }`}
      >
        {label}
      </span>
      <div
        className={`flex flex-1 items-center gap-2 overflow-hidden rounded-md
        border-2  bg-white px-2 py-1 shadow-sm
        transition-all duration-200  ${
          hasError
            ? 'border-rose-500 group-focus-within:border-rose-500'
            : 'border-neutral-200 group-focus-within:border-violet-500'
        }`}
      >
        {hasIcon && (
          <div
            className={`text-lg text-neutral-400 ${
              hasError
                ? 'text-rose-500 group-focus-within:border-rose-500'
                : 'group-focus-within:text-violet-500'
            }`}
          >
            {icon}
          </div>
        )}
        <input
          {...register}
          {...rest}
          type={type}
          className="w-full bg-transparent px-1 placeholder:text-neutral-400
        focus:shadow-none"
        />
      </div>
      {hasError && (
        <span className="absolute top-full block pl-1 text-sm text-rose-500">
          {errorMessage}
        </span>
      )}
    </label>
  )
}
