import { type ButtonProps } from '@heroui/button'

export const getSearchButtonColor = (flag: string): ButtonProps['color'] => {
    switch (flag) {
        case 'success':
            return 'success'
        case 'warning':
            return 'warning'
        case 'danger':
            return 'danger'
        case 'secondary':
            return 'secondary'
        default:
            return 'primary'
    }
}

export const getCancelButtonColor = (flag: string): ButtonProps['color'] => {
    switch (flag) {
        case 'success':
            return 'success'
        case 'warning':
            return 'warning'
        case 'danger':
            return 'danger'
        case 'secondary':
            return 'secondary'
        default:
            return 'default'
    }
}


