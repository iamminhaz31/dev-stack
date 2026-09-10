const YourStack = ({
  selectedTechnologies,
  handleRemove,
  handleRemoveAll,
}) => {
  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-20">

      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900">
          Your Stack
        </h3>

        {selectedTechnologies.length > 0 && (
          <span className="rounded-full bg-purple-50 px-2 py-1 text-[9px] font-semibold text-purple-600">
            {selectedTechnologies.length}
          </span>
        )}
      </div>

      {selectedTechnologies.length === 0 ? (
        <>
          <p className="mt-1 text-[9px] text-slate-400">
            No technologies selected yet.
          </p>

          <div className="mt-3 flex min-h-[75px] items-center justify-center rounded-lg border border-dashed border-slate-200 px-3 text-center">
            <p className="text-[9px] text-slate-400">
              Your stack is empty.
            </p>
          </div>
        </>
      ) : (
        <>
          <p className="mt-1 text-[9px] text-slate-400">
            {selectedTechnologies.length}{" "}
            {selectedTechnologies.length === 1
              ? "Technology Selected"
              : "Technologies Selected"}
          </p>

          <div className="mt-3 space-y-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-2 rounded-lg border border-slate-200 p-2"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-6 w-6 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-[10px] font-semibold text-slate-800">
                    {technology.name}
                  </h4>

                  <p className="text-[8px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => handleRemove(technology.id)}
                  className="text-sm text-slate-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleRemoveAll}
            className="mt-3 w-full rounded-md border border-red-200 py-2 text-[9px] font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;