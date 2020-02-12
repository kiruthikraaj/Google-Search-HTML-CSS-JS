function input(e){
  if(e.keyCode==13){
    console.log(e);
    search();
  }
}

function search(){
  var query = document.getElementById('searchcontainer').value;
  document.location=("https://www.google.com/search?q="+escape(query))
}

function lucky(){
  document.location=("https://www.google.com/doodle")
}