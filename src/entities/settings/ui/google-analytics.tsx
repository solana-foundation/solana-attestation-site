import { FC } from 'react'
import { GoogleAnalytics as GoogleAnalyticsBase } from '@next/third-parties/google'
import { fetchGoogleAnalytics } from '../model/google-analytics-query'

export const GoogleAnalytics: FC = async () => {
    const { gaId } = await fetchGoogleAnalytics()
    return gaId ? <GoogleAnalyticsBase gaId={gaId} /> : undefined
}
