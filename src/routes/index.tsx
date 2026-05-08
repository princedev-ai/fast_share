import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap, ShieldCheck, WifiOff, Infinity as InfinityIcon, Smartphone, Sparkles,
  Download, ArrowRight, CheckCircle2, FolderOpen, Send, Star,
  Laptop, Monitor, MonitorSmartphone, ArrowLeftRight, MousePointer2,
  FolderTree, Inbox,
} from "lucide-react";
import heroImg from "@/assets/hero-transfer.jpg";
import phoneImg from "@/assets/phone-mockup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fast Share — Transfer GB Files in Seconds Across Devices" },
      { name: "description", content: "Fast Share for Android and Windows. Lightning-fast file sharing across devices using WiFi Direct. No internet, no limits, completely free." },
      { property: "og:title", content: "Fast Share — Transfer GB Files in Seconds" },
      { property: "og:description", content: "Cross-platform file sharing for Android and Windows. Lightning fast, no internet, no ads." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Zap, title: "Lightning Speed", desc: "Transfer gigabyte-sized files in seconds with WiFi Direct technology." },
  { icon: WifiOff, title: "No Internet Required", desc: "Operates entirely offline — share files anywhere, anytime." },
  { icon: InfinityIcon, title: "No Size Limits", desc: "Send anything from 1 KB to 100 GB without restrictions." },
  { icon: ShieldCheck, title: "End-to-End Encrypted", desc: "Your files are encrypted in transit and never touch a server." },
  { icon: MonitorSmartphone, title: "Cross-Platform", desc: "Works seamlessly between Android and Windows devices." },
  { icon: Sparkles, title: "Free, No Ads", desc: "Completely free with no subscriptions, popups, or hidden fees." },
  { icon: Monitor, title: "Native Desktop App", desc: "A dedicated Windows client built for performance and reliability." },
  { icon: MousePointer2, title: "Drag & Drop", desc: "Quickly queue files on desktop with intuitive drag-and-drop." },
  { icon: FolderTree, title: "Folder Sharing", desc: "Send entire folders at once with directory structure preserved." },
  { icon: Inbox, title: "Mobile to Desktop", desc: "Send files directly from your phone to your computer in seconds." },
];

const steps = [
  { icon: Download, title: "Install", desc: "Get Fast Share on all your devices — mobile and desktop." },
  { icon: FolderOpen, title: "Select Files", desc: "Pick photos, videos, documents, or entire folders." },
  { icon: Send, title: "Connect & Send", desc: "Pair via QR code or connection code and transfer instantly." },
];

const stats = [
  { value: "480 MB/s", label: "Peak Speed" },
  { value: "∞", label: "File Size" },
  { value: "10M+", label: "Downloads" },
  { value: "4.8★", label: "User Rating" },
];

const compatibility = [
  { a: Smartphone, b: Smartphone, label: "Android ↔ Android" },
  { a: Smartphone, b: Monitor, label: "Android ↔ Windows" },
  { a: Smartphone, b: Laptop, label: "Phone ↔ Laptop" },
  { a: Monitor, b: Monitor, label: "Windows ↔ Windows" },
  { a: Monitor, b: Laptop, label: "Desktop ↔ Laptop" },
  { a: Laptop, b: Smartphone, label: "Laptop ↔ Phone" },
];

const faqs = [
  { q: "Which platforms does Fast Share support?", a: "Fast Share is available for Android 10+ and Windows 10 or later." },
  { q: "Can I send files from my phone to my computer?", a: "Yes. Fast Share works seamlessly between mobile and desktop devices on the same WiFi network." },
  { q: "Can the desktop app both send and receive files?", a: "Yes. The Windows app can send and receive files to and from any device running Fast Share." },
  { q: "Do I need an internet connection?", a: "No. Fast Share uses WiFi Direct and operates entirely without an internet connection." },
];

// Decorative QR placeholder
function QrPlaceholder() {
  return (
    <div className="w-36 h-36 rounded-xl bg-white p-3 shadow-card">
      <svg viewBox="0 0 21 21" className="w-full h-full" shapeRendering="crispEdges">
        {Array.from({ length: 21 * 21 }).map((_, i) => {
          const x = i % 21, y = Math.floor(i / 21);
          // deterministic pseudo-random pattern + finder squares
          const inFinder =
            (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
          const fill = inFinder
            ? ((x === 0 || x === 6 || y === 0 || y === 6) ||
               (x >= 2 && x <= 4 && y >= 2 && y <= 4) ||
               (x >= 14 && x <= 20 && (x === 14 || x === 20 || y === 0 || y === 6)) ||
               (x >= 16 && x <= 18 && y >= 2 && y <= 4) ||
               (y >= 14 && y <= 20 && (y === 14 || y === 20 || x === 0 || x === 6)) ||
               (x >= 2 && x <= 4 && y >= 16 && y <= 18))
            : ((x * 7 + y * 13 + x * y) % 3 === 0);
          return fill ? <rect key={i} x={x} y={y} width="1" height="1" fill="#0a0a0a" /> : null;
        })}
      </svg>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            Fast Share
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#platforms" className="hover:text-foreground transition">Platforms</a>
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#how" className="hover:text-foreground transition">How it Works</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
            <a href="#download" className="hover:text-foreground transition">Download</a>
          </nav>
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
            <a href="#download"><Download className="w-4 h-4" />Download</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-accent mb-6">
              <Sparkles className="w-3 h-3" /> 10 Million+ Happy Users
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Transfer GB Files in <span className="text-gradient">Seconds</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Lightning-fast file sharing across devices using WiFi Direct. No internet required.
              Available on Android and Windows — completely free.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-14 px-8 text-base">
                <a href="#download"><Download className="w-5 h-5" /> Download Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-border bg-transparent">
                <a href="#how">See How It Works <ArrowRight className="w-4 h-4" /></a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Fast Share cross-device file transfer illustration"
              width={1280}
              height={1280}
              className="relative rounded-3xl shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">Platforms</p>
            <h2 className="text-4xl md:text-5xl font-bold">One app, every device</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mobile */}
            <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-brand-android flex items-center justify-center mb-5">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Fast Share for Android</h3>
              <p className="text-muted-foreground mb-6">Send and receive files on your mobile device.</p>
              <ul className="space-y-2 mb-8 text-sm">
                {["Share photos, videos, and documents", "Send files to phones and computers", "Quick QR code connection"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-android" />{t}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button size="lg" className="bg-brand-android hover:opacity-90 h-12 w-full">
                  <Download className="w-4 h-4" /> Download for Android
                </Button>
                <p className="text-xs text-muted-foreground mt-3">Android 10+ or higher · 73.6 mb</p>
              </div>
            </div>

            {/* Desktop */}
            <div className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                <Monitor className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Fast Share for Windows</h3>
              <p className="text-muted-foreground mb-6">A native desktop client for sending and receiving files on your PC.</p>
              <ul className="space-y-2 mb-8 text-sm">
                {["Transfer files between computers", "Receive files from mobile devices", "Drag-and-drop interface"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" />{t}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button size="lg" className="bg-brand-windows hover:opacity-90 h-12 w-full">
                  <Download className="w-4 h-4" /> Download for Windows
                </Button>
                <p className="text-xs text-muted-foreground mt-3">Windows 10 or later · 25 MB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">Why Fast Share</p>
            <h2 className="text-4xl md:text-5xl font-bold">Everything you need. Nothing you don't.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-primary transition-all">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-[0.04]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">3 Simple Steps</p>
            <h2 className="text-4xl md:text-5xl font-bold">Sharing made effortless</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="p-8 rounded-2xl bg-card border border-border h-full shadow-card">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <s.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-5xl font-extrabold text-muted/40">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
                {i < 2 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 w-6 h-6 text-primary/40 z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Device pair examples */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { a: Smartphone, b: Smartphone, label: "Phone → Phone" },
              { a: Smartphone, b: Laptop, label: "Phone → Computer" },
              { a: Monitor, b: Laptop, label: "Computer → Computer" },
            ].map(({ a: A, b: B, label }) => (
              <div key={label} className="flex items-center gap-3 px-5 py-3 rounded-full glass text-sm">
                <A className="w-5 h-5 text-primary" />
                <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
                <B className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Platform Compatibility */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">Compatibility</p>
            <h2 className="text-4xl md:text-5xl font-bold">Works Across All Your Devices</h2>
            <p className="mt-4 text-muted-foreground">
              Seamlessly share files between any combination of mobile and desktop devices.
              No more emailing files to yourself or using USB cables.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {compatibility.map(({ a: A, b: B, label }) => (
              <div key={label} className="p-6 rounded-2xl bg-gradient-card border border-border shadow-card flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <A className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <B className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">Download</p>
            <h2 className="text-4xl md:text-5xl font-bold">Ready in 10 seconds</h2>
            <p className="mt-4 text-muted-foreground">Free forever. No signup. No ads.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Android download */}
            <div className="rounded-3xl bg-gradient-card border border-border p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-2">Download for Android</h3>
              <p className="text-muted-foreground text-sm mb-6">Scan the QR code with your phone or tap below.</p>
              <div className="flex items-center gap-6 mb-6">
                <QrPlaceholder />
                <div className="text-sm space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-android" />Version 4.2.1</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-android" />73.6 mb download</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-android" />Android 10+</div>
                </div>
              </div>
              <Button size="lg" className="bg-brand-android hover:opacity-90 h-14 w-full text-base animate-pulse-glow">
                <Download className="w-5 h-5" /> Download for Android
              </Button>
            </div>

            {/* Desktop download */}
            <div className="rounded-3xl bg-gradient-card border border-border p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-2">Download for Windows</h3>
              <p className="text-muted-foreground text-sm mb-6">A native desktop client for Windows PCs and laptops.</p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-card flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold flex items-center gap-2"><Monitor className="w-4 h-4 text-brand-windows" /> Windows Installer</div>
                    <div className="text-xs text-muted-foreground mt-1">v4.2.1 · 25 MB · Windows 10 or later</div>
                  </div>
                  <Button className="bg-brand-windows hover:opacity-90 h-11 px-5">
                    <Download className="w-4 h-4" /> Download
                  </Button>
                </div>

                <div className="p-4 rounded-xl border border-border bg-card flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold flex items-center gap-2"><Monitor className="w-4 h-4 text-brand-windows" /> Portable (.zip)</div>
                    <div className="text-xs text-muted-foreground mt-1">v4.2.1 · 22 MB · No installation required</div>
                  </div>
                  <Button variant="outline" className="h-11 px-5">
                    <Download className="w-4 h-4" /> Download
                  </Button>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <img src={phoneImg} alt="Fast Share desktop preview" width={768} height={1024} loading="lazy" className="w-32 animate-float opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-gradient-card px-6 shadow-card"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">Loved by Users</p>
            <h2 className="text-4xl md:text-5xl font-bold">Trusted by millions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Priya Sharma", r: "Graduate Student", q: "I transferred a 2 GB research project in under 15 seconds. It has completely replaced cloud uploads for me." },
              { n: "Rahul Kapoor", r: "Product Designer", q: "No more compressed photos or broken email attachments. Fast Share keeps everything in original quality." },
              { n: "Anjali Mehta", r: "Educator", q: "It is intuitive enough that my students learned it in under a minute. A genuinely well-designed tool." },
            ].map((t) => (
              <div key={t.n} className="p-7 rounded-2xl bg-gradient-card border border-border shadow-card">
                <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <p className="text-foreground mb-5">"{t.q}"</p>
                <div className="text-sm">
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-muted-foreground">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Fast Share</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
