import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
  srLabel?: boolean
  icon?: JSX.Element
  iconLeft?: boolean
  variant?: 'primary'
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  label,
  srLabel,
  icon,
  iconLeft = false,
  variant = 'primary',
  type = 'button',
  ...rest
}: ButtonProps) => {
  const variants = {
    primary: 'text-white bg-violet-500 hover:bg-violet-600',
    secondary: '',
  }

  return (
    <button
      {...rest}
      className={`hover -m-1 inline-flex w-full items-center justify-center
      gap-2 whitespace-nowrap rounded-lg border-2 border-transparent py-1 px-2
      transition-all duration-200 focus:shadow-none ${
        iconLeft ? 'flex-row' : 'flex-row-reverse'
      } ${variants[variant]}`}
    >
      {icon && <div className="text-xl">{icon}</div>}
      <div className={`${srLabel ? 'sr-only' : 'font-medium'}`}>{label}</div>
    </button>
  )
}
