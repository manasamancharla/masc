import { useState } from "react";
import HeatMap, { type SVGProps } from "@uiw/react-heat-map";
import BentoBadge from "./BentoBadge";

import { formatNumber, getDateSuffix } from "../../../lib/utils";
import type { GithubContributions } from "../../../api";
import { Github } from "../../../components/icons/Github";

const getDateProps = () => {
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);

  return { startDate: sixMonthsAgo, endDate: today };
};

const renderRect =
  (handleMouseEnter: (date: string) => void): SVGProps["rectRender"] =>
  (props, data) => {
    const date = new Date(data.date);
    const formattedDate =
      date.toLocaleDateString("en-US", { day: "numeric", month: "long" }) +
      getDateSuffix(date.getDate());
    const tileInfo = `${data.count ? formatNumber(data.count) : "No"} contributions on ${formattedDate}`;

    return (
      <rect
        className="transition-all hover:brightness-125"
        onMouseEnter={() => handleMouseEnter(tileInfo)}
        {...props}
      />
    );
  };

const weeks = 28;
const rectSize = 20;
const space = 5;
const mapWidth = weeks * (rectSize + space) - space;
const mapHeight = 8 * (rectSize + space) - space;

const BentoGithubActivity = (props: GithubContributions) => {
  const defaultValue = `${formatNumber(props.totalContributions)} contributions in the last year`;
  const [hoveredTile, setHoveredTile] = useState<string | null>(defaultValue);

  return (
    <div className="relative flex h-full flex-col justify-between">
      <BentoBadge icon={Github} label="Github" />

      <div className="w-full overflow-x-auto">
        <HeatMap
          {...getDateProps()}
          onMouseLeave={() => setHoveredTile(defaultValue)}
          className=""
          style={{ width: mapWidth, color: "#fff", height: mapHeight }}
          value={props.contributions ?? []}
          weekLabels={false}
          monthLabels={false}
          legendCellSize={0}
          space={space}
          rectProps={{ rx: 4 }}
          rectSize={rectSize}
          rectRender={renderRect((date) => setHoveredTile(date))}
          panelColors={{
            1: "#19222F",
            4: "#0F4E43",
            8: "#1F977B",
            12: "#1EF4AE",
          }}
        />
      </div>
      <p className="body-bold text-text-neutral text-right">{hoveredTile}</p>
    </div>
  );
};

export default BentoGithubActivity;
