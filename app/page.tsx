import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck2,
  CarFront,
  ChevronRight,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Star
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const cars = [
  {
    name: "Toyota Alphard 2024",
    type: "Premium MPV",
    price: "Rp1.750.000 / hari",
    seats: "7 Kursi",
    transmission: "AT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/TOYOTA_ALPHARD_%28AH40%29_HONG_KONG_%283%29.jpg"
  },
  {
    name: "Honda HR-V RS",
    type: "SUV Modern",
    price: "Rp920.000 / hari",
    seats: "5 Kursi",
    transmission: "CVT",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Toyota Innova Zenix",
    type: "Family MPV",
    price: "Rp780.000 / hari",
    seats: "7 Kursi",
    transmission: "AT",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Hyundai Ioniq 5",
    type: "Electric Car",
    price: "Rp1.150.000 / hari",
    seats: "5 Kursi",
    transmission: "AT",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
  }
];

const benefits = [
  {
    title: "Armada Bersih & Terawat",
    description:
      "Setiap unit dicek sebelum dan sesudah pemakaian untuk menjaga performa, keamanan, dan kenyamanan.",
    icon: ShieldCheck
  },
  {
    title: "Booking Cepat 5 Menit",
    description:
      "Cukup pilih mobil, tentukan jadwal, dan konfirmasi via WhatsApp. Proses cepat tanpa alur rumit.",
    icon: Clock3
  },
  {
    title: "Layanan Antar Jemput",
    description:
      "Mobil bisa diantar ke bandara, hotel, rumah, atau kantor untuk area Jabodetabek dan sekitarnya.",
    icon: MapPin
  }
];

const steps = [
  "Pilih mobil yang sesuai kebutuhan perjalanan.",
  "Isi tanggal rental dan lokasi pengantaran.",
  "Tim kami konfirmasi ketersediaan dan total biaya.",
  "Mobil diantar tepat waktu, Anda siap berangkat."
];

const testimonials = [
  {
    name: "Nanda Pratama",
    role: "Founder Startup",
    quote: "Mobil datang lebih cepat dari jadwal dan kondisi interior sangat bersih. Repeat order pasti.",
    score: 5
  },
  {
    name: "Shania Putri",
    role: "Travel Consultant",
    quote: "Pelayanan admin responsif, pilihan mobil lengkap, dan harganya transparan tanpa biaya tersembunyi.",
    score: 5
  },
  {
    name: "Rizky Mahendra",
    role: "Event Organizer",
    quote: "Butuh 3 unit sekaligus untuk event klien, semuanya sesuai request dan tepat waktu.",
    score: 5
  }
];

export default function HomePage() {
  return (
    <main className="pb-12 md:pb-16">
      <header className="sticky top-4 z-50 mt-4">
        <div className="container">
          <div className="rounded-2xl border border-white/70 glass-panel px-4 py-3 shadow-sm fade-up">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="cursor-pointer text-2xl font-heading text-primary">
                DriveNow
              </Link>
              <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
                <Link href="#armada" className="transition-colors hover:text-primary">
                  Armada
                </Link>
                <Link href="#keunggulan" className="transition-colors hover:text-primary">
                  Keunggulan
                </Link>
                <Link href="#testimoni" className="transition-colors hover:text-primary">
                  Testimoni
                </Link>
                <Link href="#kontak" className="transition-colors hover:text-primary">
                  Kontak
                </Link>
              </nav>
              <Button className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="container mt-6 grid gap-8 py-10 md:mt-10 md:grid-cols-2 md:items-center md:gap-10 md:py-14">
        <div className="space-y-6 fade-up">
          <Badge className="bg-secondary text-secondary-foreground">Rental Mobil Profesional</Badge>
          <h1 className="hero-title max-w-xl text-4xl leading-tight text-primary font-heading sm:text-5xl lg:text-6xl">
            Sewa Mobil Premium untuk Bisnis & Liburan
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Armada terbaru, harga transparan, dan layanan antar jemput cepat untuk kebutuhan
            perjalanan harian, mingguan, hingga bulanan.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="cursor-pointer gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Cek Ketersediaan <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer gap-2">
              <Phone className="h-4 w-4" /> Hubungi Admin
            </Button>
          </div>
          <div className="grid max-w-md grid-cols-3 gap-3 pt-2">
            {[
              { label: "Unit Aktif", value: "120+" },
              { label: "Pelanggan", value: "2.500+" },
              { label: "Rating", value: "4.9/5" }
            ].map((item, index) => (
              <Card key={item.label} className="border-white/70 bg-white/85 fade-up" style={{ animationDelay: `${index * 90}ms` }}>
                <CardContent className="p-4">
                  <p className="text-2xl font-semibold text-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-xl fade-up md:justify-self-end">
          <div className="absolute -top-5 -left-5 h-36 w-36 rounded-full bg-secondary/30 blur-2xl" />
          <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-primary/20 blur-2xl" />
          <Card className="relative w-full overflow-hidden border-0 bg-white/65 p-2 shadow-xl">
            <div className="relative h-[420px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80"
                alt="Mobil premium untuk layanan rental"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute left-6 top-6 rounded-xl bg-white/90 px-4 py-3 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Paket Favorit</p>
              <p className="text-lg font-semibold text-primary">Driver + BBM + Tol</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="armada" className="container py-10 md:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="fade-up">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Pilihan Armada
            </Badge>
            <h2 className="section-title mt-3 text-4xl font-heading text-primary sm:text-5xl">
              Mobil Sesuai Kebutuhan Anda
            </h2>
          </div>
          <Button variant="ghost" className="cursor-pointer text-primary hover:bg-primary/10">
            Lihat Semua Unit <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car, index) => (
            <Card
              key={car.name}
              className="cursor-pointer overflow-hidden border-white/80 bg-white/85 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-44">
                <Image src={car.image} alt={car.name} fill className="object-cover" loading="lazy" />
              </div>
              <CardHeader className="space-y-2 p-4">
                <CardTitle className="text-lg text-primary">{car.name}</CardTitle>
                <CardDescription>{car.type}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-4 pt-0">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{car.seats}</span>
                  <span className="text-muted-foreground">{car.transmission}</span>
                </div>
                <p className="text-base font-semibold text-foreground">{car.price}</p>
                <Button className="w-full cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
                  Booking Unit
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="keunggulan" className="container py-10 md:py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((item, index) => (
            <Card
              key={item.title}
              className="border-white/80 bg-gradient-to-b from-white to-[#f9f3e5] fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-10 md:py-16">
        <div className="grid gap-8 rounded-3xl border border-white/80 bg-white/75 p-5 shadow-sm md:grid-cols-[1.2fr_1fr] md:gap-10 md:p-10">
          <div className="space-y-4 fade-up">
            <Badge className="bg-secondary text-secondary-foreground">Alur Sederhana</Badge>
            <h2 className="section-title text-4xl font-heading text-primary sm:text-5xl">
              Booking Mudah, Perjalanan Lancar
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 leading-7">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <Card className="border-0 bg-primary text-primary-foreground fade-up">
            <CardHeader>
              <CardTitle className="text-3xl font-heading">Promo Minggu Ini</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Diskon 15% untuk sewa minimal 3 hari.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-sm uppercase tracking-wide text-primary-foreground/75">Kode Promo</p>
                <p className="text-2xl font-semibold">DRIVE15</p>
              </div>
              <Button size="lg" className="w-full cursor-pointer bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Klaim Promo
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="testimoni" className="container py-10 md:py-16">
        <div className="mb-8 fade-up">
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            Ulasan Pelanggan
          </Badge>
          <h2 className="section-title mt-3 text-4xl font-heading text-primary sm:text-5xl">
            Dipercaya Ribuan Penyewa
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Card
              key={item.name}
              className="border-white/80 bg-white/80 fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <CardHeader className="space-y-3">
                <div className="flex text-secondary">
                  {Array.from({ length: item.score }).map((_, i) => (
                    <Star key={`${item.name}-${i}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <CardDescription className="text-base leading-7 text-muted-foreground">
                  &quot;{item.quote}&quot;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="kontak" className="container py-10 md:py-16">
        <div className="grid gap-5 rounded-3xl border border-white/85 bg-white/80 p-5 md:grid-cols-2 md:gap-6 md:p-10">
          <div className="space-y-4 fade-up">
            <Badge className="bg-primary text-primary-foreground">Kontak & Reservasi</Badge>
            <h2 className="section-title text-4xl font-heading text-primary sm:text-5xl">
              Butuh Mobil Hari Ini?
            </h2>
            <p className="max-w-md leading-7 text-muted-foreground">
              Isi formulir singkat, tim kami akan menghubungi Anda dalam hitungan menit untuk
              konfirmasi ketersediaan unit.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +62 812-3456-7890
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Jakarta, Bekasi, Tangerang, Depok
              </p>
              <p className="flex items-center gap-2">
                <CalendarCheck2 className="h-4 w-4 text-primary" /> Layanan 24/7
              </p>
            </div>
          </div>

          <Card className="border-white/70 bg-background fade-up">
            <CardContent className="space-y-4 p-6">
              <div className="space-y-2">
                <label htmlFor="nama" className="text-sm font-medium">
                  Nama Lengkap
                </label>
                <Input id="nama" placeholder="Masukkan nama Anda" />
              </div>
              <div className="space-y-2">
                <label htmlFor="nomor" className="text-sm font-medium">
                  Nomor WhatsApp
                </label>
                <Input id="nomor" placeholder="08xxxxxxxxxx" />
              </div>
              <div className="space-y-2">
                <label htmlFor="kebutuhan" className="text-sm font-medium">
                  Kebutuhan Rental
                </label>
                <Textarea id="kebutuhan" placeholder="Contoh: Innova 2 hari untuk city trip" />
              </div>
              <Button className="w-full cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
                Kirim Permintaan
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="container flex flex-col items-center justify-between gap-2 border-t border-white/70 pt-6 text-sm text-muted-foreground md:flex-row md:pt-8">
        <p>&copy; {new Date().getFullYear()} DriveNow Rent Car. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <CarFront className="h-4 w-4 text-primary" /> Cepat, Aman, Nyaman
        </p>
      </footer>
    </main>
  );
}
