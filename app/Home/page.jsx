import NavigationBar from "@/Home/Components/NavigationBar";
import SkinTypeCard from "@/Home/Components/SkinTypeCard";
import { Button } from "antd";

export default function Welcome() {
  const tagline = "Cek Tipe Kulit Wajah Gratis Online";

  return (
    <>
      <NavigationBar />
      <main className="z-0">
        <section className="flex min-h-screen items-center justify-center bg-slate-100 bg-hero">
          <article className="w-2/4 space-y-8">
            <h1 className="text-4xl tracking-wide">RupaKoe: {tagline}</h1>
            <p className="text-lg">
              RupaKoe adalah aplikasi berbasis kecerdasan buatan (AI) yang mampu
              mendeteksi jenis kulit wajah dari citra gambar. Alat analisis
              jenis kulit gratis ini dikembangkan dengan pemahaman bahwa jika
              jenis kulit berbeda, maka rekomendasi produk perawatan kulit juga
              harus disesuaikan.
            </p>
            <Button type="primary">Coba Sekarang</Button>{" "}
          </article>
        </section>
        <section className="flex h-[120vh] items-center justify-center bg-slate-100">
          <article className="w-3/5 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                RupaKoe Menganalisa 3 Jenis Kulit Wanita
              </h2>
            </div>
            <SkinTypeCard />
          </article>
        </section>
        <section className="flex h-[100vh] items-center justify-center bg-slate-100">
          <article className="w-2/5 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                Teknologi AI yang Akurat & Inklusif
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="bg-white px-4 py-12">
                <p className="text-center text-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus hic doloribus ratione voluptatibus officiis sint
                  animi amet quisquam consequuntur!
                </p>
              </div>
              <div className="bg-white px-4 py-12">
                <p className="text-center text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  quo pariatur dignissimos accusamus tenetur sit illum quasi
                  impedit exercitationem quae?
                </p>
              </div>
              <div className="bg-white px-4 py-12">
                <p className="text-center text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente hic excepturi a vitae dolorum! Nam fugiat amet
                  recusandae maiores quasi.
                </p>
              </div>
              <div className="bg-white px-4 py-12">
                <p className="text-center text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  ipsum cupiditate, beatae deleniti quas architecto a minima
                  libero quod repellat!
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className="flex h-[100vh] items-center justify-center bg-slate-100">
          <article className="w-3/5 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                Bagaimana Teknologi Kami Bekerja?
              </h2>
            </div>
            <div className="space-y-8 px-4">
              <p className="text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus esse eos architecto ipsam mollitia, nesciunt, id
                cumque iusto, voluptates repellendus enim odit sed repudiandae
                consequuntur illo nulla omnis dolor distinctio? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Explicabo ea
                voluptatem rerum quibusdam, velit officia minima porro natus
                eligendi cum exercitationem animi. Quas reiciendis hic itaque
                ratione impedit laudantium iste!
              </p>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quo
                pariatur dignissimos accusamus tenetur sit illum quasi impedit
                exercitationem quae? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum culpa quod reiciendis ad saepe nisi ex
                repudiandae aliquid est facilis beatae omnis, necessitatibus
                eius modi, vero adipisci numquam. Possimus, esse. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Optio neque,
                molestias recusandae illum omnis repellat in modi quo officia
                quibusdam asperiores nulla temporibus inventore est sit ipsam?
                Modi, facere veritatis!
              </p>
            </div>
          </article>
        </section>
      </main>
      <footer className="flex h-[5vh] items-center justify-center bg-gray-900 text-gray-50">
        <span className="text-xs">
          &copy; 2025 RupaKoe. All rights reserved.
        </span>
      </footer>
    </>
  );
}
