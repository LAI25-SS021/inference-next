import { Card } from "antd";

export default function UseInstructions() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-8">
      <Card className="max-w-80 rounded-xl shadow-md">
        <div className="flex flex-col justify-between">
          <div className="flex justify-center sm:mb-10 lg:mb-4">
            <img alt="face camera" src="/assets/images/face picture.png" />
          </div>
          <div>
            <p className="text-xl font-bold"> Langkah 1</p>
            <p>
              Untuk hasil analisis yang maksimal hapus riasan, lepas kacamata atau
              aksesoris yang menempel pada kulit wajah. Ambil selfie di
              ruangan/tempat dengan cahaya yang baik/terang, gunakan ekspresi
              netral.
            </p>
          </div>
        </div>
      </Card>
      <div className="hidden sm:flex items-center">
        <img alt="arrow" src="/assets/images/right-arrow.png" />
      </div>
      <Card className="max-w-80 rounded-xl shadow-md">
        <div className="flex flex-col justify-between">
          <div className="flex justify-center">
            <img alt="result" src="/assets/images/result.png" />
          </div>
          <div>
            <p className="text-xl font-bold"> Langkah 2</p>
            <p>
              Setelah RupaKoe selesai melakukan analisis, kamu akan mendapatkan
              hasil prediksi tipe kulitmu bersama dengan rekomendasi key-ingredients
              yang bisa kamu jadikan pertimbangan ketika memilih produk perawatan
              kulit wajahmu.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
