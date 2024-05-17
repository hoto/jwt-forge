import { FC } from 'react'

const JsonView: FC<{ header: object; payload: object }> = ({
  header,
  payload,
}) => {
  return (
    <>
      <div className="border-b border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">HEADER:</span>
      </div>
      <div className="border-b border-slate-800 px-5 py-4">
        <pre>{JSON.stringify(header, null, 2)}</pre>
      </div>
      <div className="border-b border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">PAYLOAD:</span>
      </div>
      <div className="px-5 py-4">
        <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </>
  )
}

export default JsonView
