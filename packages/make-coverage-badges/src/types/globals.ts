import type { PROJECTS_LABELS } from '../constants/globals';

export type CoverageResults = Record<ProjectsResultsKeys, number>;

export type JSONCoverage = {
  [key: string]: JSONCoverageProps;
  total: JSONCoverageProps;
};

type JSONCoverageProps = {
  branches: JSONCoverageResults;
  branchesTrue: JSONCoverageResults;
  functions: JSONCoverageResults;
  lines: JSONCoverageResults;
  statements: JSONCoverageResults;
};

type JSONCoverageResults = {
  covered: number;
  pct: number;
  skipped: number;
  total: number;
};

export type ProjectsCoverageResults = Record<string, CoverageResults>;

export type ProjectsLabels = keyof typeof PROJECTS_LABELS;

export type ProjectsResultsKeys = Exclude<keyof JSONCoverageProps, 'branchesTrue'>;
