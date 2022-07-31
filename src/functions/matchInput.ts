

export function matchInput(value: string, type: HTMLInputElement['type'] | null) {
    switch (type) {
            
        case 'text':
            return value;

        case 'number':
            return Number(value) 

        case 'checkbox':
        case 'radio':
            return value === 'on';
        
        default:
            return typeof value === 'number' ? Number(value) : value
    }
}