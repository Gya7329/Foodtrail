import { ORDER_SET_TYPE } from "./constaints/OrderTypes"

export const setOrderType =(dispatch,orderType)=>{

return dispatch({
type:ORDER_SET_TYPE,
payload:orderType


})


}