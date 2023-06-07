import style from './title.module.css';

const Title = () => {
	return (
		<div className={style.title}>
			<h2 className={style.firsttitle}>
				Reliable, efficient delivery <br />
				<span className={style.bold}>Powered by Technology</span>
			</h2>
			<p className={style.titletext}>
				Our Artificial intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</p>
		</div>
	);
};

export default Title;
