var cards = [
	{
		title: 'Lorem Ipsum',
		author: 'John Smith',
		content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		tags: ['films', 'music', 'adventures', 'travel', 'persons', 'read', 'moods'],
		image: "https://images.unsplash.com/photo-1549436304-3bfb7b6aab87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
	},{
		title: 'Why do we use it?',
		author: 'Mary McTee',
		content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
		tags: ['films', 'music', 'adventures'],
		image: "https://images.unsplash.com/photo-1547984543-e086e6d786b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
	},{
		title: 'Where does it come from',
		author: 'Marco Polo',
		content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
		tags: ['films', 'music', 'adventures', 'travel', 'persons', 'read', 'moods', 'literature', 'renaissance'],
		image: "https://images.unsplash.com/photo-1547473078-cbab237054c0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
	}
];
var previewPage = (function($, data){
	var profile = {
		currentContentOnButton: '',
		contentOnButtonIfBlockOpen: '<span>Hide</span><span><svg viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></span>',
		currentActivePageIndex: 0,
		pageAmount: data.length,
		lastPageIndex: data.length - 1,
		setControllers: function () {
			var self = this;
			$('.btn').on('click', function () {
				var block = $('.block');	
				if( !block.hasClass('block--open') ){
					self.currentContentOnButton = $(this).html();
					$(this).html(self.contentOnButtonIfBlockOpen);
				}else{
					$(this).html(self.currentContentOnButton);
				}
				$('.block').toggleClass('block--open');
			});
			$('.page-actions__button--like').on('click', function () {
				$(this).addClass('page-actions__button--like-remove');
				var _self = $(this);
				setTimeout(function () {
					_self.remove();
				}, 300);
		 	});
			$(document).on('click', '.page-actions__button--prev', function () {
				self.getActiveIndex('prev');
				self.setDataOnPreviewPage(self.currentActivePageIndex)
			});
			$(document).on('click', '.page-actions__button--next', function () {
				self.getActiveIndex('next');
				self.setDataOnPreviewPage(self.currentActivePageIndex)
			});
		},
		getActiveIndex: function (direction) {
			if (direction === 'prev') {
				if (this.currentActivePageIndex === 0) {
					this.currentActivePageIndex = this.lastPageIndex;
				}else{
					this.currentActivePageIndex--;
				}
			}
			if (direction === 'next') {
				 if (this.currentActivePageIndex === this.lastPageIndex){
					this.currentActivePageIndex = 0;
				}else{
					this.currentActivePageIndex++;
				}
			}
		},
		setDataOnPreviewPage: function (index) {
			var currentData = data[index];
			var image = $('.image-block__image').attr('src', currentData.image);
			$('.image-block__image').css({filter: 'blur(15px)'});
			setTimeout(function(){
				$('.image-block__image').css({filter: 'blur(0px)'});
			},300);
			var content = $('.block__content').html(currentData.content);
			var title = $('.block__title').html(currentData.title);
			var name = $('.block__name').html(currentData.author);
			var tagsContainer = $('.block__tags');
			tagsContainer.empty();
			currentData.tags.forEach(function (tag) {
				tagsContainer.append('<div class="block__tags-item">'+ tag +'</div>');
			});
			
		},
		init: function () {
			this.setDataOnPreviewPage(this.currentActivePageIndex)
			this.setControllers();
		}
	};
	return profile;
}($, cards));

 previewPage.init();
/*
var currentContent;
$('.btn').on('click', function () {
	var block = $('.block');	
	var newContent = 'hide';
	if( !block.hasClass('block--open') ){
		currentContent = $(this).text();
		$(this).text(newContent);
	}
	if( block.hasClass('block--open') ){
		$(this).text(currentContent);
	}
	$('.block').toggleClass('block--open');
});
$('.page-actions__button--like').on('click', function () {
	$(this).addClass('page-actions__button--like-remove');
	var self = $(this);
	setTimeout(function () {
		self.remove();
	}, 300);
});
*/

/*
function showAndHideInfo () {
	var isOpen = false;
	var max = $('span').height();
	var min = $('.block').height();
	$('.btn').on('click', function () {
		if ( !isOpen ) {
			$('.block').animate({height: max+"px"}, 300);
		}else{
			$('.block').animate({height: min+"px"}, 300);
		}
		isOpen = !isOpen;
	});
}
showAndHideInfo();
*/