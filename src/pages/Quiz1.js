import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Quizz1() {
	const questions = [
		{
			questionText: 'Vad innebär begreppet klimatförändring?',
			answerOptions: [
				{ answerText: 'Att klimatet på jorden förändras', isCorrect: false },
				{ answerText: 'Att pluto kommer krascha med venus', isCorrect: false },
				{ answerText: 'Att solen kommer slockna', isCorrect: true },
				
			],
		},
		{
			questionText: 'Vad är ett ekosystem?',
			answerOptions: [
				{ answerText: 'En mataffär', isCorrect: false },
				{ answerText: 'allt levande i miljön ', isCorrect: true },
				{ answerText: 'Ett miljöföretag', isCorrect: false },
				
			],
		},
		{
			questionText: 'Vad är koldioxid?',
			answerOptions: [
				{ answerText: 'En naturlig och nyttig gas', isCorrect: true },
				{ answerText: 'En naturlig gas som bidrar till att allt levande kan växa.', isCorrect: false },
				{ answerText: 'En gas som dödar allt grönt som växer', isCorrect: false },
				
			],
		},
		{
			questionText: 'Vad innebär växthuseffekten?',
			answerOptions: [
				{ answerText: 'Att värmen på jorden ökar och bidrar till att vattenmängden ökar.', isCorrect: false },
				{ answerText: 'Att människor behöver köra mer bil ', isCorrect: false },
				{ answerText: 'Att jorden kommer bli kallare ', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quizz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<Link to="/Quiz" className="btn-primary">
            Gör om quizz
          </Link>
		  					</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Frågan {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className= "Svar" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}