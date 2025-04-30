import { generateBadge, generateReadmeTable, getBadgeColor, getCoverageResults } from './helpers';

describe('Helpers', () => {
  describe('generateBadge', () => {
    it('should generate badge', () => {
      expect(generateBadge('branches', 100)).toStrictEqual(
        `https://img.shields.io/badge/branches-100%25-brightgreen`
      );
    });
  });

  describe('getBadgeColor', () => {
    it('should return red color', () => {
      expect(getBadgeColor(0)).toStrictEqual('red');
      expect(getBadgeColor(79)).toStrictEqual('red');
    });

    it('should return yellow color', () => {
      expect(getBadgeColor(80)).toStrictEqual('yellow');
      expect(getBadgeColor(89)).toStrictEqual('yellow');
    });

    it('should return brightgreen color', () => {
      expect(getBadgeColor(90)).toStrictEqual('brightgreen');
      expect(getBadgeColor(100)).toStrictEqual('brightgreen');
    });
  });

  describe('generateReadmeTable', () => {
    it('should generate README.md table', () => {
      expect(
        generateReadmeTable('transactional', {
          branches: 100,
          functions: 50,
          lines: 80,
          statements: 90
        })
      ).toStrictEqual(`**@website/transactional**
| Statements                        | Branches                      | Functions                       | Lines                   |
| ----------------------------------| ----------------------------- | --------------------------------| ------------------------|
| ![Statements](https://img.shields.io/badge/statements-90%25-brightgreen) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen) | ![Functions](https://img.shields.io/badge/functions-50%25-red) | ![Lines](https://img.shields.io/badge/lines-80%25-yellow) |`);
    });
  });

  describe('getCoverageResults', () => {
    it('should return coverage results', () => {
      expect(
        getCoverageResults({
          total: {
            branches: { covered: 100, pct: 90, skipped: 100, total: 100 },
            branchesTrue: { covered: 100, pct: 100, skipped: 100, total: 100 },
            functions: { covered: 100, pct: 80, skipped: 100, total: 100 },
            lines: { covered: 100, pct: 100, skipped: 100, total: 100 },
            statements: { covered: 100, pct: 100, skipped: 100, total: 100 }
          }
        })
      ).toStrictEqual({ branches: 90, functions: 80, lines: 100, statements: 100 });
    });
  });
});
