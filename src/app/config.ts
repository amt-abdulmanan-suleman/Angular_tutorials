import { InjectionToken } from "@angular/core"

export interface AppConfig{
    apiUrl: string,
    postCacheSize: number
}

export const APP_CONFIG:AppConfig = {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    postCacheSize: 10
}

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('CONFIG_TOKEN', {
    providedIn: 'root',
    factory: () => APP_CONFIG
})