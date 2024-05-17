import { FC } from 'react'
import base64url from 'base64url'

const JwtView: FC<{ header: object; payload: object }> = ({
  header,
  payload,
}) => {
  return (
    <>
      <div className="border-b border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">JWT</span>
      </div>

      <div className="break-all px-5 py-4">
        <span className="overflow-none text-wrap text-rose-500">
          {base64url(JSON.stringify(header))}
        </span>
        .
        <span className="text-fuchsia-500">
          {base64url(JSON.stringify(payload))}
        </span>
        .
      </div>
    </>
  )
}

export default JwtView
