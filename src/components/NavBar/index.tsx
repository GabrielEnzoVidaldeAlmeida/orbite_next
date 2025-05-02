import Image from 'next/image'
import logo from '../../assets/images/logo2.png'
import Link from 'next/link'
import clsx from 'clsx'

export function NavBar() {
  return (
    <nav className='flex items-center justify-between w-full border-b-2 border-orbite-bd-light  dark:border-b-orbite-bd-dark dark:text-orbite-p-text-dark'>
      <div>
        <Image src={logo} alt='' className='w-30 h-30' />
      </div>

      <div className='flex justify-center items-center gap-8 mr-8'>
        <strong className='text-xl'>Categorias</strong>
        <input 
          placeholder="O que você procura?" 
          className=' p-2 border-2 rounded-sm outline-none

          border-orbite-bd-light caret-orbite-caret-light placeholder-orbite-ct-text-light bg-orbite-bg-dark 
          
          dark:border-orbite-bd-dark dark:caret-orbite-caret dark:placeholder-orbite-p-text-dark '
        />
        <Link href="/" >Login</Link>
        <Link
          href="/"
          className={clsx(
            'border rounded-md p-2 transition',
            'border-orbite-bd-light hover:text-orbite-ct-text-light hover:bg-orbite-caret-light hover:shadow-[0_0_1rem_0_var(--color-orbite-caret-light)]',
            'dark:border-orbite-bd-dark dark:hover:text-orbite-ct-text-dark dark:hover:bg-orbite-caret-dark dark:hover:shadow-[0_0_1rem_0_var(--color-orbite-caret-dark)]'
          )}
        >
          Cadastrar-se
        </Link>
      </div>
    </nav>
  )
}