import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as zod from 'zod'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import { AuthenticationContext } from '../contexts/AuthenticationContext'

export const Login = () => {
  const { login } = useContext(AuthenticationContext)

  const LoginFormSchema = zod.object({
    email: zod.string().email(),
    password: zod
      .string()
      .min(8, { message: 'Must be 8 or more characters long' }),
  })

  type LoginFormFormData = zod.infer<typeof LoginFormSchema>

  const LoginForm = useForm<LoginFormFormData>({
    resolver: zodResolver(LoginFormSchema),
  })

  const { formState, register, handleSubmit, reset } = LoginForm
  const { errors } = formState

  const handleLoginSubmit = (data: LoginFormFormData) => {
    const { email, password } = data

    login(email, password)
    reset()
  }

  return (
    <section className="grid flex-1 place-items-center">
      <section
        className="flex w-full max-w-md flex-col gap-4 rounded-md 
      bg-white p-4 shadow-md"
      >
        <header>
          <h1 className="text-2xl font-bold text-neutral-800">Log in</h1>
          <p>Enter your credentials to access your account.</p>
        </header>
        <form
          className="flex flex-col items-center gap-2"
          onSubmit={handleSubmit(handleLoginSubmit)}
        >
          <InputField
            label="Email"
            register={register('email', { required: true })}
            errorMessage={errors.email && errors.email.message}
          />
          <InputField
            label="Password"
            type="password"
            register={register('password', { required: true })}
            errorMessage={errors.password && errors.password.message}
          />
          <fieldset className="mb-1 flex items-center justify-between">
            <Link to="/login" className="text-sm text-violet-500">
              Forgot password?
            </Link>
          </fieldset>
          <Button type="submit" label="Login" variant="primary" />

          <div className="text-sm">
            <span>Don&apos;t have an account? </span>
            <Link to="/login" className="text-violet-500">
              Sign up
            </Link>
          </div>
        </form>
      </section>
    </section>
  )
}
