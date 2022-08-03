            //define the corresponding marcas
            var option_vw = new Array("Selecciona", "Amarok", "Beetle", "Bora", "Cross Fox", "Eurovan",
                "Gol", "Golf", "Jetta", "Lupo", "Passat", "Pointer", "Vocho",
                "Polo", "Routan", "Saveiro", "Sharan", "Sport Van",
                "Tiguan", "Touareg", "Up", "Vento", "derby")
            var option_nissan = new Array("Selecciona", "Almera", "Altima", "Aprio", "Armada", "Frontier",
                "Juke", "Kicks", "Leaf", "March", "Maxima", "Micra",
                "Murano", "Note", "NP300", "Pathfinder", "Platina",
                "Quest", "Rogue", "Sentra", "Tiida", "Titan", "Tsuru",
                "V drive", "Versa", "X-Terra", "X-Trail")
            var option_audi = new Array("Selecciona", "A1", "A2", "A3", "A4", "A5", "A6", "Q3", "Q5", "Q7", "S3",
                "S4", "S5", "S6", "S8", "A7", "A8", "TT", "R8", "e-tron",
                "e-tron GT", "RS")
            var option_bmw = new Array("Selecciona", "Serie 1", "Serie 2", "Serie 3", "Serie 4", "Serie 5",
                "Serie 6", "X3", "X4", "X5", "X6", "X7", "X8", "i3", "i4",
                "i5", "i6", "i7", "i8", "iX", "Z4", "M3", "M4", "M135i",
                "M235i", "M340i")
            var option_buick = new Array("Selecciona", "Enclave", "Encore", "Envision", "Lacrosse", "Regal",
                "Riviera", "Verano", "Verano GS", "GL6", "GL8", "Cascada",
                "Excelle")
            var option_chevrolet = new Array("Selecciona", "Astra", "Astro", "Avalanche", "Aveo", "Beat", "Blazer",
                "Camaro", "Captiva", "Cavalier", "Colorado", "Corsa",
                "Corvette", "Cruze", "Equinox", "Express van", "HHR",
                "Malibu", "Meriva", "Monte Carlo", "Optra", "S-10",
                "Silverado", "Sonic", "Spark", "Suburban", "Tahoe",
                "Tornado", "Traverse", "Trax", "Uplander", "Venture")


            //this will relate the marca with modelo
            function relation() {
                //define the variable that has all the options
                var corresponding_car;
                corresponding_car = document.marcas.marca[document.marcas.marca.selectedIndex].value;

                //when the first option (which is Marca) is shown, then no other option will appear
                if (corresponding_car != "-") {
                    //selecting the content of the options
                    marca_options = eval("option_" + corresponding_car);
                    //the length so we can fill up the other "selects"
                    option_length = marca_options.length;
                    ano_length = new Date().getFullYear() - new Date(1950, 1, 1).getFullYear();
                    document.marcas.modelo.length = option_length;
                    document.marcas.ano.length = ano_length;

                    //filling up the modelo select
                    for (i = 0; i < option_length; i++) {
                        document.marcas.modelo.options[i].value = marca_options[i];
                        document.marcas.modelo.options[i].text = marca_options[i];
                    }

                    //filling up the ano select
                    for (j = 0; j < ano_length; j++) {
                        document.marcas.ano.options[j].value = new Date().getFullYear() + (-1 * j);
                        document.marcas.ano.options[j].text = new Date().getFullYear() + (-1 * j);
                    }

                    //if the first select (marca) is with the text "Marca" then show nothing in the others
                } else {
                    document.marcas.modelo.length = 1;
                    document.marcas.ano.length = 1;
                    document.marcas.modelo.options[0].value = "modelo";
                    document.marcas.modelo.options[0].text = "Modelo";
                    document.marcas.ano.options[0].value = "ano";
                    document.marcas.ano.options[0].text = "Año";
                }

                document.marcas.modelo.options[0].selected = true;
                document.marcas.ano.options[0].selected = true;

            }

            function btn() {
                document.querySelector("form[name=marcas]").addEventListener("submit", (e) => {
                    e.preventDefault(); // stop the normal form submit action

                    const data = new FormData(e.target); // capture all the fields
                    console.log(document.querySelector("form[name = marcas]").marca.value)
                    console.log(document.querySelector("form[name = marcas]").modelo.value)
                    console.log(document.querySelector("form[name = marcas]").ano.value)

                    const first_entry = document.querySelector("form[name = marcas]").marca.value + "-";
                    const second_entry = document.querySelector("form[name = marcas]").modelo.value + "-";
                    const third_entry = document.querySelector("form[name = marcas]").ano.value;


                    location.href = "https://superutilshop.mx/" + second_entry;
                });
            }