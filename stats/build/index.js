"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
//import { CsvFileReader } from './CsvFileReader'
const Summary_1 = require("./Summary");
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HtmlReport } from './reportTargets/HtmlReport';
// Create an object that implements the DataReader imterface 
// OLD const csvFileReader = new CsvFileReader('football.csv');
// Create an object of MatchReader and pass DataReader implementation
// OLD const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
//matchReader.load();
// matchReader.matches
//const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
// old const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary1.buildAndPrintReport(matchReader.matches);
