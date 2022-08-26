export default function Strategy<T extends Record<string, any>>(strategy: T) {
    return (key: keyof T | string) => {
        if ((key as any) in strategy) {
            return strategy[key as keyof T]
        }
    }
}
