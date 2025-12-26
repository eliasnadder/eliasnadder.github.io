import React, { useMemo, useState } from "react";
import { Filter, ArrowUpDown, Search, X, Grid3X3, List } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { FadeInSection } from "./FadeInSection";
import { PROJECTS_DATA } from "../constants";
import { ProjectType } from "../types";

export const ProjectsSection: React.FC = () => {
  // Filter & Sort State
  const [activeType, setActiveType] = useState<string>("All");
  const [activeTech, setActiveTech] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">("default");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Compute unique tech stack items for the filter dropdown
  const allTech = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS_DATA.forEach((p) => p.techStack.forEach((t) => techs.add(t)));
    return ["All", ...Array.from(techs).sort()];
  }, []);

  // Derived filtered and sorted projects
  const visibleProjects = useMemo(() => {
    let filtered = [...PROJECTS_DATA];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.techStack.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    // Filter by Type
    if (activeType !== "All") {
      filtered = filtered.filter((p) => p.type === activeType);
    }

    // Filter by Tech
    if (activeTech !== "All") {
      filtered = filtered.filter((p) => p.techStack.includes(activeTech));
    }

    // Sort
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }
    // 'default' keeps original order

    return filtered;
  }, [activeType, activeTech, sortOrder, searchQuery]);

  const clearFilters = () => {
    setActiveType("All");
    setActiveTech("All");
    setSearchQuery("");
  };

  const hasActiveFilters = activeType !== "All" || activeTech !== "All" || searchQuery.trim() !== "";

  return (
    <section id="projects" className="mb-32 scroll-mt-24">
      <FadeInSection>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              A showcase of full-stack applications, from complete ecosystems to specialized solutions.
              Each project demonstrates expertise in modern development practices and cross-platform integration.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Enhanced Controls Bar */}
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects, technologies, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                {[
                  "All",
                  ProjectType.ECOSYSTEM,
                  ProjectType.STANDALONE_WEB,
                  ProjectType.STANDALONE_MOBILE,
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                      activeType === type
                        ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {type === "All"
                      ? "All Projects"
                      : type === ProjectType.ECOSYSTEM
                      ? "Ecosystems"
                      : type.replace("Standalone ", "")}
                  </button>
                ))}
              </div>

              {/* Tech Filter & Sort */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={activeTech}
                    onChange={(e) => setActiveTech(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 cursor-pointer min-w-[140px]"
                  >
                    {allTech.map((tech) => (
                      <option key={tech} value={tech}>
                        {tech}
                      </option>
                    ))}
                  </select>
                  <Filter size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>

                <button
                  onClick={() =>
                    setSortOrder((prev) =>
                      prev === "default" ? "asc" : prev === "asc" ? "desc" : "default"
                    )
                  }
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    sortOrder !== "default"
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  <ArrowUpDown size={16} />
                  <span className="hidden sm:inline">
                    {sortOrder === "default"
                      ? "Default"
                      : sortOrder === "asc"
                      ? "A-Z"
                      : "Z-A"}
                  </span>
                </button>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <span className="text-sm text-slate-500 dark:text-slate-400">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="hover:text-primary-900 dark:hover:text-primary-100">
                    <X size={12} />
                  </button>
                </span>
              )}
              {activeType !== "All" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md">
                  Type: {activeType === ProjectType.ECOSYSTEM ? "Ecosystems" : activeType.replace("Standalone ", "")}
                  <button onClick={() => setActiveType("All")} className="hover:text-slate-900 dark:hover:text-white">
                    <X size={12} />
                  </button>
                </span>
              )}
              {activeTech !== "All" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md">
                  Tech: {activeTech}
                  <button onClick={() => setActiveTech("All")} className="hover:text-slate-900 dark:hover:text-white">
                    <X size={12} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </FadeInSection>

      <FadeInSection delay={200}>
        {visibleProjects.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[minmax(400px,auto)] grid-flow-row-dense"
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}>
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className={`transform transition-all duration-300 hover:scale-[1.02] ${
                  viewMode === "list" ? "max-w-none" : ""
                }`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
              <Search className="text-slate-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-600/25"
            >
              <Filter size={18} />
              Clear all filters
            </button>
          </div>
        )}

        {/* Results Summary */}
        {visibleProjects.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing {visibleProjects.length} of {PROJECTS_DATA.length} projects
              {hasActiveFilters && " (filtered)"}
            </p>
          </div>
        )}
      </FadeInSection>
    </section>
  );
};