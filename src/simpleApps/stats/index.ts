import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reporters/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalyses";
import { HTMLReport } from "./reporters/HTMLReport";

// const csvFileReader = new CsvFileReader(
//   "./src/udemy/stats/fixtures/football.csv"
// );
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv(
  "./src/udemy/stats/fixtures/football.csv"
);

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new ConsoleReport()
// );

// const summary = new Summary(new WinsAnalysis("Man United"), new HTMLReport());
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
