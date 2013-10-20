//pictures
var picturesArray = [
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

// event handlers
$(function(){
  $("#show").show();
  $("#again").hide();
  $('#chunks').on('keyup', function(e){
    if(e.keyCode === 13) {
      var groupNumbers = $(this).val();
        var arrays = chunk(newInput, groupNumbers)
        $("#chunks").fadeOut( "slow");
        $("#show").fadeOut( "slow");
        $("#again").show();
        $('#results').html(arrays).show();
    };
  });
});

// refresh page upon click
$('#again').click(function() {
    location.reload();
});



// create equal size arrays
function chunk(array,size) {
  var mid = (array.length/size); var chunks = []; var start = 0;
  for(var i=0; i<size; i++) {
    var last = Math.floor(start+mid);
    if (array.length%size <= i) last = last-1;
    chunks.push("<div id='group"+i+"'>"+array.slice(start,Math.floor(last+1)).join(' ')+"</div><br>");
    start = Math.floor(last+1);
  }
  return chunks;
}

// shuffle pictures array
var newInput = shuffle(picturesArray);

// function used for shuffling
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