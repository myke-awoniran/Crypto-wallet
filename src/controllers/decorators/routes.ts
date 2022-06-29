import "reflect-metadata"

// decorator for all GET requests

export function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('path',path,target,key)
    }
}
