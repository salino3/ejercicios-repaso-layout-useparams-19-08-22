import { motosYcoches } from "../data/Info"

const getTipoVehiculo = (elejirTipo: any) => {
 
 let variable = motosYcoches.filter((vehiculo: any) => vehiculo.tipo === elejirTipo)
 return variable

}
// console.log(getTipoVehiculo("moto"));
export default getTipoVehiculo


