var input = [
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/julie-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/lori-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/yelvin-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/joanne-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/rob-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/kerry-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/jessica-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/deb-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/caly-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/dan-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/mike-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/brian-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/richard-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/mark-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/brianh-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/chris-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/allan-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/raphael-180x180.jpg>',
  '<img src=http://refactoru.com/employerportal/wp-content/uploads/2013/09/jenn1-180x180.jpg>',
  ];


$(function(){

  $("#show").show();
  $("#again").hide();

  $('#chunks').on('keyup', function(e){
    if(e.keyCode === 13) {
      var chunky = $(this).val();
        $("#chunks").fadeOut( "slow")
        $("#show").fadeOut( "slow")
        $("#again").show()
        $('#results').html(chunk(newInput, chunky)).show();
    };
  });

});

$('#again').click(function() {
    location.reload();
});

function chunk(array,size) {
  var mid = (array.length/size); var chunks = []; var start = 0
  for(var i=1; i<=size; i++) {
    var last = (start+mid)
    if (array.length%size <= i) last = last-1
    chunks.push("Group "+i+" =>"+array.slice(start,(last+1))+"<br>")
    start = (last+1)
  }
  return (chunks)
}

var newInput = shuffle(input)

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}