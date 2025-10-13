'use server'

import { GrowthBook } from '@growthbook/growthbook'

export const initGrowthBook = async () => {
    const gb = new GrowthBook({
        apiHost: process.env.GROWTHBOOK_API_HOST,
        clientKey: process.env.GROWTHBOOK_CLIENT_KEY,
        enableDevMode: true,
    })

    await gb.loadFeatures()
    return gb
}

export const getFeatureFlag = async (key: string) => {
    const gb = await initGrowthBook()
    return gb.isOn(key)
}
