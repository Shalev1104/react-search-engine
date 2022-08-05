
type TypeableInputs  = 'number'   | 'text'   | 'search'
type DropdownInputs  = 'select'
type BooleanInputs   = 'checkbox' | 'radio'
type DateTimeInputs  = 'date'     | 'month'  | 'week' | 'time' | 'datetime-local'
type NumericInputs   = 'range'    | 'number'
type CharacterInputs = Exclude<TypeableInputs, NumericInputs>

type InputTypes = (
    | TypeableInputs
    | DropdownInputs
    | BooleanInputs
    | NumericInputs
    | DateTimeInputs
)

type TypeableAttributes = Partial<{
    placeholder: string;
}>
type DropdownAttributes = {
    options: Record<string, string>;
    multiple?: boolean;
    autoFocus?: boolean;
    size?: number;
}
type NumericAttributes = Partial<{
    min: number;
    max: number;
    step: number;
}>
type BooleanAttributes = { }
type DateTimeAttributes = Partial<{
    min: string;
    max: string;
    step: number;
}>
type CharacterAttributes = Partial<{
    pattern: string;
    maxlength: number;
    minlength: number;
    size: number;
    spellcheck: boolean;
}>

type Input<Type, Value> = {
    inputType: Type;
    name: string;
} & Partial<{
    value: Value;
    label: string;
    disabled: boolean;
}>

type Extends<T, U, K> = T extends U ? K : unknown

type AdditionalAttributes<T> = (

    Extends<T, TypeableInputs, TypeableAttributes> &
    Extends<T, DropdownInputs, DropdownAttributes> &
    Extends<T, BooleanInputs, BooleanAttributes>   &
    Extends<T, DateTimeInputs, DateTimeAttributes> &
    Extends<T, NumericInputs, NumericAttributes>   &
    Extends<T, CharacterInputs, CharacterAttributes>
)

type Attributes<T extends InputTypes, Value> = Input<T, Value> & AdditionalAttributes<T>

type NumberInput   = Attributes<'number', number>
type TextInput     = Attributes<'text', string>
type SearchInput   = Attributes<'search', string>

type SelectInput   = Attributes<'select', string>

type CheckboxInput = Attributes<'checkbox', boolean>
type RadioInput    = Attributes<'radio', boolean>

type DateInput     = Attributes<'date', string>
type MonthInput    = Attributes<'month', string>
type WeekInput     = Attributes<'week', string>
type TimeInput     = Attributes<'time', string>
type DateTimeInput = Attributes<'datetime-local', string>

type RangeInput    = Attributes<'range', number>

export type Inputs = (
    | NumberInput   | TextInput     | SearchInput
    | SelectInput   | CheckboxInput | RadioInput
    | DateInput     | MonthInput    | WeekInput
    | TimeInput     | DateTimeInput | RangeInput
)