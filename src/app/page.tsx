export default function Home() {
  return (
    <div className="">
      <Top />
      <Company />
    </div>
  );
}

const Top = () => {
  return (
    <div className="h-[700px] flex items-center bg-amber-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold ">OUR MISSION</h2>
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div>
      <h2>COMPANY</h2>
    </div>
  );
};
