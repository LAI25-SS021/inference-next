import { Card } from "antd";

export default function Highlights() {
  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-2 gap-8 justify-items-center">
        <Card className="max-w-80 rounded-xl shadow-md transition duration-300 hover:bg-blue-200">
          <div className="flex justify-center mb-4">
            <img alt="dry skin" src="/assets/images/pictures.png" />
          </div>
          <p className="text-center text-xl">
            RupaKoe bekerja dengan membandingkan selfie wajahmu dengan ribuan
            citra wajah yang dikumpulkan dari berbagai sumber online
          </p>
        </Card>
        <Card className="max-w-80 rounded-xl shadow-md">
          <div className="flex justify-center mb-4">
            <img alt="dry skin" src="/assets/images/accuracy.png" />
          </div>
          <p className="text-center text-xl">
            RupaKoe memiliki akurasi prediksi jenis kulit mencapai 80%,
            berdasarkan pengujian internal
          </p>
        </Card>
        <Card className="max-w-80 rounded-xl shadow-md">
          <div className="flex justify-center mb-4">
            <img alt="dry skin" src="/assets/images/woman.png" />
          </div>
          <p className="text-center text-xl">
            RupaKoe memberikan rekomendasi key ingredients yang sesuai dengan
            kebutuhan kulit wajahmu
          </p>
        </Card>

        <Card className="max-w-80 rounded-xl shadow-md">
          <div className="flex justify-center mb-4">
            <img alt="dry skin" src="/assets/images/privacy-policy.png" />
          </div>
          <p className="text-center text-xl">
            RupaKoe tidak menyimpan foto selfie yang diunggah. Seluruh foto akan
            dihapus secara permanen dari sistem segera setelah proses analisis
            selesai
          </p>
        </Card>
      </div>
    </div>
  );
}
