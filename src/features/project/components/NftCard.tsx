import { Button } from '@/ui/Button';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const CardPrice = ({ item, value }: { item: string; value: string }) => (
  <div className="flex flex-col items-start gap-1 font-rob text-white">
    <span className="text-[14px]/[22px] font-semibold capitalize">{item}</span>
    <span className="text-[18x]/[18px] font-bold">{value}</span>
  </div>
);

export const NftCard = ({ image }: { image: string }) => (
  <div className="block h-full w-full max-w-[319px] rounded-[19px] bg-alt-100 p-2 font-rob">
    <Image src={image} alt="project" width={301} height={441} className="mb-[21px] rounded-[16px]" />

    <div className="-mt-[100px] flex h-[100px] w-full flex-col items-start  rounded-b-[16px] bg-grey-200 bg-opacity-[0.48] px-2 py-4 backdrop-blur-[14.5px]">
      <span className="text-[14px]/[22px] font-semibold capitalize text-white">#7560</span>

      <div className="flex w-full items-center justify-between">
        <CardPrice item="Floor price" value="8.79 ETH" />
        <ArrowsRightLeftIcon className="h-10 w-10 text-white" />
        <CardPrice item="Loan Price" value="~ 0.79 ETH" />
      </div>
    </div>
    <div className="mb-2 mt-4 w-full px-2">
      <Button variant="filled" color="plain">
        Buy Now
      </Button>
    </div>
  </div>
);
