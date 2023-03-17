export type StylesType = Record<string, React.CSSProperties>;

export const transitionStyles: StylesType = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
	exiting: { opacity: 1 },
	exited: { opacity: 0 },
};
