export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        await import('./src/pkg/libraries/sentry/sentry.server')
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
        await import('./src/pkg/libraries/sentry/sentry.edge')
    }
}
