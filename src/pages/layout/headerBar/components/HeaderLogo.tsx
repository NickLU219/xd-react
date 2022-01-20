import style from "../style/HeaderLogo.module.less"

export interface HeaderLogoProps {
    url?: string
}
export default function HeaderLogo(props: HeaderLogoProps) {
    console.log(props.url)
	return <div className={style.logo}></div>
}
