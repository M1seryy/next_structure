export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        await import('../pkg/libraries/sentry/sentry.server')
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
        await import('../pkg/libraries/sentry/sentry.edge')
    }
}
