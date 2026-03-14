import {
	big__desktop__min_width, cogov__primary__color, land__tab__max_width,
	land__tab__min_width, pack__max_width,
	pack__min_width,
	phone__max_width, port__tab__max_width,
	sm__min_width
} from '@cogov/css'
import { type Config } from 'tailwindcss'
const config:Config = {
	content: [],
	theme: {
		screens: {
			phone: { max: phone__max_width },
			sm: sm__min_width,
			port: { max: port__tab__max_width },
			pack: { min: pack__min_width, max: pack__max_width },
			land: { min: land__tab__min_width, max: land__tab__max_width },
			big: big__desktop__min_width,
		},
		fontFamily: {
			sans: ['Urbanist'],
			serif: ['Urbanist'],
		},
	},
}
export default config
