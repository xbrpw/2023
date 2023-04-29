new Vue ({
  el: '#blog',
  data: function(){
    return {
      editTitle: '',
      editTitlesigno: '',
      editTitleDia: '',
      editContent: '',
      title: '',
      mes: '',      
      signo:  '',
      dia: '',
      content: ''  
    }
  },
  delete: '',
  
  
  methods: {
    previewPost: function() {
      this.title = this.editTitle;
      this.signo = this.editTitlesigno;
      this.dia = this.editTitleDia;
      this.content = this.editContent;
      this.mes = this.editMes;
    }
  }
});



$('.preview').click(function(){
  $('.preview-data').velocity("transition.slideUpIn", {
    duration: 400, 
    stagger: 100
  });
});