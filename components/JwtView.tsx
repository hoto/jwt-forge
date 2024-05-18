import { FC } from 'react'
import base64url from 'base64url'
import Link from 'next/link'

const JwtView: FC<{ header: object; payload: object }> = ({
  header,
  payload,
}) => {
  const headerPart = base64url(JSON.stringify(header))
  const payloadPart = base64url(JSON.stringify(payload))
  return (
    <div className="relative h-full">
      <div className="border-b border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">JWT</span>
      </div>

      <div className="break-all px-5 pt-4 mb-16">
        <span className="overflow-none text-wrap text-rose-500">
          {headerPart}
        </span>
        .<span className="text-fuchsia-500">{payloadPart}</span>.
      </div>
      <div className="absolute bottom-0 right-0 px-3 py-1">
        <Link
          href={`https://jwt.io/?value=${headerPart}.${payloadPart}.`}
          className="text-sm font-light hover:text-blue-500 hover:underline"
          target="_blank"
        >
          <img src="/view-on-jwt-io.svg" alt="View on jwt.io" />
        </Link>
      </div>
    </div>
  )
}

export default JwtView
