(() => {
  if (!window.CarouselSlider) window.CarouselSlider = {}; // window 객체에 CarouselSlider 객체 선언
  const _$ = str => document.querySelector(str); // _$(element) 

  const CarouselSlider = {
    element: null,

    init (el) { // init
      this._element = el;
      const _element = _$(`#${el}`) // element 공통화

      // document.addEventListener("keydown", CarouselSlider.keypress);
      // _element.addEventListener("click", CarouselSlider.select, true);

      _element.addEventListener("mousedown", CarouselSlider.doDown);
      _element.addEventListener("mouseup", CarouselSlider.doUp);

      _element.addEventListener("touchstart", CarouselSlider.doDown);
      _element.addEventListener("touchend", CarouselSlider.doup);

      CarouselSlider.re_order();

      _$('#prev').addEventListener("click", CarouselSlider.previous);
      _$('#next').addEventListener("click", CarouselSlider.next);

      CarouselSlider.selected = _$(".selected");
    },

    removeClass (el, classname='') { // 클래스 지우기
      if (el) {
        if (classname === '') el.className = '';
        else el.classList.remove(classname);
        return el;
      }
      return;
    },

    re_order () { // 엘리먼트 재설정 
      const _element = _$(`#${this._element}`);
      const _length = _element.children.length;
      const _childrens = _element.children;

      for (let i = 0; i < _length; i++) {
        _childrens[i].dataset.pos = i;
      }
    },

    moveElement (direction) { // 엘리먼트 이동
      let _selected = direction; // const X
      const _element = _$(`#${this._element}`);

      if (typeof direction === "string") {
        // console.log(`got string: ${el}`);
        _selected = (direction == "next") ? 
          _$(".selected").nextElementSibling : 
          _$(".selected").previousElementSibling;
        // console.dir(selected);
      }

      const curpos = parseInt(CarouselSlider.selected.dataset.pos);
      const tgtpos = parseInt(_selected.dataset.pos);

      const cnt = curpos - tgtpos;
      const dir = (cnt < 0) ? -1 : 1;
      const shift = Math.abs(cnt);

      for (let i = 0; i < shift; i++) {
        let __el = (dir == -1) ? 
        _element.firstElementChild : 
        _element.lastElementChild; 

        if (dir == -1) {
          __el.dataset.pos = _element.children.length;
          _element.append(__el);
        } else {
          __el.dataset.pos = 0;
          _element.prepend(__el);
        }

        // console.log(direction)
        CarouselSlider.re_order();
      }

      CarouselSlider.selected = _selected;
      _selected.className = '';
      _selected.classList.add("selected");

      // prev
      const prev = _selected.previousElementSibling;
      const prevSecond = prev ? 
        prev.previousElementSibling : 
        _selected.parentElement.lastElementChild;
        
      CarouselSlider.removeClass(prev).classList.add('prev');
      CarouselSlider.removeClass(prevSecond).classList.add("prevLeftSecond");
      CarouselSlider.prevAll(prevSecond).forEach((item) => { 
        item.className = ''; 
        item.classList.add('hideLeft') 
      });

      // next
      const next = _selected.nextElementSibling; 
      const nextSecond = next ? 
        next.nextElementSibling : 
        _selected.parentElement.firstElementChild;

      CarouselSlider.removeClass(next).classList.add('next');
      CarouselSlider.removeClass(nextSecond).classList.add("nextRightSecond");
      CarouselSlider.nextAll(nextSecond).forEach((item) => { 
        item.className = ''; 
        item.classList.add('hideRight') 
      });
    },

    select (e) {
      let _tgt = e.target;
      console.log(_tgt)
      
      while (!_tgt.parentElement.classList.contains('carousel')) {
        _tgt = _tgt.parentElement;
      }
      
      CarouselSlider.moveElement(_tgt);
    },

    prevAll (el) {
      let els = [];
      if (el) {
        while (el = el.previousElementSibling) { 
          els.push(el); 
        }
      }
      return els;
    },
    nextAll (el) {
      let els = [];
      if (el) {
        while (el = el.nextElementSibling) { 
          els.push(el); 
        }
      }
      return els;
    },

    previous (e) { // 이전 버튼
      CarouselSlider.moveElement('prev');
    },
    next (e) { // 다음 버튼
      CarouselSlider.moveElement('next');
    },

    doDown (e) { // 
      // console.log(`down: ${e.x}`);
      CarouselSlider.state.downX = e.x;
    },
    doUp (e) { // 
      // console.log(`up: ${e.x}`);

      let _direction = 0,
        _velocity = 0;

      if (CarouselSlider.state.downX) {
        _direction = (CarouselSlider.state.downX > e.x) ? -1 : 1;
        _velocity = CarouselSlider.state.downX - e.x;

        if (Math.abs(CarouselSlider.state.downX - e.x) < 10) { // 절대값 구하기 Math.abs(-5) --> 5
          CarouselSlider.select(e);
          return false;
        }

        if (_direction === -1) {
          CarouselSlider.moveElement('next');
        } else {
          CarouselSlider.moveElement('prev');
        }

        CarouselSlider.state.downX = 0;
      }
    },

    // keypress (e) { // 키보드 컨트롤
    //   switch (e.which) {
    //     case 37: // left
    //       CarouselSlider.move('prev');
    //       break;
    //     case 39: // right
    //       CarouselSlider.move('next');
    //       break;
    //     default: return;
    //   }
    //   e.preventDefault();
    //   return false;
    // },

    state: {} // downX
  }

  CarouselSlider.init("carousel");
})();