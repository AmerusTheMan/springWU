
function copy_element_by_id(source_id, destination_id){
    let source = document.getElementById(source_id);
    let destination = document.getElementById(destination_id);

    destination.innerHTML = source.innerHTML;
}


copy_element_by_id("global-nav", "mobile-global-nav");
copy_element_by_id("local-nav", "mobile-local-nav");


