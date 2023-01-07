const menuBurger = document.querySelector(".menu_burger");
const menuSubList = document.querySelector(".menu_sub_list");

menuBurger.addEventListener("click", function(event){
    menuSubList.classList.toggle("active");
});

let arr_ids = [];
const blocks = document.querySelectorAll(".block");

if (blocks.length > 0){
    for (let index = 0; index < blocks.length; index++){
        if (blocks[index].hasAttribute("id")){
            arr_ids.push(blocks[index]);
        };
    };
};

const arr_links = document.querySelectorAll(".menu_sub_link");

if (arr_links.length > 0){
    for (let index = 0; index < arr_links.length; index++){
        arr_links[index].addEventListener("click", function(event){
            for (let index_2 = 0; index_2 < arr_ids.length; index_2++){
                if (arr_links[index].textContent.toLowerCase() == arr_ids[index_2].id.toLowerCase()){
                    arr_ids[index_2].scrollIntoView({
                        block: "center",
                        inline: "nearest",
                        behavior: "smooth"
                    });
                };
            };
            event.preventDefault();
            menuSubList.classList.toggle("active");
        });
    };
};

const form = document.querySelector("#form");
const button = document.querySelector(".sixth_block_button");
const input = document.querySelector(".sixth_block_input");

let success_1 = 0;
let success_2 = 0;
let symbols_1 = 0;
let symbols_2 = 0;
let str_2 = "";
let error = 0;

button.addEventListener("click", function(event){
    event.preventDefault();
    let email = input.value.trim();
    if (email == ""){
        input.classList.add("error");
        input.parentElement.classList.add("error");
        error += 1;
    } else{
        input.classList.remove("error");
        input.parentElement.classList.remove("error");
        for (let index = 0; index < email.length; index++){
            if (email[index] == "@"){
                symbols_1 += 1;
                input.classList.remove("error");
                input.parentElement.classList.remove("error");
            };
        };
        if (symbols_1 == 1 && email.indexOf("@") > 0){
            input.classList.remove("error");
            input.parentElement.classList.remove("error");
            for (let index_2 = 0; index_2 < email.length; index_2++){
                if (email[index_2] != "@"){
                    str_2 += email[index_2];
                } else{
                    break;
                };
            };
            for (let index_3 = 0; index_3 < str_2.length; index_3++){
                if (str_2[index_3] == "!" || str_2[index_3] == "#" || str_2[index_3] == "$" || str_2[index_3] == "%" || str_2[index_3] == "^" || str_2[index_3] == "&" || str_2[index_3] == "*" || str_2[index_3] == "(" || str_2[index_3] == ")" || str_2[index_3] == "_" || str_2[index_3] == "-" || str_2[index_3] == "+" || str_2[index_3] == "=" || str_2[index_3] == "~" || str_2[index_3] == "[" || str_2[index_3] == "]" || str_2[index_3] == "{" || str_2[index_3] == "}" || str_2[index_3] == "." || str_2[index_3] == ","  || str_2[index_3] == "<" || str_2[index_3] == ">" || str_2[index_3] == "?" || str_2[index_3] == "/" || str_2[index_3] == "|" || str_2[index_3] == "№" || str_2[index_3] == "\\"  || str_2[index_3] == "§" || str_2[index_3] == " "){
                    input.classList.add("error");
                    input.parentElement.classList.add("error");
                    error += 1;
                    str_2 = "";
                } else{
                    success_1 += 1;
                };
            };
            if (success_1 == str_2.length){
                input.classList.remove("error");
                input.parentElement.classList.remove("error");
                let domain = email.substr(email.indexOf("@") + 1);
                if (domain.length > 0){
                    input.classList.remove("error");
                    input.parentElement.classList.remove("error");
                    for (let index_4 = 0; index_4 < domain.length; index_4++){
                        if (domain[index_4] == "."){
                            symbols_2 += 1;
                        };
                    };
                    if (symbols_2 == 1){
                        input.classList.remove("error");
                        input.parentElement.classList.remove("error");
                        let domain_2 = domain.substr(0, domain.indexOf("."));
                        console.log(domain_2.length);
                        if (domain_2 == ""){
                            input.classList.add("error");
                            input.parentElement.classList.add("error");
                            error += 1;
                        };
                        if (domain_2.length > 0){
                            if (domain_2 == "com" || domain_2 == "mail" || domain_2 == "yandex" || domain_2 == "rambler" || domain_2 == "gmail"){
                                success_2 += 1;
                                input.classList.remove("error");
                                input.parentElement.classList.remove("error");
                            } else{
                                input.classList.add("error");
                                input.parentElement.classList.add("error");
                                error += 1;
                            };
                        } else{
                            input.classList.add("error");
                            input.parentElement.classList.add("error");
                            error += 1;
                        };
                        let ending = domain.substr(domain.indexOf(".") + 1);
                        if (success_2 == 1){
                            if (ending == "ru" || ending == "com" || ending == "org" || ending == "net" || ending == "info" || ending == "ua" || ending == "by" || ending == "uk"){
                                input.classList.remove("error");
                                input.parentElement.classList.remove("error");
                            } else{
                                input.classList.add("error");
                                input.parentElement.classList.add("error");
                                error += 1;
                            };
                        } else{
                            input.classList.add("error");
                            input.parentElement.classList.add("error");
                            error += 1;
                        }
                    } else{
                        input.classList.add("error");
                        input.parentElement.classList.add("error");
                        error += 1;
                    };
                } else{
                    input.classList.add("error");
                    input.parentElement.classList.add("error");
                    error += 1;
                };
            } else{
                input.classList.add("error");
                input.parentElement.classList.add("error");
                error += 1;
            };
        } else{
            input.classList.add("error");
            input.parentElement.classList.add("error");
            error += 1;
        };
        if (error == 0){
            form.submit();
        };
    };
    success_1 = 0;
    success_2 = 0;
    symbols_1 = 0;
    symbols_2 = 0;
    error = 0;
});
