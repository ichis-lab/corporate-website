import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div>
      <Button>adsf</Button>
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
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
