import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {}
type LoginType = { name: string, password: string,email?:string };
type SignUpType = { name: string, password: string, email: string };

const Login = (props: Props) => {

  const { pathname } = useLocation();
  const pageString = pathname === '/login' ? 'Login' : 'Sign Up';


  const [user, setUser] = useState<LoginType | SignUpType> (pathname === '/login' ? { name: '', password: '' } : { name: '', password: '', email: '' });

  const handleInputChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value })
  }


  return (
    <div className='bg-black h-screen grid place-content-center'>
      <div className='bg-gray-900 p-8 grid gap-2 rounded-md w-96' >
        <h2 className='text-white text-2xl font-semibold'>{pageString}</h2>
        <form action="" className='grid gap-4'>
          <div className='bg-gray-800 relative rounded-xl'>
            {!user?.name && <p className='text-gray-400 absolute text-xs p-1 px-2'>{pageString === "Login" ? 'Email or username' : 'Username'}</p>}
            <input name='name' type="text" value={user?.name} onChange={handleInputChange} className='outline-none bg-inherit p-2 mt-2 rounded-xl w-full' />
          </div>
          {pageString === 'Sign Up' && <div className='bg-gray-800 relative rounded-xl'>
            {!user?.email && <p className='text-gray-400 absolute text-xs p-1 px-2'>Email</p>}
            <input name='email' type="email" value={user?.email} onChange={handleInputChange} className='outline-none bg-inherit p-2 mt-2 rounded-xl w-full' />
          </div>}
          <div className='bg-gray-800 relative rounded-xl'>
            {!user?.password && <p className='text-gray-400 absolute text-xs p-1 px-2'>Password</p>}
            <input name='password' type="password" value={user?.password} onChange={handleInputChange} className='outline-none bg-inherit p-2 mt-2 rounded-xl w-full' />
          </div>
          <div className='bg-gray-800 relative rounded-3xl'>
            <input name='submit' type="submit" value={pageString} title={pageString} className='cursor-pointer text-gray-500 coutline-none bg-inherit p-2  rounded-3xl w-full' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login