import { FC, useEffect, useState } from 'react'
import RemoveParamButton from '../components/RemoveParamButton'

const ParamField: FC<{
  fieldId: string
  inputKey: string
  inputValue: string
  onFieldChange: Function
  onFieldRemoval: Function
}> = ({ fieldId, inputKey, inputValue, onFieldChange, onFieldRemoval }) => {
  const [key, setKey] = useState<string>(inputKey)
  const [value, setValue] = useState<string>(inputValue)

  useEffect(() => {
    onFieldChange(fieldId, key, value)
  }, [key, value])

  return (
    <>
      <div className="col-span-1">
        <input
          type="text"
          className="block w-full rounded-md border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Field name"
          defaultValue={key}
          onChange={(event) => {
            setKey(event.target.value)
          }}
        />
      </div>
      <div className="col-span-2 flex gap-2">
        <input
          type="text"
          className="block w-full rounded-md border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Field value"
          defaultValue={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
        <RemoveParamButton onBtnClick={() => onFieldRemoval(fieldId)} />
      </div>
    </>
  )
}

export default ParamField
