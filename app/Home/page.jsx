import NavigationBar from "@/Home/Components/NavigationBar";
import SkinTypeCard from "@/Home/Components/SkinTypeCard";
import Highlights from "./Components/Highlights";
import UseInstructions from "./Components/UseInstructions";
import { Button } from "antd";

export default function Welcome() {
  const tagline = "Cek Tipe Kulit Wajah Gratis Online";

  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="z-0">
        <section className="flex min-h-screen items-center justify-center bg-slate-100 bg-hero">
          <article className="w-2/4 space-y-8">
            <h1 className="text-3xl tracking-wide">
              <span className="font-caveat text-4xl font-bold">RupaKoe</span>:{" "}
              {tagline}
            </h1>
            <p className="text-lg">
              <span className="font-caveat text-4xl font-bold">RupaKoe </span>
              adalah aplikasi berbasis kecerdasan buatan (AI) yang mampu
              mendeteksi jenis kulit wajah dari citra gambar. Alat analisis
              jenis kulit gratis ini dikembangkan dengan pemahaman bahwa jika
              jenis kulit berbeda, maka rekomendasi produk perawatan kulit juga
              harus disesuaikan.
            </p>
            <Button type="primary" href="/predict">
              Coba Sekarang
            </Button>
          </article>
        </section>
        <section className="flex h-[100vh] items-center justify-center bg-slate-100">
          <article className="w-3/4 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                <span className="font-caveat text-4xl font-bold">RupaKoe </span>
                Menganalisa 3 Jenis Kulit Wanita
              </h2>
            </div>
            <SkinTypeCard />
          </article>
        </section>
        <section className="flex h-[120vh] items-center justify-center bg-slate-100">
          <article className="w-3/4 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                Alasan Harus{" "}
                <span className="font-caveat text-4xl font-bold">RupaKoe </span>
              </h2>
            </div>
            <Highlights />
          </article>
        </section>
        <section className="flex h-[140vh] items-center justify-center bg-slate-100">
          <article className="w-3/4 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                Cara Menggunakan{" "}
                <span className="font-caveat text-4xl font-bold">RupaKoe </span>
              </h2>
            </div>
            <UseInstructions />
          </article>
        </section>
      </main>
      <footer className="flex h-[5vh] items-center justify-center bg-[#5fa8d3] text-gray-50">
        <span className="text-xs">
          &copy; 2025 RupaKoe. All rights reserved.
        </span>
      </footer>
    </>
  );
}
