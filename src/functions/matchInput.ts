

export function matchInput(value: string | boolean, type: HTMLInputElement['type'] | null) {
    switch (type) {    
        
        case 'number':
            return Number(value); 
            
        default:
            return value;
    }
}