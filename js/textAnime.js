
var doAnimations = function() {
    var elem = document.querySelectorAll('.text');
    var elemLen = elem.length;
    for (var i = 0; i < elemLen; i++) {
      var elemSplit = elem[i].textContent.split('');
      var tag = '';
      var fragment = document.createDocumentFragment();
      elem[i].innerHTML = '';
      for (var j = 0; j < elemSplit.length; j++) {
        tag = document.createElement('span');
        tag.setAttribute('class', 'text-parts');
        tag.innerHTML = elemSplit[j];
        fragment.appendChild(tag);
      }
      elem[i].appendChild(fragment);
    }
    var AddClass = function(obj) {
      this.obj = obj;
    };
    AddClass.prototype.add = function() {
      if (this.obj.len > 0) {
        for (var i = 0; i < this.obj.len; i++) {
          lag(this.obj.target, this.obj.time, i);
        }
      }
    };
    function lag(target, time, i) {
      setTimeout(function() {
        target[i].classList.add('is-animate');
        var elem = target[i].children;
        var elemLen = elem.length;
        var elems = {
          target: elem,
          len: elemLen,
          time: 50
        };
        var addChild = new AddClass(elems);
        addChild.add();
      }, i * time);
    }
    var elems = {
      target: elem,
      len: elemLen,
      time: 500
    };
    var addParent = new AddClass(elems);
    addParent.add();
  }
  window.addEventListener('load', doAnimations, false);
    
  
  