import Link from "next/link";
import Accordion from "./accordion";

export default function AnimatedAccordion() {
  const faqs = [
    {
      title: "Can i learn photoshop in 3 months?",
      text: "Yes. It adheres to the WAI-ARIA design pattern.",
      active: false,
    },
    {
      title: "Can i learn Adobe xd in 3 months?",
      text: "Yes. It comes with default styles that matches the other components' aesthetic.",
      active: false,
    },
    {
      title: "Can i learn figma in 3 months?",
      text: "Yes. It adheres to the WAI-ARIA design pattern.Yes. It's animated by default, but you can disable it if you prefer.",
      active: false,
    },
  ];

  return (
    <main className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-2xl mx-auto py-24">
        <div className="flex justify-between items-center">
          <h1 className="text-slate-800 dark:text-slate-300 text-2xl md:text-3xl font-semibold sm:text-4xl mb-4">
            FAQs
          </h1>
          <Link
            href="/frequently-asked-questions"
            className="text-base font-bold text-slate-600 dark:text-slate-200 mb-4 ml-auto hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </Accordion>
          ))}
        </div>
      </div>
    </main>
  );
}
