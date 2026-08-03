type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
