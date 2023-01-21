function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var htmlPreview =
        '<img width="200" src="' + e.target.result + '" />' +
        '<p>' + input.files[0].name + '</p>';
      var wrapperZone = $(input).parent();
      var previewZone = $(input).parent().parent().find('.preview-zone');
      var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');

      wrapperZone.removeClass('dragover');
      previewZone.removeClass('hidden');
      boxZone.empty();
      boxZone.append(htmlPreview);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function reset(e) {
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
}

$(".dropzone").change(function() {
  readFile(this);
});

$('.dropzone-wrapper').on('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass('dragover');
});

$('.dropzone-wrapper').on('dragleave', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass('dragover');
});

$('.remove-preview').on('click', function() {
  var boxZone = $(this).parents('.preview-zone').find('.box-body');
  var previewZone = $(this).parents('.preview-zone');
  var dropzone = $(this).parents('.form-group').find('.dropzone');
  boxZone.empty();
  previewZone.addClass('hidden');
  reset(dropzone);
});




(function() {
  // Converts Image To Base64
  var Convert2Base64;

  Convert2Base64 = function(file) {
    var reader;
    reader = new FileReader();
    reader.onload = function(e) {
      document.querySelector('[data-place=img]').src = e.target.result;
      if ($('textarea').is(':visible')) {
        return $('textarea').val(document.querySelector('[data-place=img]').src);
      } else {
        $('textarea').css('display', 'block');
        return $('textarea').val(document.querySelector('[data-place=img]').src);
      }
    };
    return reader.readAsDataURL(file);
  };

  // Trigger Convert2Base64() Func
  $('[data-load=favicon]').on('change', function(evt) {
    var file;
    file = evt.target.files[0];
    return Convert2Base64(file);
  });

  
  // Select all when textarea is clicked
  $('textarea').on('focus', function(evt) {
    return $(this).select();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQTBCO0VBQUE7QUFBQSxNQUFBOztFQUMxQixjQUFBLEdBQWlCLFFBQUEsQ0FBQyxJQUFELENBQUE7QUFDakIsUUFBQTtJQUFFLE1BQUEsR0FBUyxJQUFJLFVBQUosQ0FBQTtJQUVULE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQUEsQ0FBQyxDQUFELENBQUE7TUFDZCxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBMEMsQ0FBQyxHQUEzQyxHQUFpRCxDQUFDLENBQUMsTUFBTSxDQUFDO01BQzFELElBQUcsQ0FBQSxDQUFFLFVBQUYsQ0FBYSxDQUFDLEVBQWQsQ0FBaUIsVUFBakIsQ0FBSDtlQUNFLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxHQUFkLENBQWtCLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixDQUEwQyxDQUFDLEdBQTdELEVBREY7T0FBQSxNQUFBO1FBR0UsQ0FBQSxDQUFFLFVBQUYsQ0FBYSxDQUFDLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNkIsT0FBN0I7ZUFDQSxDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsR0FBZCxDQUFrQixRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBMEMsQ0FBQyxHQUE3RCxFQUpGOztJQUZjO1dBUWhCLE1BQU0sQ0FBQyxhQUFQLENBQXFCLElBQXJCO0VBWGUsRUFEUzs7O0VBZTFCLENBQUEsQ0FBRSxxQkFBRixDQUF3QixDQUFDLEVBQXpCLENBQTRCLFFBQTVCLEVBQXNDLFFBQUEsQ0FBQyxHQUFELENBQUE7QUFDdEMsUUFBQTtJQUFFLElBQUEsR0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFEO1dBQ3ZCLGNBQUEsQ0FBZSxJQUFmO0VBRm9DLENBQXRDLEVBZjBCOzs7O0VBb0IxQixDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsRUFBZCxDQUFpQixPQUFqQixFQUEwQixRQUFBLENBQUMsR0FBRCxDQUFBO1dBQ3hCLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxNQUFSLENBQUE7RUFEd0IsQ0FBMUI7QUFwQjBCIiwic291cmNlc0NvbnRlbnQiOlsiIyBDb252ZXJ0cyBJbWFnZSBUbyBCYXNlNjRcbkNvbnZlcnQyQmFzZTY0ID0gKGZpbGUpIC0+XG4gIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyXG5cbiAgcmVhZGVyLm9ubG9hZCA9IChlKSAtPlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYWNlPWltZ10nKS5zcmMgPSBlLnRhcmdldC5yZXN1bHRcbiAgICBpZiAkKCd0ZXh0YXJlYScpLmlzKCc6dmlzaWJsZScpXG4gICAgICAkKCd0ZXh0YXJlYScpLnZhbCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGFjZT1pbWddJykuc3JjXG4gICAgZWxzZVxuICAgICAgJCgndGV4dGFyZWEnKS5jc3MgJ2Rpc3BsYXknLCAnYmxvY2snXG4gICAgICAkKCd0ZXh0YXJlYScpLnZhbCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGFjZT1pbWddJykuc3JjXG5cbiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwgZmlsZVxuXG4jIFRyaWdnZXIgQ29udmVydDJCYXNlNjQoKSBGdW5jXG4kKCdbZGF0YS1sb2FkPWZhdmljb25dJykub24gJ2NoYW5nZScsIChldnQpIC0+XG4gIGZpbGUgPSBldnQudGFyZ2V0LmZpbGVzWzBdXG4gIENvbnZlcnQyQmFzZTY0IGZpbGVcbiAgXG4jIFNlbGVjdCBhbGwgd2hlbiB0ZXh0YXJlYSBpcyBjbGlja2VkXG4kKCd0ZXh0YXJlYScpLm9uICdmb2N1cycsIChldnQpIC0+XG4gICQodGhpcykuc2VsZWN0KCk7Il19
//# sourceURL=coffeescript