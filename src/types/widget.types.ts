export interface ControlValue {
	currentValue: number
	minValue: number
	maxValue: number
}

export interface TableItem {
	currentValue: number
	prevValue: number
	change: number
	timestep: string
}

export interface GraphItem {
	currentValue: number
	timestep: string
}

export interface RootControlValue {
	value: ControlValue
}
