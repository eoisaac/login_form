import { zodResolver } from '@hookform/resolvers/zod'
import { At, Password } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as zod from 'zod'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import { AuthenticationContext } from '../contexts/AuthenticationContext'

export const SignUp = () => {
  const { signUp } = useContext(AuthenticationContext)

  const SignUpFormSchema = zod
    .object({
      email: zod.string().email({ message: 'Invalid email!' }),
      password: zod
        .string()
        .min(8, { message: 'Must be 8 or more characters long!' }),
      confirmPassword: zod
        .string()
        .min(8, { message: 'Must be 8 or more characters long!' }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      path: ['confirmPassword'],
      message: "Password don't match",
    })

  type SignUpFormFormData = zod.infer<typeof SignUpFormSchema>

  const SignUpForm = useForm<SignUpFormFormData>({
    resolver: zodResolver(SignUpFormSchema),
  })

  const { formState, register, handleSubmit, reset } = SignUpForm
  const { errors } = formState

  const handleSignUpSubmit = ({
    email,
    password,
    confirmPassword,
  }: SignUpFormFormData) => {
    signUp(email, password, confirmPassword)
    reset()
  }

  return (
    <section className="flex flex-1 items-center justify-center">
      <div
        className="flex h-full w-full max-w-md flex-col justify-center gap-4
      rounded-md bg-white p-4 shadow-md sm:h-auto"
      >
        <header>
          <h1 className="text-2xl font-bold text-neutral-800">Sign up</h1>
          <p>Enter your credentials to create an account.</p>
        </header>
        <form
          className="flex flex-col items-center gap-4 sm:flex-auto"
          onSubmit={handleSubmit(handleSignUpSubmit)}
        >
          <div className="flex w-full flex-col gap-2">
            <InputField
              label="Email"
              icon={<At />}
              register={register('email', { required: true })}
              errorMessage={errors.email && errors.email.message}
            />
            <InputField
              type="password"
              label="Password"
              icon={<Password />}
              register={register('password', { required: true })}
              errorMessage={errors.password && errors.password.message}
            />
            <InputField
              type="password"
              label="Confirm password"
              icon={<Password />}
              register={register('confirmPassword', { required: true })}
              errorMessage={
                errors.confirmPassword && errors.confirmPassword.message
              }
            />
          </div>
          <Button type="submit" label="Sign up" variant="primary" />

          <div className="py-1 text-sm">
            <span>Already have an account? </span>
            <Link to="/login" className="text-violet-500">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
