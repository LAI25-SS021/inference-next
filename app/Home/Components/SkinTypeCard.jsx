import { Card } from "antd";

export default function SkinTypeCard() {
  return (
    <div className="flex justify-between space-x-6">
      <Card className="max-w-80 space-y-3 rounded-xl shadow-md">
        <p className="pb-4 text-center text-xl font-bold">Kering</p>
        <img
          alt="dry skin"
          src="/assets/images/dry_skin.jpg"
          className="h-[200px] w-full rounded-md"
        />
        <p className="pt-4 text-lg">
          Kulit terasa kasar, mudah mengelupas, kurang kelembapan, dan sering
          terasa kaku setelah mencuci wajah.
        </p>
      </Card>
      <Card className="max-w-80 rounded-xl shadow-md">
        <p className="pb-4 text-center text-xl font-bold">Normal</p>
        <img
          alt="normal skin"
          src="/assets/images/normal_skin.jpg"
          className="h-[200px] w-full rounded-md"
        />
        <p className="pt-4 text-lg">
          Kulit terlihat tidak terlalu berminyak atau kering, pori-pori kecil,
          jarang berjerawat, dan tampak halus alami.
        </p>
      </Card>
      <Card className="max-w-80 rounded-xl shadow-md">
        <p className="pb-4 text-center text-xl font-bold">Berminyak</p>
        <img
          alt="oily skin"
          src="/assets/images/oily skin 2.png"
          className="h-[200px] w-full rounded-md"
        />
        <p className="pt-4 text-lg">
          Terlihat mengkilap, produksi sebum berlebih, pori-pori besar, rentan
          jerawat, dan terasa lengket saat disentuh.
        </p>
      </Card>
    </div>
  );
}
