import { FC } from 'react'

const AddDropdownButtons: FC<{ onClick: Function }> = ({ onClick }) => {
  return (
    <div className="group relative text-slate-50 *:cursor-pointer">
      <button className="group inline-flex h-10 w-10 items-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 p-2.5 text-center text-sm">
        <PlusIcon />
      </button>

      <ul className="absolute right-0 top-0 hidden items-center rounded-3xl bg-gradient-to-br from-green-600 to-blue-600 *:rounded-full group-hover:inline-flex">
        <button
          className="py-2 pl-4  pr-2.5 hover:shadow-xl hover:shadow-black focus:shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
          onClick={() => onClick('iat')}
        >
          iat
        </button>
        <button
          className="p-2 hover:shadow-xl  hover:shadow-black focus:shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
          onClick={() => onClick('exp')}
        >
          exp
        </button>
        <button
          className="px-4 py-2 hover:shadow-xl  hover:shadow-black focus:shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
          onClick={() => onClick('jti')}
        >
          jti
        </button>
        <button
          className="px-3 py-2 hover:shadow-xl  hover:shadow-black focus:shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
          onClick={() => onClick('iss')}
        >
          iss
        </button>
        <button
          className="px-2.5 py-2 hover:shadow-xl hover:shadow-black focus:shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
          onClick={() => onClick('cid')}
        >
          cid
        </button>
        <button
          className="p-2 hover:shadow-xl hover:shadow-black focus:shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
          onClick={() => onClick('aud')}
        >
          aud
        </button>
        <button
          className="p-2 hover:shadow-xl hover:shadow-black focus:shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
          onClick={() => onClick('sub')}
        >
          sub
        </button>
        <button
          className="p-2.5 hover:shadow-xl hover:shadow-black focus:shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]"
          onClick={() => onClick('')}
        >
          <PlusIcon />
        </button>
      </ul>
    </div>
  )
}

const PlusIcon: FC = () => {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
    </svg>
  )
}
export default AddDropdownButtons
