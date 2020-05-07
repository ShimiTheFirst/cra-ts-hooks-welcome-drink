declare type ClassName = { className?: string }
declare type InputProps = React.InputHTMLAttributes<HTMLInputElement>

declare type Nullable<T> = T | null
declare type RoA<T> = ReadonlyArray<T>
declare type DateString = string
declare type BoolString = '1' | '0'
declare type BoolNumber = 1 | 0
declare type MarkdownString = string

declare type ReactNode = null | React.ReactElement<any>
declare type ReactNodes = ReactNode | ReactNode[]

declare type WithChildren<T> = {
  children?: T
}

declare type NoChildren = WithChildren<never>
declare type SingleChild = WithChildren<ReactNode>
declare type SomeChildren = WithChildren<ReactNodes>
