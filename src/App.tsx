import { FormEvent, useMemo, useState } from "react";

const heroImage =
  "https://images.pexels.com/photos/7800281/pexels-photo-7800281.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800";

const terraceImage =
  "https://images.pexels.com/photos/8412054/pexels-photo-8412054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800";

const menuSections = [
  {
    title: "From The Garden",
    items: [
      ["Herb salad", "Charred lemon, toasted seed vinaigrette", "$14"],
      ["Spring pea agnolotti", "Mint, ricotta, brown butter", "$24"],
      ["Roasted roots", "Whipped feta, garden honey, thyme", "$18"],
    ],
  },
  {
    title: "From The Fire",
    items: [
      ["Cedar salmon", "Fennel, dill pollen, citrus broth", "$32"],
      ["Half chicken", "Rosemary jus, crushed potatoes", "$29"],
      ["Mushroom steak", "Peppercorn glaze, smoked leek", "$26"],
    ],
  },
  {
    title: "To Finish",
    items: [
      ["Lavender panna cotta", "Stone fruit, almond crisp", "$12"],
      ["Dark chocolate torte", "Olive oil, sea salt", "$13"],
      ["Garden spritz", "Cucumber, basil, sparkling wine", "$15"],
    ],
  },
];

const times = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];

export default function App() {
  const [submittedName, setSubmittedName] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  function handleReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubmittedName(String(data.get("name") || "guest"));
    event.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#1c291d]">
      <header className="absolute left-0 right-0 top-0 z-20 motion-safe:animate-[fadeDown_700ms_ease-out_120ms_both]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm uppercase tracking-[0.28em] text-stone-100/90 lg:px-10">
          <a href="#home" className="font-semibold tracking-[0.34em]">
            The Gardens
          </a>
          <div className="hidden gap-8 md:flex">
            <a className="transition hover:text-white" href="#menu">
              Menu
            </a>
            <a className="transition hover:text-white" href="#terrace">
              Terrace
            </a>
            <a className="transition hover:text-white" href="#reserve">
              Reserve
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#172419] text-stone-50">
        <img
          src={heroImage}
          alt="Outdoor restaurant tables surrounded by lush greenery"
          className="absolute inset-0 -z-20 h-full w-full object-cover motion-safe:animate-[heroDrift_18s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10170f] via-[#10170f]/55 to-[#10170f]/20" />

        <div className="mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-28 lg:px-10 lg:pb-28">
          <div className="max-w-4xl motion-safe:animate-[fadeUp_900ms_ease-out_280ms_both]">
            <h1 className="font-serif text-7xl leading-[0.88] tracking-[-0.08em] sm:text-8xl lg:text-[10.5rem]">
              The Gardens
            </h1>
            <p className="mt-7 max-w-2xl text-2xl font-light leading-tight text-stone-100 sm:text-4xl">
              Seasonal dining under a living canopy.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-200/85 sm:text-lg">
              A botanical restaurant for candlelit dinners, bright lunches, and cocktails stirred with herbs from the courtyard.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#reserve"
                className="group inline-flex items-center justify-center bg-stone-50 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#183323] transition duration-300 hover:bg-[#dfe9c9]"
              >
                Reserve a table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center border border-stone-50/55 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-stone-50 transition duration-300 hover:border-stone-50 hover:bg-stone-50/10"
              >
                View menu
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-[#1c291d]/20 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <h2 className="max-w-xl font-serif text-5xl leading-none tracking-[-0.05em] text-[#17331d] sm:text-7xl">
            A table set by the season.
          </h2>
          <div className="max-w-2xl self-end text-lg leading-8 text-[#40513f] sm:text-xl sm:leading-9">
            <p>
              The Gardens cooks with what is flowering, ripening, and fragrant right now. Expect flame-kissed vegetables,
              pristine seafood, handmade pastas, and a drinks list built around citrus, herbs, and aperitifs.
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl motion-safe:animate-[softReveal_900ms_ease-out_both]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6f7b48]">Dinner menu</p>
            <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.05em] text-[#17331d] sm:text-7xl">
              Garden-led plates, finished over fire.
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="border-b border-[#1c291d]/25 pb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#17331d]">
                  {section.title}
                </h3>
                <div className="divide-y divide-[#1c291d]/15">
                  {section.items.map(([name, description, price]) => (
                    <div key={name} className="py-6">
                      <div className="flex items-baseline justify-between gap-5">
                        <p className="font-serif text-2xl tracking-[-0.03em] text-[#1c291d]">{name}</p>
                        <p className="text-sm font-semibold text-[#6b5b38]">{price}</p>
                      </div>
                      <p className="mt-2 leading-7 text-[#57624c]">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="terrace" className="bg-[#16291b] text-stone-50">
        <div className="grid min-h-[720px] lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
            <img
              src={terraceImage}
              alt="Warm outdoor dining room with wooden tables and hanging lights"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover motion-safe:animate-[slowPan_16s_ease-in-out_infinite_alternate]"
            />
          </div>
          <div className="flex items-center px-6 py-20 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#bfd09b]">The terrace</p>
              <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em] sm:text-7xl">
                Dinner between vines, lanterns, and open sky.
              </h2>
              <p className="mt-7 text-lg leading-8 text-stone-200/85">
                Our courtyard is planted as a dining room. Herbs edge the walkways, citrus trees shade the tables, and the
                evening menu moves easily from golden hour to late night.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reserve" className="px-6 py-20 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6f7b48]">Reservations</p>
            <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.05em] text-[#17331d] sm:text-7xl">
              Save your seat in the garden.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-[#40513f]">
              Join us Wednesday through Sunday for dinner. For private events, contact our team after sending a request.
            </p>
          </div>

          <form onSubmit={handleReservation} className="bg-[#183323] p-6 text-stone-50 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-semibold uppercase tracking-[0.22em] text-stone-200">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-stone-50/35 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-stone-50 outline-none transition placeholder:text-stone-300/55 focus:border-[#dfe9c9]"
                />
              </label>

              <label className="block text-sm font-semibold uppercase tracking-[0.22em] text-stone-200">
                Party
                <select
                  required
                  name="party"
                  defaultValue=""
                  className="mt-3 w-full border-b border-stone-50/35 bg-[#183323] px-0 py-3 text-base font-normal normal-case tracking-normal text-stone-50 outline-none transition focus:border-[#dfe9c9]"
                >
                  <option value="" disabled>
                    Select size
                  </option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5 guests</option>
                  <option>6 guests</option>
                </select>
              </label>

              <label className="block text-sm font-semibold uppercase tracking-[0.22em] text-stone-200">
                Date
                <input
                  required
                  name="date"
                  type="date"
                  min={today}
                  className="mt-3 w-full border-b border-stone-50/35 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-stone-50 outline-none transition focus:border-[#dfe9c9]"
                />
              </label>

              <label className="block text-sm font-semibold uppercase tracking-[0.22em] text-stone-200">
                Time
                <select
                  required
                  name="time"
                  defaultValue=""
                  className="mt-3 w-full border-b border-stone-50/35 bg-[#183323] px-0 py-3 text-base font-normal normal-case tracking-normal text-stone-50 outline-none transition focus:border-[#dfe9c9]"
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  {times.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="submit"
              className="mt-9 w-full bg-[#dfe9c9] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#183323] transition duration-300 hover:bg-stone-50"
            >
              Request reservation
            </button>

            {submittedName ? (
              <p className="mt-6 border-t border-stone-50/20 pt-5 leading-7 text-[#dfe9c9]" role="status">
                Thank you, {submittedName}. Your reservation request has been received. We will confirm shortly.
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <footer className="bg-[#10170f] px-6 py-10 text-stone-200 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-stone-50/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-4xl tracking-[-0.05em] text-stone-50">The Gardens</p>
            <p className="mt-3 max-w-md leading-7 text-stone-300/80">42 Laurel Lane, Your City. Open Wednesday to Sunday, 5pm to late.</p>
          </div>
          <a className="text-sm font-semibold uppercase tracking-[0.24em] text-[#dfe9c9] transition hover:text-stone-50" href="mailto:hello@thegardens.example">
            hello@thegardens.example
          </a>
        </div>
      </footer>
    </main>
  );
}