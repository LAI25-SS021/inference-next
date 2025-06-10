import { Card } from "antd";
export default function MemberCard() {
  return (
    <>
      <div className="flex justify-between space-x-6">
        <Card className="w-80 h-100 aspect-square rounded-full shadow-md">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/farkhan remove bg.png"
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-center text-xl font-bold">
              Muhammad Farkhan Adhitama
            </p>
            <p className="text-center text-lg">Ketua Kelompok, ML Engineer</p>
          </div>
        </Card>
        <Card className="w-80 h-100 aspect-square rounded-full shadow-md">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/arin remove bg.png"
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-center text-xl font-bold">
              Arrini Khirofati Jannah
            </p>
            <p className="text-center text-lg">ML Engineer</p>
          </div>
        </Card>
        <Card className="w-80 h-100 aspect-square rounded-full shadow-md">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/rifky remove bg.png"
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-center text-xl font-bold">
              Rikfy Galuh Yuliawan
            </p>
            <p className="text-center text-lg">Web Developer</p>
          </div>
        </Card>
      </div>
    </>
  );
}
