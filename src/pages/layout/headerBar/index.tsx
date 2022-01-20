import HeaderBar from "./components/HeaderBar"
import HeaderLogo, { HeaderLogoProps } from "./components/HeaderLogo"
import style from "./index.module.less"

export default function HeaderBarLayout() {
	const logoProps: HeaderLogoProps = {
		url: "aaaaaa"
	}
	return (
        <div className={style.header}>
			<HeaderLogo {...logoProps}></HeaderLogo>
            <HeaderBar></HeaderBar>
        </div>
    )
}
