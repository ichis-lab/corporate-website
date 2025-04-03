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
        <h2 className="text-5xl">OUR MISSION</h2>
        <div className="text-2xl mt-6">世界を変えるソフトウェアを作る</div>
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div className="container-lg bg-white">
      <h2>COMPANY</h2>
      <div>
        <h3>会社概要</h3>
        <table>
          <tbody>
            <tr>
              <td>会社名</td>
              <td>株式会社テクノロジーズ</td>
            </tr>
            <tr>
              <td>住所</td>
              <td>東京都千代田区永田町1-7-1</td>
            </tr>
            <tr>
              <td>設立</td>
              <td>2025年4月1日</td>
            </tr>
            <tr>
              <td>代表取締役</td>
              <td>山田太郎</td>
            </tr>
            <tr>
              <td>資本金</td>
              <td>1,000万円</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
