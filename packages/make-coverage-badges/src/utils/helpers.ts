import { PROJECTS_LABELS } from '../constants/globals';
import type {
  CoverageResults,
  JSONCoverage,
  ProjectsLabels,
  ProjectsResultsKeys
} from '../types/globals';

export const generateBadge = (key: ProjectsResultsKeys, value: number) =>
  `https://img.shields.io/badge/${key}-${encodeURI(`${value}%`)}-${getBadgeColor(value)}`;

export const getBadgeColor = (value: number) => {
  if (value < 80) return 'red';
  if (value < 90) return 'yellow';
  return 'brightgreen';
};

export const generateReadmeTable = (projectKey: string, coverageResults: CoverageResults) => {
  const projectLabel = PROJECTS_LABELS[projectKey as ProjectsLabels] || projectKey;

  const branchesBadge = generateBadge('branches', coverageResults['branches']);
  const functionsBadge = generateBadge('functions', coverageResults['functions']);
  const linesBadge = generateBadge('lines', coverageResults['lines']);
  const statementsBadge = generateBadge('statements', coverageResults['statements']);

  return `**${projectLabel}**
| Statements                        | Branches                      | Functions                       | Lines                   |
| ----------------------------------| ----------------------------- | --------------------------------| ------------------------|
| ![Statements](${statementsBadge}) | ![Branches](${branchesBadge}) | ![Functions](${functionsBadge}) | ![Lines](${linesBadge}) |`;
};

export const getCoverageResults = (parsedJSON: JSONCoverage): CoverageResults =>
  Object.fromEntries(
    Object.entries(parsedJSON.total)
      .map(([key, { pct }]) => [key, pct])
      .filter(([key, _]) => key !== 'branchesTrue')
  );
