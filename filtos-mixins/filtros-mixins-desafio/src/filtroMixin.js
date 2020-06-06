export default {
    computed: {
		converter () {
			return `${this.frase}`.split(' ').join(',')
		},
		contar () {
			let txt = `${this.frase}`.split(' ')
			let txtFinal = ''
			
			txt.forEach(word => {
				txtFinal += `${word} (${word.length}) `
			});

			return txtFinal
		}
	},
}