function caseAccordion() {
    $('.js-switch-btn').on('click', function() {
      let btn = $(this);
      btn.toggleClass('active');
      if(btn.hasClass('active')){
        btn.prev().slideDown();
        btn.toggleClass('hide open');
        btn.text('閉じる')
      } else {
        btn.prev().slideUp();
        btn.toggleClass('hide open');
        btn.text('詳しくみる')
      };
    });
}

caseAccordion();