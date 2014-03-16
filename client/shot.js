Template.shot.events({
  'mouseenter': function (event) {
    var shot = this;
    shot.image_teaser_url = shot.image_url;
    Session.set('zoomedShot', shot);
  },
  'mouseleave': function (event) {
    Session.set('zoomedShot', null);
  }
});