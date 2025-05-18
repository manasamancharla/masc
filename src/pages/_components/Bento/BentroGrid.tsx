import BentoTechStack from "./BentoTechStack";
import BentoCard from "./BentoCard";
import BentoBadge from "./BentoBadge";

import { X } from "../../../components/icons/X";
import { Leetcode } from "../../../components/icons/Leetcode";
import { Medium } from "../../../components/icons/Medium";
import { TechStack } from "../../../components/icons/TechStack";
import { About } from "../../../components/icons/About";
import { Repository } from "../../../components/icons/Repository";
import { Commit } from "../../../components/icons/Commit";
import { Branch } from "../../../components/icons/Branch";
import { ArrowRight } from "../../../components/icons/ArrowRight";

import BentoGithubActivity from "./BentoGithubActivity";

import { useEffect, useState } from "react";

import {
  getGithubContributions,
  GithubContributions,
  getLatestPublicCommit,
  LatestPublicCommit,
} from "../../../api";

const GITHUB_PUBLIC_TOKEN = import.meta.env.VITE_GITHUB_PUBLIC_TOKEN;
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

const BentoGrid = () => {
  const [contributionData, setContributionData] =
    useState<GithubContributions | null>(null);
  const [repoData, setRepoData] = useState<LatestPublicCommit | null>(null);

  useEffect(() => {
    getGithubContributions(GITHUB_USERNAME, GITHUB_PUBLIC_TOKEN)
      .then(setContributionData)
      .catch();

    getLatestPublicCommit(GITHUB_USERNAME, GITHUB_PUBLIC_TOKEN)
      .then(setRepoData)
      .catch();
  }, []);

  return (
    <>
      <section
        className="w-full h-[792px] max-w-[1040px]
    max-md:flex max-md:flex-col max-md:gap-4
    md:grid md:grid-cols-[repeat(36,_minmax(0,_1fr))] md:auto-rows-[minmax(0,1fr)] md:gap-4"
      >
        <BentoCard gridStyles="md:col-start-1 md:col-end-20 md:row-start-1 md:row-end-2 max-md:w-full ">
          <BentoBadge icon={TechStack} label="Tech Stack" />

          <BentoTechStack />

          <p className="body-bold text-text-neutral">
            Passionate about the JavaScript ecosystem but always curious and
            eager to discover new technologies.
          </p>
        </BentoCard>

        <BentoCard
          padding={false}
          noBackground={true}
          gridStyles="md:col-start-20 md:col-end-36 md:row-start-1 md:row-end-2 
                      max-md:w-full"
          className="gap-4"
        >
          <BentoCard className="w-full flex-1/3">
            <BentoBadge icon={About} label="About" />

            <p className="body-bold text-text-neutral">
              As a <span className="text-text">Software engineer</span>, I
              thrive on building scalable and efficient applications that
              enhance user experiences. I enjoy solving complex problems and
              optimizing performance.
            </p>
          </BentoCard>
          <div className="w-full grid grid-cols-3 gap-5 flex-1">
            <BentoCard className="h-full w-full items-center justify-center">
              <X />
            </BentoCard>
            <BentoCard className="h-full w-full items-center justify-center">
              <Leetcode />
            </BentoCard>
            <BentoCard className="h-full w-full items-center justify-center">
              <Medium />
            </BentoCard>
          </div>
        </BentoCard>

        <BentoCard
          gridStyles="md:col-start-1 md:col-end-12 md:row-start-2 md:row-end-3 
                      max-md:w-full"
        >
          <BentoBadge icon={Repository} label="Last pushed" />

          <p className="heading-5-bold text-text p-2">{repoData?.repoName}</p>
          <div className="flex flex-col gap-4 text-text p-2 w-full">
            <div className="flex gap-2 items-center">
              <Branch className="w-3 h-3 min-w-[12px] min-h-[12px] text-text-neutral" />
              <p className="body-bold text-text-neutral">{repoData?.branch}</p>
            </div>

            <div className="flex gap-2 items-center">
              <Commit className="w-3 h-3 min-w-[12px] min-h-[12px] text-text-neutral" />
              <p className="body-bold text-text-neutral">
                {repoData?.commitMessage}
              </p>
            </div>

            <div className="flex justify-between items-start w-full">
              <p className="body-bold text-text-neutral">
                {repoData?.commitSha}
              </p>

              <p className="body-bold text-text-neutral">
                {repoData?.timeSincePush}
              </p>
            </div>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <button className="border border-solid body-bold rounded-lg border-text-neutral flex items-center gap-2 py-2 px-4 ">
              View
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </BentoCard>

        <div
          className="gradient-border rounded-2xl gradient-bgColor 
                      md:col-start-12 md:col-end-36 md:row-start-2 md:row-end-3 
                      max-md:w-full px-4 py-6"
        >
          {contributionData && (
            <BentoGithubActivity
              totalContributions={contributionData.totalContributions}
              contributions={contributionData.contributions}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default BentoGrid;
