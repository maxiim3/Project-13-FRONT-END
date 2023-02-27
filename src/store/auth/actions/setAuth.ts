import {authSlicer} from "../authSlicer"

export const SetAuth = (value: boolean) => authSlicer.actions.setIsConnected(value)