export default function Home() {
  return (
    <div>
      <Top />
      <Company />
      <div className="h-[100px]" />
    </div>
  );
}

const Top = () => {
  return (
    <div className="h-[700px] flex items-center bg-secondary">
      <div className="container-lg text-white font-bold">
        <h2 className="text-5xl">We are Ichis inc.</h2>
        <div className="text-2xl mt-6">世界を変えるソフトウェアを作る</div>
      </div>
    </div>
  );
};

const Data = [
  {
    title: '会社名',
    value: 'Ichis株式会社',
  },
  {
    title: '住所',
    value: '東京都千代田区永田町1-7-1',
  },
  {
    title: '設立',
    value: '2025年4月1日',
  },
  {
    title: '代表取締役',
    value: '山田 太郎',
  },
  {
    title: '資本金',
    value: '1,000万円',
  },
];

const Company = () => {
  return (
    <div className="container-lg bg-white flex items-center">
      <div className="mt-32">
        <h2 className="text-5xl font-bold">COMPANY</h2>
        <div className="flex flex-col gap-6 mt-8 mx-10">
          {Data.map((item) => (
            <div
              key={item.title}
              className="flex items-center font-[500] text-base"
            >
              <div className="w-[300px] text-gray-600">{item.title}</div>
              <div className="">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
