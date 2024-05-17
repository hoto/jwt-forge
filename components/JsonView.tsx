import { FC } from 'react'

const JsonView: FC<{ header: object; payload: object }> = ({
  header,
  payload,
}) => {
  return (
    <div className="">
      <div className="border-b border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">HEADER</span>
      </div>
      <div className="border-b border-slate-800 px-5 py-4 text-rose-500">
        <pre>{JSON.stringify(header, null, 2)}</pre>
      </div>
      <div className="border-b border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">PAYLOAD</span>
      </div>
      <div className="whitespace-pre-wrap break-all px-5 py-4 font-mono text-fuchsia-500">
        {JSON.stringify(payload, null, 2)}
      </div>
    </div>
  )
}

export default JsonView
