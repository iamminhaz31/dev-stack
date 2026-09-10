import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const removedItem = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (!selectedTechnologies.length) return;

    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  };

  if (loading) {
    return (
      <section className="py-16 text-center">
        <div className="mx-auto h-7 w-7 animate-spin rounded-full border-4 border-slate-200 border-t-purple-500"></div>

        <p className="mt-3 text-xs text-slate-500">
          Loading technologies...
        </p>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="bg-white py-6 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-4 text-center sm:mb-7 lg:text-left">
          <h2 className="text-xl font-extrabold text-slate-950 sm:text-3xl">
            Explore the{" "}
            <span className="text-brand-gradient">
              Technologies
            </span>
          </h2>

          <p className="mt-1.5 text-[9px] text-slate-500 sm:text-xs">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_250px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  handleAddToStack={handleAddToStack}
                  isAdded={isAdded}
                />
              );
            })}
          </div>

          {/* Sidebar */}
          <YourStack
            selectedTechnologies={selectedTechnologies}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;