AFRAME.registerComponent('spinning', {
    init: function(){

    },
    update: function(){

    },
    tick: function(){
      var rot = this.el.getAttribute('rotation');
      rot.y = rot.y  + 1;
      rot.x = rot.x + 2;
      rot.z = rot.z + 4;
      this.el.setAttribute('rotation', rot);
    }, 
    remove: function(){

    },
    pause: function(){

    },
    play: function(){

    }
  });
