import { error, log } from 'node:console';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { exit } from 'node:process';
import { styleText } from 'node:util';

import {
  DEFAULT_BREAK_LINE,
  DEFAULT_PROJECTS_DIRECTORY,
  JSON_COVERAGE_FILE,
  NEXT_SECTION,
  README_PATH,
  TEST_COVERAGE_SECTION
} from './constants/globals';
import type { JSONCoverage, ProjectsCoverageResults } from './types/globals';
import { generateReadmeTable, getCoverageResults } from './utils/helpers';

(() => {
  log(styleText('gray', 'Check for existing coverage directory...'));
  const isCoverageDirectoryExisting = existsSync(DEFAULT_PROJECTS_DIRECTORY);

  if (!isCoverageDirectoryExisting) {
    error(styleText('bgRed', 'Error: coverage directory does not exist'));
    log(styleText('yellowBright', 'Run test:coverage script first'));
    exit(1);
  }

  log(styleText('gray', 'Retrieve every projects name in coverage directory...'));
  const projects = readdirSync(DEFAULT_PROJECTS_DIRECTORY);

  log(styleText('gray', 'Retrieve coverage results for every project...'));
  const projectsCoverageResults = projects.reduce<ProjectsCoverageResults>((acc, project) => {
    const coverageFile = readFileSync(
      `${DEFAULT_PROJECTS_DIRECTORY}/${project}/${JSON_COVERAGE_FILE}`,
      'utf-8'
    );

    const parsedJSON = JSON.parse(coverageFile) as JSONCoverage;
    const coverageResults = getCoverageResults(parsedJSON);

    acc[project] = coverageResults;
    return acc;
  }, {});

  log(styleText('gray', 'Generate new README.md file...'));
  const readmeFile = readFileSync(README_PATH, 'utf-8');

  const testCoverageSectionIndex = readmeFile.indexOf(TEST_COVERAGE_SECTION);
  const nextSectionIndex = readmeFile.indexOf(NEXT_SECTION);

  const readmeStart = readmeFile.slice(0, testCoverageSectionIndex + TEST_COVERAGE_SECTION.length);
  const readmeEnd = readmeFile.slice(nextSectionIndex);
  const readmeTables = Object.entries(projectsCoverageResults).map(([project, coverageResults]) =>
    generateReadmeTable(project, coverageResults)
  );

  const newReadmeFile =
    readmeStart +
    DEFAULT_BREAK_LINE +
    readmeTables.join(DEFAULT_BREAK_LINE) +
    DEFAULT_BREAK_LINE +
    readmeEnd;

  writeFileSync(README_PATH, newReadmeFile, 'utf-8');

  log(styleText('green', 'Success: badges created and implemented in README.md'));
  exit(0);
})();
