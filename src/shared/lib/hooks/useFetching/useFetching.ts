import { useState } from 'react';


export const useFetching = (callback: () => unknown): any[] => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    
    const fetching = async (): Promise<void> => {
        try {
            setIsLoading(true)
            await callback()
        } catch (e: unknown) {
            if (typeof e === "string") {
                setError(e)
            } else if (e instanceof Error) {
                setError(e.message)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}