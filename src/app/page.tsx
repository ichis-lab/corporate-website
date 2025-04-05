export default function Home() {
  return (
    <div>
      <Top />
      <Company />
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
    value: '東京都新宿区新宿5-18-20 ルックハイツ新宿803',
  },
  {
    title: '設立',
    value: '2025年4月24日予定',
  },
  {
    title: '代表取締役',
    value: '福原 健太',
  },
  {
    title: '資本金',
    value: '100万円',
  },
];

const Company = () => {
  return (
    <div className="container-lg bg-white flex items-center">
      <div className="my-16 md:my-32">
        <h2 className="text-2xl md:text-5xl font-bold max-sm:text-center">
          COMPANY
        </h2>
        <div className="flex flex-col gap-6 mt-16 sm:mx-0 md:mx-10 ">
          {Data.map((item) => (
            <div
              key={item.title}
              className="flex items-center font-[500] text-sm md:text-base"
            >
              <div className="min-w-[140px] md:min-w-[300px] text-gray-600">
                {item.title}
              </div>
              <div className="">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
