import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Japan?',
			answerOptions: [
				{ answerText: 'Kyoto', isCorrect: false },
				{ answerText: 'Otakaua', isCorrect: false },
				{ answerText: 'Tokyo', isCorrect: true },
				{ answerText: 'Busan', isCorrect: false },
			],
		},
		{
			questionText: 'Which is not a car company?',
			answerOptions: [
				{ answerText: 'Honda', isCorrect: false },
				{ answerText: 'Yamaha', isCorrect: true },
				{ answerText: 'Mitsubishi', isCorrect: false },
				{ answerText: 'BMW', isCorrect: false },
			],
		},
		{
			questionText: 'what is the most comonly used color in country flags?',
			answerOptions: [
				{ answerText: 'Red', isCorrect: true },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'White', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
    {
			questionText: 'How many books do you need for it to be considered a library?',
			answerOptions: [
				{ answerText: '10,000', isCorrect: false },
				{ answerText: '4,000', isCorrect: false },
				{ answerText: '1,000', isCorrect: true },
				{ answerText: '2,500', isCorrect: false },
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
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}