let IconCard = {
  template: '#icon-card',
  props: {
    tags: Array,
    svg: String },

  data() {
    return {
      copied: false };

  },
  methods: {
    async copySVG() {
      try {
        await navigator.clipboard.writeText(this.svg);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2500);
        console.log('Copied');
      } catch ($e) {
        alert('Cannot copy');
      }
    } } };



new Vue({
  el: '#app',
  components: {
    'icon-card': IconCard },

  data() {
    return {
      icons: [
      {
        tags: ["Cloud", "Save"],
        svg: `
						<svg width="100" height="100">
							<path d="M70,50 A20,20 0 1,1 30,50 A20,20 0 1,1 70,50" fill="#6c757d" />
							<path d="M70,45 A15,15 0 1,1 30,45 A15,15 0 1,1 70,45" fill="#fff" />
							<path d="M70,40 A10,10 0 1,1 30,40 A10,10 0 1,1 70,40" fill="#6c757d" />
						</svg>

					` },

      {
        tags: ["Pencil", "Edit"],
        svg: `
						<svg width="100" height="100">
  <path d="M60,10 L90,10 L85,15 L85,60 L15,60 L15,15 L10,10 L40,10 L35,5 L50,20 L65,5 L60,10" fill="#6c757d" />
  <circle cx="50" cy="85" r="5" fill="#6c757d" />
</svg>
					` },

      {
        tags: ["Person", "Profile"],
        svg: `
						<svg class="icon icon-profile" width="100" height="100">
							<circle cx="50" cy="50" r="50" fill="#007bff" />
							<path d="M50,30 A20,20 0 1,1 50,70 A20,20 0 1,1 50,30" fill="#fff" />
							<path d="M30,70 L70,70 L55,85 L45,85 Z" fill="#007bff" />
						</svg>
					` },

      {
        tags: ['Tick', 'Success'],
        svg: `
						<svg width="100" height="100">
  <path d="M50,10 C40,20 30,40 30,60 C30,80 40,100 50,100 C60,100 70,80 70,60 C70,40 60,20 50,10" fill="white" />
</svg>

					` },

      {
        tags: ['Clipboard', 'Copy'],
        svg: `
						<svg class="icon icon-copy" width="100" height="100" viewBox="0 0 100 100">
							<path d="M10,10 L90,10 L90,90 L10,90 L10,10" fill="#6c757d" />
							<path d="M35,30 L65,30 L65,70 L35,70 L35,30" fill="#fff" />
						</svg>
					` },


      {
        tags: ['Cross', 'Close'],
        svg: `
						<svg width="100" height="100">
  <line x1="10" y1="10" x2="90" y2="90" stroke="white" stroke-width="5" />
  <line x1="10" y1="90" x2="90" y2="10" stroke="white" stroke-width="5" />
</svg>
					` },

      {
        tags: ['Pin', 'Bookmark'],
        svg: `
						<svg width="100" height="100" viewBox="0 0 100 100">
  <path d="M 50 0
           L 50 100, 0 50, 100 50 Z" fill="white"/>
  <path d="M 50 10
           L 50 90, 10 50, 90 50 Z" fill="white"/>
</svg>

					` },

      {
        tags: ['heart', 'favourite'],
        svg: `
						<svg width="100" height="100" viewBox="0 0 100 100">
  <path d="M50 10
           C 30 30, 70 30, 50 50
           C 30 70, 70 70, 50 90
           C 25 70, 75 70, 50 50 Z" fill="white"/>
</svg>
					` },

      {
        tags: ['star', 'favourite'],
        svg: `
						<svg width="100" height="100" viewBox="0 0 100 100">
  <path d="M50 10
           L 60 25, 100 25, 75 40, 85 75, 50 60, 15 75, 25 40, 0 25, 40 25 Z"  fill="white"/>
</svg>

					` }] };



  } });