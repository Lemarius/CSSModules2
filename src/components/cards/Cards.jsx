import style from './cards.module.css';

const Cards = ({ src, alt, color, name, text }) => {
	return (
		<div className={`${style.container} ${style[color]}`}>
			<h2 className={style.containerh2}>{name}</h2>
			<p className={style.containerp}>{text}</p>
			<img src={src} alt={alt} className={style.containerimg} />
		</div>
	);
};

export default Cards;
