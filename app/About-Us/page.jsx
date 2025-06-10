import NavigationBar from "@/Home/Components/NavigationBar";
import MemberCard from "@/About-Us/Components/MemberCard";

export default function AboutUs() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="z-0">
        <section className="flex h-[100vh] items-center justify-center bg-slate-100 bg-hero">
          <article className="w-2/4 space-y-8">
            <h1 className="text-4xl tracking-wide font-caveat">
              Hai, Kami Rupawan!
            </h1>
            <p className="text-lg">
              <span className="font-caveat font-bold text-4xl">Rupawan </span>
              adalah kelompok dari program Laskar AI yang terdiri dari 3 orang
              yang sigma abiz. Dengan mengangkat tema "Solusi Cerdas untuk Masa
              Depan yang Lebih Baik", Rupawan menyadari banyak orang, terutama
              wanita, rela mengeluarkan ratusan ribu rupiah untuk membeli produk
              kecantikan, namun belum memahami jenis kulit wajah mereka. Hal ini
              dapat menyebabkan pemborosan, pembelian impulsif, dan
              ketidakcocokan produk skincare yang berujung pada masalah kulit.
              Sehingga, Rupawan memandang ini sebagai peluang untuk
              mengembangkan solusi yang ekonomis namun tetap akurat dan bisa
              dapat dipercaya melalui teknologi AI.
            </p>
          </article>
        </section>
        <section className="flex h-[100vh] items-center justify-center bg-slate-100">
          <article className="w-3/4 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">Anggota</h2>
            </div>
            <MemberCard />
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
