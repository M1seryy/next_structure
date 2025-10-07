'use client'

import { useGrowthBook } from './growthbook.provider'

export const useFeatureFlag = (key: string, defaultValue: any = false) => {
    const growthbook = useGrowthBook()

    if (!growthbook) {
        return defaultValue
    }

    return growthbook.getFeatureValue(key, defaultValue)
}

export const useExperiment = (key: string) => {
    const growthbook = useGrowthBook()

    if (!growthbook) {
        return { variationId: 0, inExperiment: false }
    }

    const result = growthbook.evalFeature(key)
    return {
        variationId: result.experiment?.variations?.indexOf(result.value) || 0,
        inExperiment: !!result.experiment,
        value: result.value
    }
}
