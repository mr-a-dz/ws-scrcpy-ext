export interface ParamsBase {
    action: string;
    useProxy?: boolean;
    secure?: boolean;
    hostname?: string;
    port?: number;
    pathname?: string;
    screenType?: string; // "cluster" | "media" | "windshield"
    width?: number;
    height?: number;
}
