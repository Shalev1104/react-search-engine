
export function defaultInput(type: HTMLInputElement['type']) {
    switch (type) {
        
        case 'text':
        case 'date':
        case 'month':
        case 'week':
        case 'time':
        case 'datetime-local':
            return String();

        case 'number':
            return Number();
        
        case 'radio':
        case 'checkbox':
            return false;

        default:
            return undefined;
    }
}