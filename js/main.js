
function copy_element_by_id(source_id, destination_id){
    let source = document.getElementById(source_id);
    let destination = document.getElementById(destination_id);

    destination.innerHTML = source.innerHTML;
}

function enable_fade_layer(){
    let fade_layer = document.querySelector(".fade-layer");

    fade_layer.classList.remove("hidden");
}
function disable_fade_layer(){
    let fade_layer = document.querySelector(".fade-layer");

    fade_layer.classList.add("hidden");
}


function show_mobile_nav(){
    hide_menus();
    enable_fade_layer();
    let menu = document.querySelector("nav#mobile-global-nav");

    menu.classList.add("show-menu");
}


function show_mobile_aside(){
    hide_menus();
    enable_fade_layer();

    let menu = document.querySelector("aside#mobile-local-nav");

    menu.classList.add("show-menu");
}


function hide_menus(){
    disable_fade_layer();
    let global_menu = document.querySelector("nav#mobile-global-nav");
    let local_menu = document.querySelector("aside#mobile-local-nav");

    global_menu.classList.remove("show-menu");
    local_menu.classList.remove("show-menu");
}

copy_element_by_id("global-nav", "mobile-global-nav");
copy_element_by_id("local-nav", "mobile-local-nav");


let fade_layer = document.querySelector(".fade-layer");
fade_layer.addEventListener("click", hide_menus);