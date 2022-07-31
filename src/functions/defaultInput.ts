
export function defaultInput(type: HTMLInputElement['type']) {
    switch (type) {
        
        case 'text':
            return '';

        case 'number':
            return NaN;
        
        case 'radio':
        case 'checkbox':
            return false;

        default:
            return undefined;
    }
}