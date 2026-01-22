import { Grid } from "./icons/Grid";
import { List } from "./icons/List";

export type BlogLayout = "grid" | "list";

interface BlogLayoutToggleProps {
  currentLayout: BlogLayout;
  onLayoutChange: (layout: BlogLayout) => void;
}

export function BlogLayoutToggle({
  currentLayout,
  onLayoutChange,
}: BlogLayoutToggleProps) {
  const baseBtn =
    "p-2.5 rounded-full transition-all duration-200 cursor-pointer";

  const activeBtn = "bg-black/50 text-white";

  return (
    <div className="flex items-center gap-1 p-1 rounded-full gradient-bgColor text-text-neutral">
      <button
        onClick={() => onLayoutChange("grid")}
        className={`${baseBtn} ${currentLayout === "grid" ? activeBtn : ""}`}
        aria-label="Grid view"
      >
        <Grid className="h-4 w-4" />
      </button>

      <button
        onClick={() => onLayoutChange("list")}
        className={`${baseBtn} ${currentLayout === "list" ? activeBtn : ""}`}
        aria-label="List view"
      >
        <List className="h-4 w-4" />
      </button>
    </div>
  );
}
