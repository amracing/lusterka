


function convertXml (uploadedXml){
    
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myFunction(this);
      }
  };
  xhttp.open("GET", uploadedXml, true);
  xhttp.send();
  
  function myFunction(xml) {
      var x, i, xmlDoc, txt;
      xmlDoc = xml.responseXML;
      
      names = xmlDoc.getElementsByTagName('name');
      urls = xmlDoc.getElementsByTagName('card');
      y = xmlDoc.getElementsByTagName('category');
      z = xmlDoc.getElementsByTagName('images');
      a = xmlDoc.getElementsByTagName('sizes');
      code = "";
      txt = "";
      for (i = 0; i < names.length; i++) { 
          name = names[i].childNodes[0].nodeValue;
          url = urls[i].getAttribute('url');
          id = y[i].getAttribute('id');
          imageUrl = z[i].childNodes[0].childNodes[0].getAttribute('url');

          txt += "<div class='col-sm-12 col-md-6 col-lg-4'>";

          txt += "<div class='text-center mb-5 mt-5'>"
          txt += "<img src=\"" + imageUrl + "\" width=\"auto\" height=\"150px\">";
          txt += '<p class="name">' + name + '</p>';
          txt += '<div class="my-auto button_link"><a href="' + url + '">Otwórz</a></div></div></div>'
                
      }
      document.getElementById("app").innerHTML = txt; 
  }
}