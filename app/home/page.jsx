import NavigationBar from "@/home/Components/NavigationBar";
import SkinTypeCard from "@/home/Components/SkinTypeCard";
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
          <article className="w-4/5 sm:w-2/3 lg:w-1/2 py-8 space-y-8">
            <h1 className="text-3xl font-caveat tracking-wide">
              <span className="font-caveat text-4xl font-bold">RupaKoe </span>:{" "}
              {tagline}
            </h1>
            <p className="text-lg bg-slate-50/50">
              <span className="font-caveat text-4xl font-bold">RupaKoe </span>
              adalah aplikasi berbasis kecerdasan buatan (AI) yang mampu
              mendeteksi jenis kulit wajah dari citra gambar. Alat analisis
              jenis kulit gratis ini dikembangkan dengan pemahaman bahwa jika
              jenis kulit berbeda, maka rekomendasi produk perawatan kulit juga
              harus disesuaikan.
            </p>
            <div className="bg-white">
              <Button type="primary" size="large" className="!px-8 !py-6 !bg-cyan-600/50 hover:!bg-cyan-600/80" href="/predict">
                Coba Sekarang
              </Button>
            </div>
          </article>
        </section>
        <section className="flex min-h-[80vh] items-center justify-center bg-slate-100">
          <article className="w-3/4 py-8 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                <span className="font-caveat text-4xl font-bold">RupaKoe </span>
                Menganalisa 3 Jenis Kulit Wanita
              </h2>
            </div>
            <SkinTypeCard />
          </article>
        </section>
        <section className="flex min-h-[80vh] items-center justify-center bg-slate-100">
          <article className="w-3/4 py-8 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                Alasan Harus{" "}
                <span className="font-caveat text-4xl font-bold">RupaKoe </span>
              </h2>
            </div>
            <Highlights />
          </article>
        </section>
        <section className="flex min-h-[100vh] items-center justify-center bg-slate-100">
          <article className="w-3/4 py-8 space-y-12">
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
      <footer className="flex h-[5vh] items-center justify-center bg-cyan-600/50 text-gray-50">
        <span className="text-xs">
          &copy; 2025 RupaKoe. All rights reserved.
        </span>
      </footer>
    </>
  );
}
