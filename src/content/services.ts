/** Services & conditions. Each entry becomes a page at /services/<slug>. */
export type Service = {
  slug: string;
  name: string;
  kind: "Procedure" | "Condition" | "Screening";
  summary: string;
  metaDescription: string;
  sections: { heading: string; body: string[] }[];
};

export const services: Service[] = [
  {
    slug: "ibs",
    name: "Irritable Bowel Syndrome (IBS)",
    kind: "Condition",
    summary: "A structured approach to recurring abdominal pain, bloating and changes in bowel habit.",
    metaDescription: "IBS assessment in Nairobi: understanding symptoms, ruling out other causes and building a management plan.",
    sections: [
      { heading: "What is IBS?", body: ["IBS is a common disorder of gut–brain interaction causing abdominal pain with altered bowel habit — diarrhoea, constipation or both — often with bloating."] },
      { heading: "Assessment", body: ["Diagnosis involves a careful history, examination and selected tests to exclude other conditions, particularly when warning features are present."] },
      { heading: "Warning features", body: ["Rectal bleeding, weight loss, night-time symptoms, anaemia, a family history of bowel cancer or IBD, or new symptoms later in life should be assessed promptly."] },
      { heading: "Management", body: ["Approaches may include dietary guidance, medication and attention to stress and sleep. Plans are individual."] },
    ],
  },
  {
    slug: "colonoscopy",
    name: "Colonoscopy",
    kind: "Procedure",
    summary: "A camera examination of the large bowel to investigate symptoms and screen for polyps and bowel cancer.",
    metaDescription: "Colonoscopy in Nairobi with a consultant gastroenterologist: what it involves, why it's done and how to prepare.",
    sections: [
      { heading: "What is a colonoscopy?", body: ["A colonoscopy uses a thin, flexible tube with a camera to look at the lining of the colon (large bowel) and rectum. Small tissue samples (biopsies) can be taken and many polyps can be removed during the same procedure."] },
      { heading: "Why might it be recommended?", body: ["Common reasons include blood in the stool, a persistent change in bowel habit, unexplained anaemia or weight loss, inflammatory bowel disease follow-up, and colorectal cancer screening.", "Your doctor will discuss whether a colonoscopy is appropriate for you."] },
      { heading: "Preparation", body: ["The bowel must be emptied beforehand using a prescribed preparation and a modified diet. Clear, written instructions are given at booking. Please tell the clinic about all medicines you take, especially blood thinners, diabetes medicines and iron tablets."] },
      { heading: "On the day", body: ["Sedation is usually offered for comfort. You will need someone to accompany you home and should not drive for the rest of the day."] },
    ],
  },
  {
    slug: "endoscopy",
    name: "Upper GI Endoscopy",
    kind: "Procedure",
    summary: "A camera examination of the oesophagus, stomach and duodenum to investigate upper digestive symptoms.",
    metaDescription: "Upper GI endoscopy (gastroscopy) in Nairobi: reasons, preparation and what to expect.",
    sections: [
      { heading: "What is an upper GI endoscopy?", body: ["Also called a gastroscopy or OGD, this procedure uses a thin flexible camera passed through the mouth to examine the food pipe, stomach and first part of the small intestine."] },
      { heading: "Why might it be recommended?", body: ["Persistent heartburn or indigestion, difficulty swallowing, upper abdominal pain, vomiting blood, unexplained anaemia, or to take biopsies such as for H. pylori."] },
      { heading: "Preparation", body: ["You will usually be asked not to eat for about six hours beforehand. Specific fasting and medication instructions are provided at booking."] },
    ],
  },
  {
    slug: "acid-reflux-gerd",
    name: "Acid Reflux & GERD",
    kind: "Condition",
    summary: "Assessment and management of heartburn, regurgitation and gastro-oesophageal reflux disease.",
    metaDescription: "Acid reflux and GERD care in Nairobi: symptoms, warning signs, lifestyle measures and when to see a gastroenterologist.",
    sections: [
      { heading: "Understanding reflux", body: ["Reflux happens when stomach contents flow back into the oesophagus. Occasional heartburn is common; frequent or troublesome symptoms may indicate GERD."] },
      { heading: "Common symptoms", body: ["Burning chest discomfort, sour taste, regurgitation, chronic cough or hoarseness, and symptoms worse after meals or lying down."] },
      { heading: "When to seek review", body: ["Seek medical advice promptly for difficulty or pain on swallowing, vomiting, black stools, unintended weight loss, or symptoms that persist despite treatment."] },
      { heading: "Management", body: ["Care may involve lifestyle adjustments, medication, and in selected cases an endoscopy. Treatment is tailored after a consultation."] },
    ],
  },
  {
    slug: "h-pylori",
    name: "H. pylori Infection",
    kind: "Condition",
    summary: "Testing, treatment and confirmation of eradication for Helicobacter pylori.",
    metaDescription: "H. pylori testing and treatment in Nairobi: how it's diagnosed, treated and confirmed cleared.",
    sections: [
      { heading: "About H. pylori", body: ["Helicobacter pylori is a bacterium that can live in the stomach lining. It can cause gastritis and peptic ulcers and is linked to stomach cancer risk."] },
      { heading: "Testing", body: ["Tests include stool antigen tests, breath tests, or biopsies taken at endoscopy. Some medicines can affect results, so preparation advice matters."] },
      { heading: "Treatment", body: ["Treatment usually combines antibiotics with acid-reducing medicine. Completing the full course and confirming eradication afterwards are important."] },
    ],
  },
  {
    slug: "liver-health",
    name: "Liver Health",
    kind: "Condition",
    summary: "Evaluation of abnormal liver tests, fatty liver disease, viral hepatitis and chronic liver conditions.",
    metaDescription: "Liver health care in Nairobi: abnormal liver tests, fatty liver, hepatitis B and C, and long-term liver care.",
    sections: [
      { heading: "Why liver health matters", body: ["Many liver conditions cause few symptoms until advanced. Early assessment of abnormal blood tests or risk factors allows timely care."] },
      { heading: "Conditions assessed", body: ["Fatty liver disease (MASLD), viral hepatitis B and C, alcohol-related liver disease, autoimmune and inherited liver conditions, and cirrhosis follow-up."] },
      { heading: "Assessment", body: ["Evaluation may include blood tests, imaging and non-invasive assessment of liver stiffness, with a management plan based on findings."] },
    ],
  },
  {
    slug: "colorectal-cancer-screening",
    name: "Colorectal Cancer Screening",
    kind: "Screening",
    summary: "Guidance on when and how to screen for bowel cancer, including for people with a family history.",
    metaDescription: "Colorectal cancer screening in Nairobi: who should be screened, available tests and how colonoscopy helps.",
    sections: [
      { heading: "Why screen?", body: ["Screening aims to find bowel cancer early, or to find and remove polyps before they become cancerous."] },
      { heading: "Who should consider screening?", body: ["Adults from middle age onward, and earlier for people with a family history of bowel cancer, certain polyps, or inflammatory bowel disease. The right starting age depends on individual risk — discuss this at consultation."] },
      { heading: "Screening options", body: ["Options include stool-based tests and colonoscopy. A positive stool test should be followed by colonoscopy."] },
      { heading: "Don't wait for screening if you have symptoms", body: ["Bleeding, a persistent change in bowel habit, anaemia or weight loss need prompt assessment, not routine screening."] },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
