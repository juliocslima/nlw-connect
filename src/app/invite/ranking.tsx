import Image from 'next/image'

import medalCooper from '../../assets/medal_cooper.svg'
import medalGold from '../../assets/medal_gold.svg'
import medalSilver from '../../assets/medal_silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leadning-none">
            <span className="font-semibold">1º</span> | André Souza
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1.128
          </span>

          <Image src={medalGold} alt="" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leadning-none">
            <span className="font-semibold">2º</span> | André Souza
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            928
          </span>

          <Image src={medalSilver} alt="" className="absolute top-0 right-8" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leadning-none">
            <span className="font-semibold">3º</span> | André Souza
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            875
          </span>

          <Image src={medalCooper} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
