import Link from "next/link";

type ToolCardProps = {
    title: string;
    description: string;
    href: string;
}

const ToolCard = ({title, description, href}: ToolCardProps) => {
  return (
    <Link
      href={href}
      className="block p-2 md:p-6 rounded-xl bg-slate-800 hover:bg-slate-700 transition border border-slate-700"
    >
      <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-center text-sm md:text-base text-slate-400">
        {description}
      </p>
    </Link>
  );
}

export default ToolCard
