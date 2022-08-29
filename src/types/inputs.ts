import { StyleElements } from './style'

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
    | CharacterInputs
)

type TypeableAttributes = Partial<{
    placeholder: string;
}>
type Unpacked<T> = T extends (infer U)[] ? U : T;
type SelectValue = NonNullable<Unpacked<SelectInput['value']>>
type DropdownAttributes = { 
    options: Record<string, SelectValue> | SelectValue[]
} & Partial<{
    placeholder: string;
    autoComplete: string
    autoFocus: boolean
    multiple: boolean
}>
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
    maxLength: number;
    minLength: number;
    spellcheck: boolean;
}>

type Attributes<Type, Value> = {
    type: Type;
    name: string;
} & Partial<{
    value: Value;
    label: string;
    width: number;
    height: number;
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
type GlobalAttributes = StyleElements;

type Input<T extends InputTypes, U> = (
    Attributes<T, U> & 
    AdditionalAttributes<T> &
    GlobalAttributes
)

type NumberInput   = Input<'number', number>
type TextInput     = Input<'text', string>
type SearchInput   = Input<'search', string>

type SelectInput   = Input<'select', (string | number)[]> 

type CheckboxInput = Input<'checkbox', boolean>
type RadioInput    = Input<'radio', boolean>

type DateInput     = Input<'date', string>
type MonthInput    = Input<'month', string>
type WeekInput     = Input<'week', string>
type TimeInput     = Input<'time', string>
type DateTimeInput = Input<'datetime-local', string>

type RangeInput    = Input<'range', string>

export type Inputs = (
    | NumberInput   | TextInput     | SearchInput
    | SelectInput   | CheckboxInput | RadioInput
    | DateInput     | MonthInput    | WeekInput
    | TimeInput     | DateTimeInput | RangeInput
)