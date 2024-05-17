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

      <ul className="absolute right-0 top-0 hidden items-center gap-3 rounded-3xl bg-gradient-to-br from-green-600 to-blue-600 pl-4 text-center group-hover:inline-flex">
        <li>iat</li>
        <li>exp</li>
        <li>jti</li>
        <li>iss</li>
        <li>cid</li>
        <li>sub</li>
        <li>aud</li>
        <li>
          <div className="rounded-full p-2.5">
            <PlusIcon />
          </div>
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
