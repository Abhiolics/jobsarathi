import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How quickly can I start earning?",
    a: "You can start earning within 15 minutes! Complete your first lesson and unlock EarnSarathi micro-tasks. Most users earn ₹200-500 in their first week through bank referrals and simple digital tasks.",
  },
  {
    q: "Is JobSarathi really free?",
    a: "Yes! All courses, job listings, and micro-tasks are 100% free. Employers pay us, not you.",
  },
  {
    q: "What kind of jobs can I get?",
    a: "We partner with 500+ companies hiring for customer service, data entry, sales, retail, logistics, and BPO roles. Salaries range from ₹10,000-25,000/month for entry-level positions. All jobs are verified and legitimate.",
  },
  {
    q: "Do I need good English to start?",
    a: "Not at all! All courses are available in Hindi and English. We start with basic English lessons designed for Hindi speakers. You'll improve your English while earning through micro-tasks.",
  },
  {
    q: "How do I receive my earnings?",
    a: "Earnings are paid weekly directly to your bank account or UPI. Minimum withdrawal is ₹100. You can track all your earnings in real-time through the app dashboard.",
  },
  {
    q: "Is this available in my city?",
    a: "JobSarathi is available across India! We're currently focused on Uttar Pradesh and Bihar, with expansion to all states by 2026. Download the app to check job availability in your area.",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
          <Badge
            variant="outline"
            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
          >
            FAQs
          </Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">
            Got questions? We’ve got answers ready
          </h2>
        </div>
        <div>
          <Accordion className="w-full flex flex-col gap-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500",
                )}
              >
                <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                  {faq.q}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
