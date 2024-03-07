"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const ConsoleReport_1 = require("./ConsoleReport");
const HtmlReport_1 = require("./HtmlReport");
const WinsAnalysis_1 = require("./WinsAnalysis");
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    static winsAnalysisWithReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        let report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
