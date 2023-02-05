import {
	big__desktop__min_width,
	cogov__grey__color,
	cogov__primary__color,
	cogov__primary_dark__color,
	cogov__primary_light__color,
	cogov__secondary__color,
	mobile__nav__height,
	nav__height,
	pack__max_width,
	phone__font_size,
	phone__max_width,
	land__tab__max_width,
	port__tab__max_width
} from './_const'
const var_R:Record<string, string> = {
	'var(--cogov--primary--color)': cogov__primary__color,
	'var(--cogov--primary-light--color)': cogov__primary_light__color,
	'var(--cogov--primary-dark--color)': cogov__primary_dark__color,
	'var(--cogov--secondary--color)': cogov__secondary__color,
	'var(--cogov--grey--color)': cogov__grey__color,
	'var(--phone--max-width)': phone__max_width,
	'var(--port--tab--max-width)': port__tab__max_width,
	'var(--pack--max-width)': pack__max_width,
	'var(--land--tab--max-width)': land__tab__max_width,
	'var(--big--desktop--min-width)': big__desktop__min_width,
	'var(--phone--font-size)': phone__font_size,
	'var(--nav--height)': nav__height,
	'var(--mobile--nav--height)': mobile__nav__height,
}
export function var__css__replace(css:string):string {
	return css.replaceAll(/var\((.$)\)/, $=>var_R[$])
}
