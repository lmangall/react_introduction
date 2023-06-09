import { useState } from "react";
import Button from "./button";

const text = [
	"Eh toi, le procrastinateur professionnel, tu te sens bien au royaume des je fais ça plus tard ?",
	"T'as déjà essayé de mesurer le temps que tu passes à remettre au lendemain ce que tu pourrais faire aujourd'hui ? C'est sûrement un record olympique !",
	"Dis-moi, cher procrastinateur, est-ce que ton lit est un vortex magnétique qui t'aspire dès que tu cherches à te mettre au travail ?",
	"Tu te sens comment quand tu réalises que ta to-do list ressemble plus à une to-don't list ?",
	"Est-ce que tu te rappelles quand tu t'es dit : \"Demain, j'arrête de procrastiner !\" et que tu l'as repoussé jusqu'à demain, évidemment ?",
	"Toi qui retards toujours tout, est-ce que tu penses que le temps a un agenda bien rempli à cause de toi ?",
	"Franchement, tu trouves pas ça ironique de procrastiner sur des articles ou des vidéos sur la procrastination ?",
	"Est-ce que tu te considères comme un expert en pro-crastination ou juste un amateur passionné ?",
	"Sérieusement, est-ce que tu te dis que procrastiner est une façon de résister à l'oppression du temps ?",
	"Oh, et cette fameuse phrase : \"Pourquoi faire aujourd'hui ce que tu peux remettre à demain ?\" Ça te fait sourire ou te donne des sueurs froides ?",
	"Dis-moi, as-tu déjà atteint le stade où tu remets au lendemain le fait de ne plus remettre au lendemain ?",
	"Allez, avoue-le, quand tu repousses une tâche, tu te sens comme un maître ninja de l'évitement, n'est-ce pas ?",
	"Entre nous, procrastiner, c'est un peu comme jouer au chat et à la souris avec le temps, mais on sait tous qui gagne à la fin.",
	"Alors, cher ami de la procrastination, quand est-ce que tu vas enfin te décider à faire face à l'inévitable et à agir ?",
	"Quand tu te retrouves à procrastiner, est-ce que tu te demandes si tu es un génie incompris ou juste un paresseux ?",
	"Bon, allez, c'est l'heure de passer à l'action... ou peut-être après une petite sieste ?"
];

// function MyFirstFunction()

function App() {
	const [textShown, setTextShown] = useState(text[8]);

	function handleClick(){
		const nextText = text.shift();
		// console.log(nextTest);
		setTextShown(nextText);
	}


	return (
		<div className="App" onClick={handleClick}>
			<div className="text_content">
				{/* curlies for javascript */}
				{textShown}
				<Button />
			</div>
		</div >
	);
}

export default App;
