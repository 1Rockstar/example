import { createFileRoute } from "@tanstack/react-router";
import heroBiryani from "@/assets/hero-biryani.jpg";
import dishKizhi from "@/assets/dish-kizhi.jpg";
import dishChicken65 from "@/assets/dish-chicken65.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Usha's Kitchen Vintage — Authentic Kerala Cuisine in Thrissur" },
      {
        name: "description",
        content:
          "Home of the legendary Kizhi Parotta, Chicken 65 and Malabar Biriyani. A vintage thattukada in Ollukkara, Thrissur. Open daily until 11:30 PM.",
      },
      { property: "og:title", content: "Usha's Kitchen Vintage — Authentic Kerala Cuisine" },
      {
        property: "og:description",
        content:
          "Legendary Kerala flavors served on banana leaves in Ollukkara, Thrissur. Dine-in · Drive-through · Delivery.",
      },
      { property: "og:type", content: "restaurant" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Usha's Kitchen Vintage",
          servesCuisine: ["South Indian", "Kerala", "Biriyani"],
          priceRange: "₹1–200",
          telephone: "+91-98951-75452",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sreyas Nagar, Ollukkara",
            addressLocality: "Thrissur",
            addressRegion: "Kerala",
            postalCode: "680655",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "3.8",
            reviewCount: "912",
          },
          openingHours: "Mo-Su 06:00-23:30",
        }),
      },
    ],
  }),
  component: Index,
});

const dishes = [
  {
    name: "Beef Kizhi Parotta",
    price: "₹180",
    desc: "Layers of flaky parotta soaked in spicy beef gravy, steamed inside a fresh banana leaf.",
    img: dishKizhi,
  },
  {
    name: "Signature Chicken 65",
    price: "₹140",
    desc: "The legendary recipe foodies swear by. Crispy, fiery, tempered with curry leaves.",
    img: dishChicken65,
  },
  {
    name: "Gravy Style Biriyani",
    price: "₹160",
    desc: "Three pieces of chicken, a boiled egg, and a secret masala gravy over fragrant rice.",
    img: dishBiryani,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream text-earth selection:bg-clay/20">
      {/* Nav */}
      <nav className="flex justify-between items-center px-6 py-8 md:px-12">
        <a href="#" className="text-2xl font-display tracking-tight">
          Usha's Kitchen <span className="text-clay italic">Vintage</span>
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest">
          <a href="#menu" className="hover:text-clay transition-colors">Menu</a>
          <a href="#story" className="hover:text-clay transition-colors">Our Story</a>
          <a href="#visit" className="hover:text-clay transition-colors">Location</a>
          <a
            href="https://www.swiggy.com/city/thrissur/ushas-kitchen-vintage-palghat-road-mannuthy-rest89736"
            target="_blank"
            rel="noreferrer"
            className="bg-earth text-cream px-6 py-2 rounded-full hover:bg-clay transition-colors"
          >
            Order Now
          </a>
        </div>
        <a
          href="https://www.swiggy.com/city/thrissur/ushas-kitchen-vintage-palghat-road-mannuthy-rest89736"
          target="_blank"
          rel="noreferrer"
          className="md:hidden bg-earth text-cream px-4 py-2 rounded-full text-xs uppercase tracking-widest"
        >
          Order Now
        </a>
      </nav>

      {/* Hero */}
      <header className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center pb-24">
        <div className="md:col-span-5 animate-[fade-in_0.8s_ease-out_both]">
          <span className="text-clay font-medium uppercase tracking-widest text-xs">
            Est. Thrissur · Ollukkara
          </span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mt-4 mb-8 text-balance">
            The Soul of <br />
            <span className="italic">Kerala</span> Cuisine
          </h1>
          <p className="text-lg text-earth/70 max-w-md mb-10">
            Authentic South Indian flavors served in a quaint vintage setting. Home to the
            legendary Kizhi Parotta and Malabar Biriyani.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-display">3.8 ★</span>
              <span className="text-[10px] uppercase tracking-wider opacity-60">912 Reviews</span>
            </div>
            <div className="w-px h-10 bg-earth/20" />
            <div className="flex flex-col">
              <span className="text-2xl font-display text-clay">₹1–200</span>
              <span className="text-[10px] uppercase tracking-wider opacity-60">Per Person</span>
            </div>
            <div className="w-px h-10 bg-earth/20" />
            <div className="flex flex-col">
              <span className="text-2xl font-display">11:30<span className="text-clay">pm</span></span>
              <span className="text-[10px] uppercase tracking-wider opacity-60">Closes Today</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 relative animate-[rise_1s_cubic-bezier(0.22,1,0.36,1)_both]">
          <img
            src={heroBiryani}
            alt="Steaming Malabar chicken biryani in a copper pot on a banana leaf"
            width={1280}
            height={896}
            className="w-full aspect-[4/5] md:aspect-[3/2] object-cover rounded-2xl shadow-2xl shadow-earth/20"
          />
          <div className="absolute -bottom-6 -left-6 bg-mustard text-earth p-8 rounded-2xl hidden lg:block max-w-[240px] shadow-xl">
            <p className="font-display text-xl leading-tight">
              "Chicken 65 blows you away."
            </p>
            <p className="text-[10px] uppercase mt-4 tracking-widest font-semibold">
              — Local Foodie Guide
            </p>
          </div>
        </div>
      </header>

      {/* Signature Dishes */}
      <section id="menu" className="bg-earth text-cream py-24">
        <div className="px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-balance">
                Signature Specialties
              </h2>
              <p className="text-cream/60 mt-4 max-w-md">
                Slow-cooked traditions passed down through generations in the heart of Ollukkara.
              </p>
            </div>
            <a
              href="https://www.swiggy.com/city/thrissur/ushas-kitchen-vintage-palghat-road-mannuthy-rest89736"
              target="_blank"
              rel="noreferrer"
              className="text-mustard border-b border-mustard/30 pb-1 uppercase text-xs tracking-widest font-semibold hover:border-mustard transition-colors"
            >
              Order Online →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {dishes.map((d) => (
              <article key={d.name} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-6 bg-white/5">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={896}
                    height={896}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl font-display">{d.name}</h3>
                  <span className="text-mustard font-medium">{d.price}</span>
                </div>
                <p className="text-sm text-cream/60">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <span className="text-clay font-medium uppercase tracking-widest text-xs">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-8 text-balance">
            A small, quaint place with a <span className="italic text-clay">legendary heart</span>.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-earth/70 text-lg leading-relaxed max-w-2xl">
          <p>
            Tucked away in Sreyas Nagar, Ollukkara, Usha's Kitchen has been serving locals,
            travellers and the families of Thrissur for decades. Every morning the spices are
            ground fresh, every parotta beaten to flaky perfection.
          </p>
          <p>
            No pretense, no fine-dining garnishes — just the honest heat of Kerala on a banana
            leaf. Come hungry. Leave smiling.
          </p>
          <blockquote className="border-l-2 border-clay pl-6 font-display italic text-2xl text-earth pt-2">
            "Small and quaint place with great food. Chicken 65 blows you away."
            <footer className="text-[10px] uppercase tracking-widest font-semibold not-italic text-earth/50 mt-3 font-sans">
              — Google Local Guide
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Footer / Visit */}
      <footer id="visit" className="px-6 md:px-12 py-20 bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-earth/10 pt-16">
          <div className="md:col-span-2">
            <h4 className="font-display text-4xl mb-6">
              Visit Us in <br />
              <span className="text-clay">Ollukkara</span>
            </h4>
            <p className="text-earth/60 mb-8">
              Sreyas Nagar, Ollukkara,
              <br />
              Thrissur, Kerala 680655
            </p>
            <div className="flex flex-wrap gap-3">
              {["Dine-in", "Drive-through", "No-contact Delivery"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-earth/20 rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-earth/40 mb-6">
              Hours
            </h5>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Daily</span>
                <span className="font-medium">6:00 AM — 11:30 PM</span>
              </li>
              <li className="flex justify-between text-clay">
                <span>Status</span>
                <span className="font-semibold uppercase text-xs">Open Now</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-earth/40 mb-6">
              Connect
            </h5>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="tel:+919895175452" className="hover:text-clay transition-colors">
                  +91 98951 75452
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-medium text-earth/40">
          <p>© {new Date().getFullYear()} Usha's Kitchen Vintage</p>
          <p>Made for the true foodies of Kerala</p>
        </div>
      </footer>
    </div>
  );
}
