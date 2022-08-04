
type TypeableInputs = 'number'   | 'text'
type DropdownInputs = 'select'   | 'datalist'
type BooleanInputs  = 'checkbox' | 'radio'
type DateTimeInputs = 'date'     | 'month'  | 'week' | 'time' | 'datetime-local'
type NumericInputs  = 'range'    | 'number'

type InputTypes = (
    | TypeableInputs 
    | DropdownInputs 
    | BooleanInputs 
    | NumericInputs
    | DateTimeInputs
)

type TypeableAttributes = Partial<{
    placeholder: string
}>
type DropdownAttributes = {
    options: Record<string, string>
}  
type NumericAttributes = Partial<{
    min: number;
    max: number;
}>
type BooleanAttributes = { }
type DateTimeAttributes = Partial<{
    min: string;
    max: string;
}>
    
type Input<Type, Value> = {
    inputType: Type;
    value?: Value;
}

type Extends<T, U, K> = T extends U ? K : unknown

type AdditionalAttributes<T> = (

    Extends<T, TypeableInputs, TypeableAttributes> &
    Extends<T, DropdownInputs, DropdownAttributes> &
    Extends<T, BooleanInputs, BooleanAttributes>   &
    Extends<T, DateTimeInputs, DateTimeAttributes> &
    Extends<T, NumericInputs, NumericAttributes>
)

type Attributes<T extends InputTypes, Value> = Input<T, Value> & AdditionalAttributes<T>

type NumberInput   = Attributes<'number', number>
type TextInput     = Attributes<'text', string>

type SelectInput   = Attributes<'select', string>
type DatalistInput = Attributes<'datalist', string>

type CheckboxInput = Attributes<'checkbox', boolean>
type RadioInput    = Attributes<'radio', boolean>

type DateInput     = Attributes<'date', string>
type MonthInput    = Attributes<'month', string>
type WeekInput     = Attributes<'week', string>
type TimeInput     = Attributes<'time', string>
type DateTimeInput = Attributes<'datetime-local', string>

type RangeInput    = Attributes<'range', number>

export type Inputs = (
    | NumberInput   | TextInput     | SelectInput
    | DatalistInput | CheckboxInput | RadioInput
    | DateInput     | MonthInput    | WeekInput
    | TimeInput     | DateTimeInput | RangeInput
)