import { FC } from 'react'

const JwtView: FC<{ header: object; payload: object }> = ({
  header,
  payload,
}) => {
  return (
    <>
      <div className="border-b border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">JWT:</span>
      </div>

      <div className="px-5 py-4">
        <pre>{JSON.stringify(header, null, 2)}</pre>
        <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </>
  )
}

export default JwtView
