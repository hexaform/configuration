import config from "config";
import { Configuration } from "./Configuration";

export class NodeConfigConfiguration extends Configuration {
    has(parameter: string): boolean {
        return config.has(parameter);
    }

    get<Type = any>(parameter: string, defaultValue: Type): Type;
    get<Type = any>(parameter: string, defaultValue?: Type): Type | undefined {
        return config.has(parameter) ? config.get(parameter) : defaultValue;
    }
}