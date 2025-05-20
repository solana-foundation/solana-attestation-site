import { FC } from 'react'
import { GoogleAnalytics as GoogleAnalyticsBase } from '@next/third-parties/google'
import { fetchGoogleAnalytics } from '../model/google-analytics-query'

export const GoogleAnalytics: FC = async () => {
    const ga = await fetchGoogleAnalytics()
    return ga?.gaId ? <GoogleAnalyticsBase gaId={ga.gaId} /> : undefined
}
