import { useRef, useCallback } from "react"


export const useDebounce = (callback: any, delay: number) => {
    const timer: any = useRef() 

    const debouncedCallback = useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback()
        }, delay)
    }, [callback, delay])

    return debouncedCallback
}