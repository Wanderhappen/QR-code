import qrCode from '../../assets/qr-code.svg'
import s from './Card.module.css'
export const Card = () => {
	return (
		<div className={s.Card}>
			<div className={s.ImageWrapper}>
				<img src={qrCode} alt='' />
			</div>
			<div className={s.TextWrapper}>
				<h1 className={s.Title}>
					Improve your front-end skills by building projects
				</h1>
				<p className={s.Text}>
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next level
				</p>
			</div>
		</div>
	)
}
