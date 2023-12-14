import { var__css__replace } from 'relysjs'
import {
	big__desktop__min_width,
	cogov__grey__color,
	cogov__primary__color,
	cogov__primary_dark__color,
	cogov__primary_light__color,
	cogov__secondary__color,
	land__tab__max_width,
	mobile__nav__height,
	nav__height,
	pack__max_width,
	pack__min_width,
	phone__font_size,
	phone__max_width,
	port__tab__max_width
} from './_const.js'
const base_var_R:Record<string, string> = {
	'--cogov--primary--color': cogov__primary__color,
	'--cogov--primary-light--color': cogov__primary_light__color,
	'--cogov--primary-dark--color': cogov__primary_dark__color,
	'--cogov--secondary--color': cogov__secondary__color,
	'--cogov--grey--color': cogov__grey__color,
	'--phone--max-width': phone__max_width,
	'--port--tab--max-width': port__tab__max_width,
	'--pack--min-width': pack__min_width,
	'--pack--max-width': pack__max_width,
	'--land--tab--max-width': land__tab__max_width,
	'--big--desktop--min-width': big__desktop__min_width,
	'--phone--font-size': phone__font_size,
	'--nav--height': nav__height,
	'--mobile--nav--height': mobile__nav__height,
}
export function cogov__var__css__replace(css:string, ..._var_R_a:Record<string, string>[]):string {
	return var__css__replace(css, base_var_R, ..._var_R_a)
}
