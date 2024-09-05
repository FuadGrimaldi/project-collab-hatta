import DiscoverAllButton from "./button/DiscoverAllButton";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        <p className="text-gray-500 text-xs md:text-sm">{subtitle}</p>
      </div>
      <DiscoverAllButton />
    </div>
  );
}
