//array of random search terms (made them code related)
function searchYT() {
  var element = document.getElementById("iframeClass");
  console.log(element);

  const input_val = document.getElementById("query").value;
    if (input_val != "") {
      resultsLoop(input_val)
    }else {
      alert("Que desea buscar!");
      };
}

function searhInYoutube(val) {
  const YOUTUBE_API_KEY = [KEY]; // Insertar la key administrada por Google APIs.
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${val}&key=${YOUTUBE_API_KEY}`;
  //fetch function following the aforementioned process
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      ar = data.items;
      for (let index = 0; index < ar.length; index++) {
        console.log(ar[index].id.videoId);
        var iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${ar[index].id.videoId}`;
        document.getElementById("iframeClass").append(iframe,"<p>fff</p>");
      }
    });
}
function resultsLoop(val) {
  const YOUTUBE_API_KEY = "AIzaSyC5js03FOVxdvnjuaRr998heKqtxiLX7a0";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${val}&key=${YOUTUBE_API_KEY}`;
  //fetch function following the aforementioned process
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      ar = data.items;
      ar.forEach(printInHTML);

      function printInHTML(item, index) {
        console.log(item)
        var thumb = item.snippet.thumbnails.medium.url;
        var title = item.snippet.title;
        var desc = item.snippet.description;
        var vid = item.id.videoId;
  
        document.getElementById("iframeClass").innerHTML += `
          <button type="button" class="btn" data-toggle="modal" data-target="#boxmodal-${index}">
            <img src="${thumb}" alt="" class="thumb">
            <h6>${title}</h6>
          </button>
          <div class="modal fade" id="boxmodal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4>${title}</h4>
                </div>
                <div class="modal-body">
                  <iframe src="https://www.youtube.com/embed/${vid}" frameborder="0"></iframe>
                  <hr>
                  <p>${desc}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>`;
    };
  });
};//end of function printInHTML 