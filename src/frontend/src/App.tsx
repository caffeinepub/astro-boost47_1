import { ChevronRight, MessageCircle, Shield, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";

const services = [
  {
    id: 1,
    icon: <SiFacebook className="text-blue-400" size={24} />,
    label: "1K Facebook Hidden Followers",
    price: "70 TK",
    popular: false,
  },
  {
    id: 2,
    icon: <SiInstagram className="text-pink-400" size={24} />,
    label: "1K Instagram Followers",
    price: "155 TK",
    popular: true,
  },
  {
    id: 3,
    icon: <SiFacebook className="text-blue-400" size={24} />,
    label: "1K Facebook Likes",
    price: "50 TK",
    popular: false,
  },
  {
    id: 4,
    icon: <SiInstagram className="text-pink-400" size={24} />,
    label: "1K Instagram Likes",
    price: "45 TK",
    popular: false,
  },
  {
    id: 5,
    icon: <SiInstagram className="text-pink-400" size={24} />,
    label: "1K Instagram Views",
    price: "25 TK",
    popular: false,
  },
  {
    id: 6,
    icon: <SiTiktok className="text-foreground" size={24} />,
    label: "1K TikTok Followers",
    price: "195 TK",
    popular: false,
  },
  {
    id: 7,
    icon: <SiTiktok className="text-foreground" size={24} />,
    label: "1K TikTok Likes",
    price: "60 TK",
    popular: false,
  },
  {
    id: 8,
    icon: <SiFacebook className="text-blue-400" size={24} />,
    label: "1K Facebook Views",
    price: "29 TK",
    popular: false,
  },
  {
    id: 9,
    icon: <SiTiktok className="text-foreground" size={24} />,
    label: "1K TikTok Views",
    price: "15 TK",
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="bg-[oklch(12_0.02_250)] border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Zap size={18} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-primary glow-green tracking-wider">
                Astro Boost47
              </h1>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">
                Premium Social Media Growth Service 🚀
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-1">
            <a
              href="#home"
              data-ocid="nav.home.link"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              Home
            </a>
            <a
              href="#services"
              data-ocid="nav.services.link"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              Services
            </a>
            <a
              href="https://wa.me/8801737271494"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.order.link"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              Order
            </a>
            <a
              href="#contact"
              data-ocid="nav.contact.link"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="star-field relative overflow-hidden py-24 px-6 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(14_0.025_250)] to-background pointer-events-none" />
          <motion.div
            className="relative max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider">
              <Star size={12} />
              TRUSTED BY THOUSANDS
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-foreground leading-tight mb-4 tracking-tight">
              Boost Your Social
              <br />
              <span className="text-primary glow-green">Media Fast 🚀</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-xl mx-auto">
              High Quality Facebook, Instagram &amp; TikTok Followers
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/8801737271494"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                <SiWhatsapp size={20} />
                Order on WhatsApp
                <ChevronRight size={18} />
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <div className="flex -space-x-2">
                  {["F", "I", "T"].map((l) => (
                    <div
                      key={l}
                      className="w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold text-primary"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <span>Facebook · Instagram · TikTok</span>
              </div>
            </div>
          </motion.div>

          {/* floating platform icons */}
          <motion.div
            className="absolute left-8 top-1/3 hidden lg:block opacity-20"
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <SiFacebook size={48} className="text-blue-400" />
          </motion.div>
          <motion.div
            className="absolute right-10 top-1/4 hidden lg:block opacity-20"
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <SiInstagram size={40} className="text-pink-400" />
          </motion.div>
          <motion.div
            className="absolute right-24 bottom-12 hidden lg:block opacity-20"
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <SiTiktok size={32} className="text-foreground" />
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Pricing
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mt-2">
                Our Services
              </h2>
              <p className="text-muted-foreground mt-3">
                Affordable packages to grow your online presence instantly.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  data-ocid={`services.item.${i + 1}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`card-glow relative bg-card border rounded-2xl p-6 transition-all duration-300 cursor-default ${
                    service.popular
                      ? "border-primary/60 bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        ⭐ POPULAR
                      </span>
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold text-sm leading-snug">
                        {service.label}
                      </p>
                      <div className="mt-3 flex items-baseline gap-1">
                        <span className="text-primary font-display font-black text-2xl">
                          {service.price}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          / 1K
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/8801737271494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold py-2.5 rounded-lg transition-colors border border-primary/20 hover:border-primary/40"
                  >
                    <SiWhatsapp size={14} />
                    Order via WhatsApp
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Notice */}
        <section className="py-14 px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-card border border-border rounded-2xl p-8 flex gap-5 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                <Shield size={20} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  Important Notice ⚠
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Astro Boost47 page is not responsible for any problems with
                  the ID after getting followers.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-md mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Get in Touch
              </span>
              <h2 className="font-display text-3xl font-black text-foreground mt-2 mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to grow? Message us on WhatsApp for instant support and
                quick order processing.
              </p>
              <a
                href="https://wa.me/8801737271494"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
                className="btn-glow inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                <SiWhatsapp size={24} />
                WhatsApp: 01737271494
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[oklch(12_0.02_250)] border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-primary" />
            <span className="font-display font-semibold text-primary">
              Astro Boost47
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={14} />
            <span>WhatsApp: 01737271494</span>
          </div>
          <div className="text-center">
            <span>
              © {new Date().getFullYear()} Astro Boost47. Built with ❤️ using{" "}
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
