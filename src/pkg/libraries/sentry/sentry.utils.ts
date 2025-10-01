import * as Sentry from '@sentry/nextjs'

// Utility functions for Sentry
export const sentryUtils = {
    // Capture error
    captureError: (error: Error, context?: Record<string, any>) => {
        Sentry.captureException(error, {
            tags: context,
        })
    },

    // Capture message
    captureMessage: (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
        Sentry.captureMessage(message, level)
    },

    // Set user context
    setUser: (user: { id: string; email?: string; username?: string }) => {
        Sentry.setUser(user)
    },

    // Set additional context
    setContext: (key: string, context: Record<string, any>) => {
        Sentry.setContext(key, context)
    },

    // Add breadcrumb
    addBreadcrumb: (message: string, category?: string, level?: 'info' | 'warning' | 'error') => {
        Sentry.addBreadcrumb({
            message,
            category,
            level,
        })
    },
}