import Image from 'next/image';

export const Icons = {
  LogoText: () => (
    <Image
      src="/images/company-name.svg"
      alt="Logo Text"
      width={100}
      height={100}
      priority
    />
  ),
};
