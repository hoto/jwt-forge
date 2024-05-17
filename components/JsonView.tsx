import { FC } from 'react'

const JsonView: FC<{ payload: object }> = ({ payload }) => {
  const header = {
    typ: 'JWT',
    alg: 'none',
  }
  return (
    <>
      <div className="border border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">HEADER:</span>
      </div>
      <div className="border border-t-0 border-slate-800 px-5 py-4">
        <pre>{JSON.stringify(header, null, 2)}</pre>
      </div>
      <div className="border border-t-0 border-slate-800 px-3 py-1">
        <span className="text-sm font-light ">PAYLOAD:</span>
      </div>
      <div className="border border-t-0 border-slate-800 px-5 py-4">
        <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </>
  )
}

export default JsonView
