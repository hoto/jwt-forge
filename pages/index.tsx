import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ParamsFields from '../components/ParamsFields'
import ParamField from '../components/ParamField'
import JsonView from '../components/JsonView'
import JwtView from '../components/JwtView'
import base64url from 'base64url'
import AddDropdownButtons from '../components/AddDropdownButtons'
import basePath from '../services/basePath'
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
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>

      <main className="container mx-auto grid grid-cols-6 justify-items-center px-4 py-8 sm:w-full md:w-3/4 xl:w-2/3 2xl:w-1/2">
        <div className="col-span-6 mb-10  content-center items-center justify-items-center  ">
          <div className="flex gap-1">
            <div>
              <Link href={'https://www.flaticon.com/free-icons/blacksmith'} target={'_blank'}>
                <img
                  src={`${basePath}/blacksmith.png`}
                  alt="Blacksmith icons created by Freepik - Flaticon"
                  width={50}
                />
              </Link>
            </div>
            <div>
              <h1 className="text-3xl font-bold ">JWT Forge</h1>
              <h3 className="text-end text-xs font-light">
                Create unsigned JWT easy.
              </h3>
            </div>
          </div>
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
            <AddDropdownButtons
              onClick={(keyValue: string) => {
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
                    key: keyValue,
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
