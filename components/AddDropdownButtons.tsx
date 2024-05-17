import { FC } from 'react'

const AddDropdownButtons: FC<{ onClick: Function }> = ({ onClick }) => {
  return (
    <div className="group relative text-slate-50 *:cursor-pointer">
      <button
        className="group inline-flex h-10 w-10 items-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 p-2.5 text-center text-sm font-medium hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200"
        onClick={() => onClick()}
      >
        <PlusIcon />
      </button>

      <ul className="absolute right-0 top-0 hidden items-center rounded-3xl bg-gradient-to-br from-green-600 to-blue-600 *:rounded-full *:ring-inset *:ring-slate-100 group-hover:inline-flex">
        <li className="py-2 pl-4 pr-2.5 ring-inset ring-slate-100 hover:ring-2">
          iat
        </li>
        <li className="p-2 hover:ring-2">exp</li>
        <li className="px-4 py-2 hover:ring-2">jti</li>
        <li className="px-3 py-2 hover:ring-2">iss</li>
        <li className="px-2.5 py-2 hover:ring-2">cid</li>
        <li className="p-2 hover:ring-2">sub</li>
        <li className="p-2 hover:ring-2">aud</li>
        <li className="p-2.5 hover:ring-2">
          <PlusIcon />
        </li>
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
