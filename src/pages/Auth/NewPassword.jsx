import React, { useState } from 'react' // eslint-disable-line
import { useNavigate } from 'react-router-dom'
import InputAuth from '../../components/Form/Inputs/InputAuth'
import Logo from '../../components/Logo/Index'
import { useMutation } from 'react-query'
import UsersApi from '@/api/users'
import { toast } from 'react-toastify'

export default function NewPassword() {
  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const { mutate } = useMutation({
    mutationFn: async () => UsersApi.Login(login),
    onSuccess: (e) => {
      localStorage.setItem('@GCSAuth:token', e?.data?.token)

      toast.success('Usuário logado com sucesso!')
      navigate('/maps')
    },
    onError: () => {
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
            <p className="text-4xl font-bold">Redefinição de senha</p>
            <p className="text-sm mt-4">
              Digite a nova senha que será utilizada para o login.
            </p>
          </div>

          <form className="mt-10" onClick={handleSubmit}>
            <div>
              <InputAuth
                name="password"
                type="password"
                value={login.password}
                placeholder="Nova senha"
                onChange={(input) =>
                  setLogin({ ...login, password: input.target.value })
                }
                onSubmit={handleSubmit}
              />

              <InputAuth
                name="password"
                type="password"
                value={login.password}
                placeholder="Confirmar senha"
                onChange={(input) =>
                  setLogin({ ...login, password: input.target.value })
                }
                onSubmit={handleSubmit}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="border mt-10 p-2 w-full rounded-3xl bg-verde-texture3 transition hover:opacity-80 text-white font-bold"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>

      <Logo />
    </div>
  )
}
