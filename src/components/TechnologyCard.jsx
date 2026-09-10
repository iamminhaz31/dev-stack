const TechnologyCard = ({
  technology,
  handleAddToStack,
  isAdded,
}) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  const badgeStyles = {
    Popular: "border-sky-100 bg-sky-50 text-sky-500",
    Versatile: "border-emerald-100 bg-emerald-50 text-emerald-600",
    Fast: "border-orange-100 bg-orange-50 text-orange-500",
    Standard: "border-green-100 bg-green-50 text-green-600",
    "Top SQL": "border-blue-100 bg-blue-50 text-blue-600",
    Cache: "border-red-100 bg-red-50 text-red-500",
    Ubiquitous: "border-amber-100 bg-amber-50 text-amber-600",
    Essential: "border-sky-100 bg-sky-50 text-sky-600",
    Robust: "border-sky-100 bg-sky-50 text-sky-600",
    Modern: "border-cyan-100 bg-cyan-50 text-cyan-600",
    Containers: "border-sky-100 bg-sky-50 text-sky-600",
  };

  return (
    <div
      className={`flex h-full flex-col rounded-xl bg-white p-3.5 transition-all duration-200 sm:p-4 ${
        isAdded
          ? "border-2 border-purple-500 shadow-md ring-2 ring-purple-100"
          : "border border-slate-200 shadow-sm hover:shadow-md"
      }`}
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-50">
            <img
              src={icon}
              alt={name}
              className="h-6 w-6 object-contain"
            />
          </div>

          <h3 className="text-[13px] font-bold text-slate-950 sm:text-[15px]">
            {name}
          </h3>
        </div>

        {badge && (
          <span
            className={`shrink-0 rounded-full border px-2 py-1 text-[8px] font-medium ${
              badgeStyles[badge] ||
              "border-purple-100 bg-purple-50 text-purple-600"
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-3 flex-1 text-[9px] leading-[15px] text-slate-500 sm:text-[11px] sm:leading-[18px]">
        {description}
      </p>

      {/* Bottom Info */}
      <div className="mt-3 flex items-center border-t border-slate-100 pt-3 text-[8px] sm:text-[9px]">
        <span className="rounded-sm bg-slate-50 px-2 py-1 text-slate-500">
          {category}
        </span>

        <span className="flex-1 text-center text-slate-500">
          {difficulty}
        </span>

        <span className="flex items-center gap-1 whitespace-nowrap font-medium text-slate-700">
          <span className="text-amber-400">★</span>
          {rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => handleAddToStack(technology)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-md py-2 text-[9px] font-semibold transition sm:text-[10px] ${
          isAdded
            ? "bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;