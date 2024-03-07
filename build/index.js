"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// const reader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(reader);
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
Summary_1.Summary.winsAnalysisWithHtmlReport('Bournemouth').buildAndPrintReport(matchReader.matches);
Summary_1.Summary.winsAnalysisWithReport('Bournemouth').buildAndPrintReport(matchReader.matches);
// const summary = new Summary(
//   new WinsAnalysis('Bournemouth'),
//   // new ConsoleReport()
//   new HtmlReport()
// );
// summary.buildAndPrintReport(matchReader.matches);
// matches.forEach((match) => {
//   console.log('match:', match);
// });
// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//   if (match[1] == 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
// console.log(`Man United wons ${manUnitedWins} games`);
