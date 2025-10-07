import * as Sentry from '@sentry/nextjs'

// Utility functions for Sentry
export const sentryUtils = {
    captureError: (error: Error, context?: Record<string, any>) => {
        Sentry.captureException(error, {
            tags: context,
        })
    },

    captureMessage: (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
        Sentry.captureMessage(message, level)
    },



    setContext: (key: string, context: Record<string, any>) => {
        Sentry.setContext(key, context)
    },

    addBreadcrumb: (message: string, category?: string, level?: 'info' | 'warning' | 'error') => {
        Sentry.addBreadcrumb({
            message,
            category,
            level,
        })
    },
}