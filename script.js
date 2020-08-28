// // TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(json) {
        const destination = document.getElementById("container");
        let title = document.getElementById("title")
        for (let i=0; i<json.length; i++) {
          let obj = json[i];
          let section = `
            <div class="astronaut">
              <div class="bio">
                <h3>${obj.firstName} ${obj.lastName} </h3>
                <ul>
                  <li>Hours in space: ${obj.hoursInSpace}</li>
                  <li>Active: ${obj.active}</li>
                  <li>Skills: ${obj.skills}</li>
                  </ul>
              </div>
              <img class="avatar" src="${obj.picture}">
            </div> 
            `   
            title.innerHTML = `<h2>${i} Astronauts</h2>`;
            destination.innerHTML += section;
        }
      });
    });
  });