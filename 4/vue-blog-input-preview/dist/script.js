new Vue ({
  el: '#blog',
  data: function(){
    return {
      editTitle: '',
      editContent: '',
      title: '',
      mes: '',
      content: ''  
    }
  },
  delete: '',
  
  
  methods: {
    previewPost: function() {
      this.title = this.editTitle;
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