export abstract class Configuration {
    abstract has(param: string): boolean;
    abstract get<T>(parameter: string, defaultValue: T): T;
    abstract get<T>(parameter: string, defaultValue?: T): T | undefined
}