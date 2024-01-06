import { FormEvent, useEffect, useState, useRef } from 'react'
// import { LaunchVestClient } from '../contracts/launch_vest'
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'
import * as algokit from '@algorandfoundation/algokit-utils'
import { useWallet } from '@txnlab/use-wallet'
import { useSnackbar } from 'notistack'
import algosdk from 'algosdk'

const ServicesPage = () => {
  //   const [area, setArea] = useState<number>(479832604)
  const [area, setArea] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [country, setCountry] = useState<string>('')

  //   const { enqueueSnackbar } = useSnackbar()
  //   const { signer, activeAddress } = useWallet()
  //   const algodConfig = getAlgodConfigFromViteEnvironment()
  //   const algodClient = algokit.getAlgoClient({
  //     server: algodConfig.server,
  //     port: algodConfig.port,
  //     token: algodConfig.token,
  //   })

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //   const sender = { signer, addr: activeAddress! }

  //   const launchVestClient = new LaunchVestClient(
  //     {
  //       resolveBy: 'id',
  //       id: appId,
  //       sender,
  //     },
  //     algodClient,
  //   )

    const handleCreate = async () => {
      await launchVestClient.create.bare()
      const launchVestAppId = (await launchVestClient.appClient.getAppReference()).appId
      setAppId(Number(launchVestAppId))
      await launchVestClient.appClient.fundAppAccount(algokit.microAlgos(200_000))
      await launchVestClient.bootstrap({ asset: USDC_ASSET_ID })
      console.log(launchVestAppId)
    }

  // const shortenURL = async (URL: string) => {
  //   let _result;
  //       await fetch(`https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`, {
  //         mode: 'cors',
  //         headers: {
  //           Authorization: `Bearer ${import.meta.env.VITE_APP_BITLY_TOKEN}`,
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((result) => {
  //           _result = result
  //         })
  //     })
  //     return _result;
  // }

  //   const toTimestamp = (strDate: string) => {
  //     const dt = Date.parse(strDate)
  //     return dt / 1000
  //   }
  const handleSubmit = async (e) => {
    console.log('hello')
  }

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     setLoading(true)

  //     try {
  //       const _startTimestamp = toTimestamp(startTimestamp)
  //       const _endTimestamp = toTimestamp(endTimestamp)
  //       const _claimTimestamp = toTimestamp(claimTimestamp)

  //       if (!(assetId && startTimestamp && endTimestamp && claimTimestamp && assetPrice && minimumBuy && maximumBuy && imageURL)) {
  //         enqueueSnackbar(`Error: Make sure all fields are set.`, { variant: 'error' })
  //         return
  //       } else {
  //         // const tokenKey = algosdk.bigIntToBytes(Number(assetId), 8)
  //         const tokenKey = algosdk.encodeUint64(BigInt(assetId))
  //         const tupleType = algosdk.ABIType.from('(uint64,uint64,uint64,uint64,uint64,uint64,uint64)')
  //         const encodedTuple = tupleType.encode([
  //           BigInt(assetId),
  //           BigInt(_startTimestamp),
  //           BigInt(_endTimestamp),
  //           BigInt(_claimTimestamp),
  //           BigInt(assetPrice),
  //           BigInt(maximumBuy),
  //           BigInt(minimumBuy),
  //         ])
  //         const costTokenBox = PER_BOX_MBR + PER_BYTE_MBR * (8 + encodedTuple.byteLength * 2)
  //         console.log(costTokenBox)
  //         await launchVestClient.appClient.fundAppAccount(algokit.microAlgos(costTokenBox + 400_000))

  //         const listToken = await launchVestClient.listProject(
  //           {
  //             asset_id: BigInt(assetId),
  //             image_url: String(imageURL),
  //             start_timestamp: BigInt(_startTimestamp),
  //             end_timestamp: BigInt(_endTimestamp),
  //             claim_timestamp: BigInt(_claimTimestamp),
  //             price_per_asset: BigInt(assetPrice),
  //             max_investment_per_investor: BigInt(maximumBuy),
  //             min_investment_per_investor: BigInt(minimumBuy),
  //             vesting_schedule: BigInt(vestingSchedule),
  //           },
  //           {
  //             boxes: [tokenKey],
  //             sendParams: { fee: algokit.microAlgos(200_000) },
  //           },
  //         )

  //         const appAddress = (await launchVestClient.appClient.getAppReference()).appAddress

  //         const decimals = (await algodClient.getAssetByID(Number(assetId)).do()).params.decimals
  //         console.log(decimals)

  //         const _amountOfAsset = BigInt(amountOfAsset) * BigInt(10 ** decimals)
  //         console.log(_amountOfAsset)

  //         const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
  //           from: String(activeAddress),
  //           to: appAddress,
  //           amount: BigInt(_amountOfAsset),
  //           assetIndex: Number(assetId),
  //           suggestedParams: await algodClient.getTransactionParams().do(),
  //         })
  //         await launchVestClient.depositIdoAssets(
  //           { txn: txn, asset: BigInt(assetId) },
  //           {
  //             boxes: [tokenKey],
  //           },
  //         )
  //         console.log(listToken)
  //         enqueueSnackbar(`Project Listed successfully`)
  //       }
  //     } catch (e) {
  //       enqueueSnackbar(`Error listing project: ${(e as Error).message}`, { variant: 'error' })
  //       setLoading(false)
  //       return
  //     }
  //   }
  return (
    <div className="max-w-[94%] md:max-w-[80%] xl:max-w-[60%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato'] mt-20 mb-40">
      <div className="capitalize text-4xl flex justify-center py-5">list token</div>
      <div className="border-2 border-black-100 rounded-[50px] p-10 mb-10">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-5">
            <label htmlFor="asset_id" className="text-2xl capitalize">
              Area
            </label>
            <div className="mt-3">
              <input
                type="text"
                name="asset_id"
                id="asset_id"
                className="w-[100%] h-[50px] text-[16px] p-5 border-2 outline-0 bg-[#f8f6fe] rounded-lg"
                onChange={(e) => {
                  setArea(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="amount_of_asset" className="text-2xl capitalize">
              State
            </label>
            <div className="mt-3">
              <input
                type="text"
                name="amount_of_asset"
                id="amount_of_asset"
                className="w-[100%] h-[50px] text-[16px] p-5 border-2 outline-0 bg-[#f8f6fe] rounded-lg "
                onChange={(e) => {
                  setState(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="amount_of_asset" className="text-2xl capitalize">
              Country
            </label>
            <div className="mt-3">
              <input
                type="text"
                name="amount_of_asset"
                id="amount_of_asset"
                className="w-[100%] h-[50px] text-[16px] p-5 border-2 outline-0 bg-[#f8f6fe] rounded-lg "
                onChange={(e) => {
                  setCountry(e.target.value)
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-[100%] h-[50px] border-2 outline-0 rounded-full bg-[#737373] text-[16px] text-[#ffffff] font-bold shadow-lg shadow-indigo-500/40"
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            submit
          </button>
        </form>
      </div>

      <button onClick={() => handleCreate()}>create app</button>
    </div>
  )
}

export default ServicesPage
