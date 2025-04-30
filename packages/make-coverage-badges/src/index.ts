import { error, log } from 'node:console';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { exit } from 'node:process';
import { styleText } from 'node:util';

import {
  COVERAGES_SECTION_END,
  COVERAGES_SECTION_START,
  DEFAULT_BREAK_LINE,
  DEFAULT_PROJECTS_DIRECTORY,
  JSON_COVERAGE_FILE,
  README_PATH
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

  const coveragesSectionStartIndex = readmeFile.indexOf(COVERAGES_SECTION_START);
  const coveragesSectionEndIndex = readmeFile.indexOf(COVERAGES_SECTION_END);

  const readmeStart = readmeFile.slice(
    0,
    coveragesSectionStartIndex + COVERAGES_SECTION_START.length
  );
  const readmeEnd = readmeFile.slice(coveragesSectionEndIndex);
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
