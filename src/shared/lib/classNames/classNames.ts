type Mods = Record<string, boolean | string | undefined>

export function classNames(cls : string, mods : Mods = {}, additional : (string | undefined)[] = []) : string{
	return [
		cls, 
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([,val]) => Boolean(val))
			.map(([key]) => key)
	].join(' ');
}
