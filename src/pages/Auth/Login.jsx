import React, { useState } from 'react' // eslint-disable-line
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import InputAuth from '../../components/Form/Inputs/InputAuth'
import Logo from '../../components/Logo/Index'
import { useMutation } from 'react-query'
import UsersApi from '@/api/users'
import { toast } from 'react-toastify'

export default function Login() {
  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => UsersApi.Login(login),
    onSuccess: (e) => {
      localStorage.setItem('@GCSAuth:token', e?.data?.token)

      toast.success('Usuário logado com sucesso!')
      navigate('/maps')
    },
    onError: (e) => {
      // setErrors(transformErrors(e?.issues))
      toast.error('Falha ao logar!')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate()
  }

  return (
    <div className="flex flex-col lg:flex-row h-nulo">
      <div className="flex h-screen items-center p-10 px-28 bg-white border w-full lg:w-1/2">
        <div className="w-full lg:max-w-2xl">
          <div className="text-center py-4">
            <div className="flex justify-center">
              <FaHome size={45} />
            </div>
            <p className="text-4xl font-bold">GEOCOPSAM</p>
            {/* <p className='text-sm'>Plase enter your details.</p> */}
          </div>

          <form className="mt-10" onClick={handleSubmit}>
            <div>
              <InputAuth
                name="email"
                type="email"
                value={login.email}
                placeholder="Email"
                onChange={(input) =>
                  setLogin({ ...login, email: input.target.value })
                }
                showPassword
                onSubmit={handleSubmit}
                // error,
                // disabled
              />

              <InputAuth
                name="password"
                type="password"
                value={login.password}
                placeholder="Senha"
                onChange={(input) =>
                  setLogin({ ...login, password: input.target.value })
                }
                onSubmit={handleSubmit}
                // error,
                // disabled
              />
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-end text-xs py-2 text-gray-400 transition hover:text-gray-600"
              >
                Esqueçeu a senha?
              </Link>
            </div>

            {/* <Link to="/maps"> */}
            <button
              onClick={handleSubmit}
              className="border mt-10 p-2 w-full rounded-3xl bg-verde-texture3 transition hover:opacity-80 text-white font-bold"
            >
              Acessar
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>

      <Logo />
    </div>
  )
}
