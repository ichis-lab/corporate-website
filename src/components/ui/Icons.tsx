import Image from 'next/image';

type IconProps = {
  width?: number;
  height?: number;
};

export const Icons = {
  LogoText: ({ width = 130 }: IconProps) => {
    const height = width * 0.2;
    return (
      <Image
        src="/images/company-name.svg"
        alt="Logo Text"
        width={width}
        height={height}
        priority
      />
    );
  },
};
