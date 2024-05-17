import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ParamsFields from '../components/ParamsFields'
import ParamField from '../components/ParamField'
import AddParamButton from '../components/AddParamButton'
import JsonView from '../components/JsonView'
import JwtView from '../components/JwtView'
import base64url from 'base64url'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const [hasInitialised, setHasInitialised] = useState<boolean>(false)
  const [initialClaims, setInitialClaims] = useState<object>({})
  const [updatedClaims, setUpdatedClaims] = useState<object>({})
  const [payload, setPayload] = useState<object>({})
  const header = {
    typ: 'JWT',
    alg: 'none',
  }

  useEffect(() => {
    if (!hasInitialised && router.query.claims) {
      const claimsJson = base64url.decode(router.query.claims as string)
      setInitialClaims(JSON.parse(claimsJson))
      setUpdatedClaims(JSON.parse(claimsJson))
      setHasInitialised(true)
    }
  }, [router.query.claims])

  useEffect(() => {
    const json = Object.entries(updatedClaims).reduce(
      (acc, [key, { key: k, value: v }]) => {
        if (acc[k]) {
          if (Array.isArray(acc[k])) {
            acc[k].push(v)
          } else {
            acc[k] = [acc[k], v]
          }
        } else {
          acc[k] = v
        }
        return acc
      },
      {}
    )
    setPayload(json)
  }, [updatedClaims])

  return (
    <>
      <Head>
        <title>JWT Forge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto grid grid-cols-6 justify-items-center px-4 py-8 sm:w-full md:w-3/4 xl:w-2/3 2xl:w-1/2">
        <div className="col-span-6 mb-10  content-center items-center justify-items-center  ">
          <div className="flex gap-1">
            <Link
              href="https://github.com/hoto/jwt-forge"
              className="hover:text-blue-500"
            >
              <svg
                className="h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </Link>
            <h1 className="text-3xl font-bold ">JWT Forge</h1>
          </div>
          <h3 className="text-end text-xs font-light">
            Create unsigned JWT easy.
          </h3>
        </div>

        <div className="col-span-6 w-full">
          <ParamsFields>
            {Object.entries(initialClaims)
              .map((param, index) => ({
                fieldId: param[0],
                key: param[1].key,
                value: param[1].value,
                index,
              }))
              .map(({ fieldId, key, value, index }) => (
                <ParamField
                  key={fieldId}
                  fieldId={fieldId}
                  inputKey={key}
                  inputValue={value}
                  onFieldChange={(
                    fieldId: string,
                    key: string,
                    value: string
                  ) => {
                    const newClaims = {
                      ...updatedClaims,
                      [fieldId]: { key, value },
                    }
                    setUpdatedClaims(newClaims)
                    router.push({
                      query: {
                        claims: base64url.encode(JSON.stringify(newClaims)),
                      },
                    })
                  }}
                  onFieldRemoval={(fieldId: string) => {
                    const newClaims = { ...updatedClaims }
                    delete newClaims[fieldId]
                    setUpdatedClaims(newClaims)
                    router
                      .push({
                        query: {
                          claims: base64url.encode(JSON.stringify(newClaims)),
                        },
                      })
                      .then(() => {
                        setInitialClaims(newClaims)
                      })
                  }}
                />
              ))}
          </ParamsFields>
          <div className="my-4 grid justify-items-end">
            <AddParamButton
              onClick={() => {
                const highestKey =
                  Object.keys(updatedClaims).length === 0
                    ? 0
                    : Math.max(
                        ...Object.keys(updatedClaims).map((key) =>
                          parseInt(key)
                        )
                      )
                const i = highestKey + 1
                const newClaims = {
                  ...updatedClaims,
                  [i]: {
                    key: '',
                    value: '',
                  },
                }
                setUpdatedClaims(newClaims)
                router
                  .push({
                    query: {
                      claims: base64url.encode(JSON.stringify(newClaims)),
                    },
                  })
                  .then(() => {
                    setInitialClaims(newClaims)
                  })
              }}
            />
          </div>
        </div>
        <div className="col-span-6 w-full border border-slate-800 md:col-span-3">
          <JsonView header={header} payload={payload} />
        </div>
        <div className="col-span-6 w-full border-b border-l border-r border-slate-800 md:col-span-3 md:border md:border-l-0">
          <JwtView header={header} payload={payload} />
        </div>
      </main>
    </>
  )
}
