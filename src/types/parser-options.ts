import {WriteStreams} from "./write-streams";

export interface ParserOptions {
    cwd: string;
    writeStreams: WriteStreams;
    pipelineIid: number;
    showInitMessage: boolean;
    fetchIncludes: boolean;
    extraHosts?: string[];
    home?: string;
    file?: string;
}
