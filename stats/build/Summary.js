"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    constructor(analyzer, outputTarger) {
        this.analyzer = analyzer;
        this.outputTarger = outputTarger;
    }
    static winsAnalysisWithHtmlReport(teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarger.print(output);
    }
}
exports.Summary = Summary;
// Compositions
