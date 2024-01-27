import { AiFillTool } from "react-icons/ai"
import { BiSolidFactory } from "react-icons/bi"
import { BsFillFuelPumpFill } from "react-icons/bs"
import {
	FaMapMarkedAlt,
	FaTractor,
	FaTruck,
	FaUsers,
	FaUser,
	FaRoute,
	FaUserTag,
} from "react-icons/fa"
import { FaTimeline, FaTruckFast, FaTruckFieldUn } from "react-icons/fa6"
import { GiSteeringWheel } from "react-icons/gi"
import { HiDocumentReport, HiPlusCircle } from "react-icons/hi"
import { IoLocationSharp } from "react-icons/io5"
import { LuLayoutDashboard } from "react-icons/lu"

const routesData = {
	"/map": {
		route: "/map",
		name: "Mapa",
		icon: FaMapMarkedAlt,
		permission: 'ViewMaps',
	},
	"/timeline": {
		route: "/timeline",
		name: "Linha do tempo",
		icon: FaTimeline,
		desatived: true,
		permission: 'ViewMaps',
	},
	"/operational-panel": {
		route: "/operational-panel",
		name: "Painel Operacional",
		icon: LuLayoutDashboard,
		permission: 'ViewMaps',
	},
	"/equipments": {
		route: "/equipments",
		name: "Equipamentos",
		icon: FaTruck,
		permission: 'ViewEquipments',
	},
	registers: {
		name: "Cadastros",
		icon: HiPlusCircle,
		permissions: ['ViewDrivers', 'ViewEquipments', 'ViewModels', 'ViewImplements', 'ViewUsers', 'All'],
	},
	"/models": {
		route: "/models",
		name: "Modelos",
		icon: FaTruckFast,
		permission: 'ViewEquipments',
	},
	"/implements": {
		route: "/implements",
		name: "Implementos",
		icon: FaTractor,
		permission: 'ViewImplements',
	},
	"/users": {
		route: "/users",
		name: "Usuários",
		icon: FaUsers,
		permission: 'ViewUsers',
	},
	"/supply": {
		route: "/supply",
		name: "Abastecimento",
		icon: BsFillFuelPumpFill,
		desatived: true,
		permission: 'ViewSupply',
	},
	reports: {
		name: "Relatórios",
		icon: HiDocumentReport,
		desatived: true,
		permissions: ['ViewSupply', 'ViewMaintenance', 'All'],
	},
	"/operation": {
		route: "/operation",
		name: "Operação",
		icon: BiSolidFactory,
		desatived: true,
		permission: 'ViewUsers',
	},
	"/maintenance": {
		route: "/maintenance",
		name: "Manutenção",
		icon: AiFillTool,
		desatived: true,
		permission: 'ViewMaintenance',
	},
	"/location": {
		route: "/location",
		name: "Local",
		icon: IoLocationSharp,
		desatived: true,
		permission: 'ViewLocation',
	},
	"/path": {
		route: "/path",
		name: "Trajeto",
		icon: FaRoute,
		permission: 'ViewMaps',
	},
	"/profile": {
		route: "/profile",
		name: "Meu perfil",
		icon: FaUser,
	},
	"/drivers": {
		route: "/drivers",
		name: "Motoristas",
		icon: GiSteeringWheel,
		permission: 'ViewDrivers',
	},
	"/car-makes": {
		route: "/car-makes",
		name: "Marcas",
		icon: FaTruckFieldUn,
		permission: 'ViewDrivers',
	},
	"/roles": {
		route: "/permissions",
		name: "Permissões",
		icon: FaUserTag,
		permission: 'ViewRoles',
	},
	"/permissions": {
		route: "/permissions",
		name: "Permissões",
		icon: FaUserTag,
		permission: 'ViewRoles',
	},
}

export default routesData