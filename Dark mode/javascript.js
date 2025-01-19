let icone_light_mode = document.getElementById("id_light_mode");
icone_light_mode.addEventListener("click", function(){
    icone_light_mode.style.display = "none"
    document.getElementById("id_logo_equipes_2_1").style.display = "block"

    document.getElementById("id_dark_mode").style.display = "block"
    document.getElementById("id_head_top_of_site").style.backgroundColor = "white"
    document.getElementById("id_titre_top_site").style.color = "black"
    document.getElementById("id_section_menu").style.backgroundColor = "#b3b3b3"
    document.getElementById("id_section_menu").style.color = "black"
    document.getElementById("id_text_accueil").style.color = "black"
    document.getElementById("id_text_equipes").style.color = "black"

    document.getElementById("id_titre_presentation_video").style.color = "black"
    document.getElementById("id_titre_presentation_video").style.backgroundColor = "white"

    document.getElementById("id_section_carte_presentation").style.backgroundColor = "#d0d0d0"
    document.getElementById("id_text_carte").style.color = "black"
    document.getElementById("id_text_carte").style.backgroundColor = "white"

    document.getElementById("id_section_equipe_presentation").style.backgroundColor = "white"

    document.getElementById("id_text_equipe").style.backgroundColor = "#d0d0d0"
    document.getElementById("id_text_equipe").style.color = "black"

    document.getElementById("id_section_actualite").style.backgroundColor = "#d0d0d0"

    document.getElementById("id_titre_actualite").style.backgroundColor = "white"
    document.getElementById("id_titre_actualite").style.color = "black"

    document.getElementById("text_actualite_1").style.color = "black"
    document.getElementById("text_actualite_2").style.color = "black"
    document.getElementById("text_actualite_3").style.color = "black"
    document.getElementById("text_actualite_4").style.color = "black"
    document.getElementById("text_actualite_5").style.color = "black"
    document.getElementById("text_actualite_6").style.color = "black"

    document.getElementById("id_bas_page").style.backgroundColor = "white"

    document.getElementById("id_text_contact").style.color = "black"
    document.getElementById("id_text_condit_utilisa").style.color = "black"
    document.getElementById("id_text_apropos").style.color = "black"
});


let icone_dark_mode = document.getElementById("id_dark_mode");
icone_dark_mode.addEventListener("click", function(){
    icone_dark_mode.style.display = "none"

    document.getElementById("id_logo_equipes_2_1").style.display = "none"

    document.getElementById("id_light_mode").style.display = "block"
    document.getElementById("id_head_top_of_site").style.backgroundColor = "black"
    document.getElementById("id_titre_top_site").style.color = "white"
    document.getElementById("id_section_menu").style.backgroundColor = "#272727"
    document.getElementById("id_section_menu").style.color = "white"
    document.getElementById("id_text_accueil").style.color = "white"
    document.getElementById("id_text_equipes").style.color = "white"

    document.getElementById("id_titre_presentation_video").style.color = "white"
    document.getElementById("id_titre_presentation_video").style.backgroundColor = "black"

    document.getElementById("id_section_carte_presentation").style.backgroundColor = "#272727"
    document.getElementById("id_text_carte").style.color = "white"
    document.getElementById("id_text_carte").style.backgroundColor = "black"

    document.getElementById("id_section_equipe_presentation").style.backgroundColor = "black"

    document.getElementById("id_text_equipe").style.backgroundColor = "#272727"
    document.getElementById("id_text_equipe").style.color = "white"

    document.getElementById("id_section_actualite").style.backgroundColor = "#272727"

    document.getElementById("id_titre_actualite").style.backgroundColor = "black"
    document.getElementById("id_titre_actualite").style.color = "white"

    document.getElementById("text_actualite_1").style.color = "white"
    document.getElementById("text_actualite_2").style.color = "white"
    document.getElementById("text_actualite_3").style.color = "white"
    document.getElementById("text_actualite_4").style.color = "white"
    document.getElementById("text_actualite_5").style.color = "white"
    document.getElementById("text_actualite_6").style.color = "white"

    document.getElementById("id_bas_page").style.backgroundColor = "black"

    document.getElementById("id_text_contact").style.color = "white"
    document.getElementById("id_text_condit_utilisa").style.color = "white"
    document.getElementById("id_text_apropos").style.color = "white"
});