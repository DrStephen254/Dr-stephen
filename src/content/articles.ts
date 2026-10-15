/**
 * Educational articles. Set `clinicallyReviewed: true` only after Dr. Kairu (or a
 * designated clinician) has reviewed the text. Unreviewed articles are shown
 * with a "Draft — pending clinical review" notice and set to noindex.
 */
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  clinicallyReviewed: boolean;
  reviewedOn?: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "when-is-heartburn-more-than-heartburn",
    title: "When is heartburn more than heartburn?",
    excerpt: "Occasional heartburn is common. Here's how to tell when it's time to get it checked.",
    category: "Reflux",
    readMinutes: 4,
    clinicallyReviewed: false,
    body: [
      { paragraphs: ["Most people experience heartburn now and then, often after a large meal. For many, simple changes help. But frequent symptoms, or certain warning signs, deserve a proper assessment."] },
      { heading: "Everyday measures that can help", paragraphs: ["Eating smaller meals, avoiding late-night eating, raising the head of the bed, and noticing personal triggers such as alcohol, fatty foods or smoking can reduce symptoms."] },
      { heading: "Signs to see a doctor", paragraphs: ["Difficulty swallowing, food sticking, vomiting, black stools, unexplained weight loss, or heartburn more than twice a week despite treatment should be reviewed by a doctor."] },
    ],
  },
  {
    slug: "preparing-for-your-colonoscopy",
    title: "Preparing for your colonoscopy: a practical guide",
    excerpt: "Good bowel preparation makes the examination clearer and safer. What to expect in the days before.",
    category: "Procedures",
    readMinutes: 5,
    clinicallyReviewed: false,
    body: [
      { paragraphs: ["A clear view of the bowel lining is essential for an accurate colonoscopy. Preparation is the part patients find hardest — planning ahead helps."] },
      { heading: "A few days before", paragraphs: ["You may be advised to follow a low-fibre diet and to pause iron tablets. Discuss blood thinners and diabetes medicines with the clinic — never stop them without advice."] },
      { heading: "The day before", paragraphs: ["You will switch to clear fluids and take the prescribed bowel preparation at specific times. Stay near a toilet and keep drinking clear fluids."] },
      { heading: "On the day", paragraphs: ["Bring your medicines list and arrange for someone to take you home if you are having sedation."] },
    ],
  },
  {
    slug: "fatty-liver-what-you-should-know",
    title: "Fatty liver: what you should know",
    excerpt: "Fatty liver is increasingly common and often silent. Understanding risk is the first step.",
    category: "Liver",
    readMinutes: 4,
    clinicallyReviewed: false,
    body: [
      { paragraphs: ["Fatty liver disease occurs when excess fat builds up in liver cells. It is often linked to weight, blood sugar, blood pressure and cholesterol."] },
      { heading: "Why it matters", paragraphs: ["In some people, fatty liver can progress to inflammation and scarring. Assessment helps identify who needs closer follow-up."] },
      { heading: "What helps", paragraphs: ["Gradual weight loss where appropriate, regular physical activity, limiting alcohol and managing diabetes and cholesterol are the foundations of care."] },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
