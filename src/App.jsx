import Cards from './components/cards/Cards';
import Title from './components/title/Title';
import { CARDS } from './constants/cards';

const App = () => {
	return (
		<>
			<Title />

			<div className='grid'>
				{CARDS.map(card => (
					<Cards
						key={card.id}
						src={card.src}
						alt={card.alt}
						color={card.color}
						name={card.name}
						text={card.text}
					/>
				))}
			</div>
		</>
	);
};

export default App;
