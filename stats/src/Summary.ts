import { MatchData } from './MatchData'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { HtmlReport } from './reportTargets/HtmlReport'

export interface Analyzer {
    run(matches : MatchData[]): string;
}

export interface OutputTarger {
    print(report: string): void;
}

export class Summary {

    static winsAnalysisWithHtmlReport(teamName: string): Summary { //static method
        return new Summary(new WinsAnalysis(teamName), new HtmlReport());
    }

    constructor(public analyzer: Analyzer, public outputTarger: OutputTarger) {}

    buildAndPrintReport(matches: MatchData[]):void {
        const output = this.analyzer.run(matches);
        this.outputTarger.print(output);
    }
}
// Compositions