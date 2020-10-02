
function inMeet(){

    // // create css
    // const css = document.createElement('style');
    // css.innerHTML =`
    // dropbtn {
    //     background-color: #3498DB;
    //     color: white;
    //     padding: 16px;
    //     font-size: 16px;
    //     border: none;
    //     cursor: pointer;
    //   }
      
    //   .dropbtn:hover, .dropbtn:focus {
    //     background-color: #2980B9;
    //   }
      
    //   .dropdown {
    //     position: relative;
    //     display: inline-block;
    //   }
      
    //   .dropdown-content {
    //     display: none; !important
    //     position: absolute;
    //     background-color: #f1f1f1;
    //     min-width: 160px;
    //     overflow: auto;
    //     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    //     z-index: 1;
    //   }
      
    //   .dropdown-content a {
    //     color: black;
    //     padding: 12px 16px;
    //     text-decoration: none;
    //     display: block;
    //   }
      
    //   .dropdown a:hover {background-color: #ddd;}
      
    //   .show {display: block;}
    // `
    //create discription card
    const card = document.createElement('div');
    card.className="dropdown-content";
    card.innerHTML =`
            <input id="time" type="number">
            <button onclick="take_attendence()">go</button>
    `

    const setIntervalId = setInterval(() => {
    // see if in meet
    const self_window = document.querySelector('[data-fps-request-screencast-cap]')
    const options_bar = self_window && self_window.parentElement.parentElement.parentElement
    options_bar.prepend(options_bar.children[1].cloneNode());

    // create button
    
    // const button= document.createElement('div');
    // button.classList=options_bar.children[1].classList;
    // button.classList.add('dropbtn');
    // button.innerHTML =`
    //     <img src="logo.png" ></img>
    // `
    // button.addEventListener("onclick", (e) => {
    //     e.preventDefault();
    //     card.classList.toggle("show");
    // })

    // options_bar.prepend(button);

    options_bar.prepend(card);
    // end loop
    if(self_window){
        clearInterval(setIntervalId);
    }

    },1000);

}

// take attendence 
take_attendence = () => {
    console.log("present :)");
}

inMeet();