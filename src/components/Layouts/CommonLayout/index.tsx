import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/Icons';
import { COMPANY_NAME, FORM_URL } from '@/settings';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center bg-gradient-to-b h-[80px] lg:h-[120px] from-[#22222299] to-[#73737300]">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <Icons.LogoText />
        </a>
        <a href={FORM_URL} target="_blank">
          <Button>お問い合わせ</Button>
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={`flex items-center justify-center text-sm h-[80px]`}>
      © 2024 {COMPANY_NAME}株式会社 All Rights Reserved.
    </div>
  );
};

export const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={`min-h-[calc(100vh-80px)]`}>{children}</main>
      <Footer />
    </>
  );
};
