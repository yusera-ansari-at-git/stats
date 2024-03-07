import { ConsoleReport } from './ConsoleReport';
import { HtmlReport } from './HtmlReport';
import { WinsAnalysis } from './WinsAnalysis';
import { MatchData } from './inheritance/MatchReader';
import { Analyzer } from './interface/Analyzer';
import { OutputTarget } from './interface/OutputTarget';

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
  static winsAnalysisWithReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    let report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
