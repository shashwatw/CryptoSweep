import Image from 'next/image';

import images from '../assets';

const Loader = () => (
  <div className="flexCenter w-full my-4">
    <Image src={images.loader} alt="loader" width={300} objectFit="contain" />
  </div>
);

export default Loader;
