import { Card } from "antd";

export default function UseInstructions() {
  return (
    <div className="flex justify-between">
      <Card className="max-w-80 rounded-xl shadow-md">
        <div className="flex justify-center">
          <img alt="face camera" src="/assets/images/face picture.png" />
        </div>
        <p className="text-xl font-bold"> Langkah 1</p>
        <p>
          Untuk hasil analisis yang maksimal hapus riasan, lepas kacamata atau
          aksesoris yang menempel pada kulit wajah. Ambil selfie di
          ruangan/tempat dengan cahaya yang baik/terang, gunakan ekspresi
          netral.
        </p>
      </Card>
      <div className="flex items-center">
        <img alt="arrow" src="/assets/images/right-arrow.png" />
      </div>
      <Card className="max-w-80 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <img alt="result" src="/assets/images/result.png" />
        </div>
        <p className="text-xl font-bold"> Langkah 2</p>
        <p>
          Setelah RupaKoe selesai melakukan analisis, kamu akan mendapatkan
          hasil prediksi tipe kulitmu bersama dengan rekomendasi key-ingredients
          yang bisa kamu jadikan pertimbangan ketika memilih produk perawatan
          kulit wajahmu.
        </p>
      </Card>
    </div>
  );
}
