import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/Icons';

const Header = () => {
  return (
    <div className="flex items-center bg-gradient-to-b h-[80px] lg:h-[120px] from-[#22222299] to-[#73737300]">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <Icons.LogoText />
        </a>
        <a href="/contact">
          <Button>お問い合わせ</Button>
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div></div>;
};

export const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
