import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { widgetAction } from "../store/widget.slice";

const actions = {
	...widgetAction
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}