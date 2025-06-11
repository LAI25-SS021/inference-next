import { Card } from "antd";
export default function MemberCard() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center xl:flex-row xl:justify-center">
        <Card className="sm:w-96 h-72 sm:h-80 aspect-square rounded-full shadow-md">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/farkhan remove bg.png"
              className="w-40 h-40 sm:w-50 sm:h-50 rounded-full object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-center text-[15px] sm:text-xl xl:text-lg font-bold">
              Muhammad Farkhan Adhitama
            </p>
            <p className="text-center sm:text-lg">Ketua Kelompok, ML Engineer</p>
          </div>
        </Card>
        <Card className="sm:w-96 h-72 sm:h-80 aspect-square rounded-full shadow-md">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/arin remove bg.png"
              className="w-40 h-40 sm:w-50 sm:h-50 rounded-full object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-center text-[15px] sm:text-xl xl:text-lg font-bold">
              Arrini Khirofati Jannah
            </p>
            <p className="text-center sm:text-lg">ML Engineer</p>
          </div>
        </Card>
        <Card className="sm:w-96 h-72 sm:h-80 aspect-square rounded-full shadow-md">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/rifky remove bg.png"
              className="w-40 h-40 sm:w-50 sm:h-50 rounded-full object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-center text-[15px] sm:text-xl xl:text-lg font-bold">
              Rikfy Galuh Yuliawan
            </p>
            <p className="text-center text-sm sm:text-lg">Web Developer</p>
          </div>
        </Card>
      </div>
    </>
  );
}
