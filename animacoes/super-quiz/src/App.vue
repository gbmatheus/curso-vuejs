<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<hr>
		<transition name="flip" mode="out-in">
			<Question v-if="!response"
				:question="questions[currentQuestion]"
				@click="responseQuestion($event)"
			/>

			<Result v-else 
				:response="correct"
				@click="nextQuestion"
			/>
		</transition>
		
	</div>
</template>

<script>
import questions from '@/util/questions'
import Question from '@/components/Question'
import Result from '@/components/Result'

export default {
	components: { Question, Result },
	data () {
		return {
			questions,
			currentQuestion: 0,
			response: false,
			correct: ''
		}
	},
	methods: {
		responseQuestion (event) {
			this.response = true
			this.correct = event
		},
		nextQuestion () {
			this.response = false
			let random = Math.random() * this.questions.length
			this.currentQuestion = parseInt(random)
		}
	}

}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
