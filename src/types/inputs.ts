
enum InputTypes {
    text,
    number,
    select,
}

type Input<Type extends keyof typeof InputTypes, Value> = {
    inputType: Type;
    value?: Value;
}

type SelectInput = Input<'select', NonNullable<number>> & {
    options: Record<string, number>;
}

type TextInput = Input<'text', string> & {
    placeholder?: string;
}

type NumberInput = Input<'number', number>

export type { SelectInput, TextInput, NumberInput };