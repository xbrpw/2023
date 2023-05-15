const EmojiApp = {
  data() {
    return {
      message: 'Emoji Input',
			emojiMessage: '',
			emojis: [
			"<img src='favicon.svg'>",
				'<style>/*😃*/<style>',
				'contenteditable="true"',
				'🔥',
				'😂',
				'🤬',
				'😈'
			]
    }
  },
	methods: {
		submit (e) {
			this.emojiMessage = this.message + e
			this.message = this.emojiMessage
		}
	}
}

Vue.createApp(EmojiApp).mount('#emoji-vue')