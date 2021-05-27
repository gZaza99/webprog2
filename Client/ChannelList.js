const ChannelList = (function()
{
    main = 
    {
        Html:
        {
            Content: "",
            ContentReady: false,

            OnHtmlContentIsReady: function(val){
                document.getElementById("channels").innerHTML = main.Html.Content.replaceAll('null', '');
                main.addClickListenerToButtons();
            },

            set Ready(val){
                if (typeof val === typeof true){
                    this.ContentReady = val;
                    if(val == true){
                        this.OnHtmlContentIsReady(val);
                    }
                }
            },

            get Ready(){
                return this.ContentReady;
            },
        },

        onClickJoin: function(event)
        {
            event.preventDefault();

            //Csatlakozás a(z) id azonosítójú csatornához és aloldalváltás
            console.log("Csatlakozás a(z) " + id + " azonosítójú csatornához és aloldalváltás");
        },

        onClickNew: function(event)
        {
            event.preventDefault();

            //Új csatorna létrehozása és aloldalváltás
            console.log("Új csatorna létrehozása és aloldalváltás");
        },

        onClickSignOut: function(event)
        {
            event.preventDefault();

            //Kijelentkezés és aloldalváltás
            console.log("Kijelentkezés és aloldalváltás");
        },

        addClickListenerToButtons: function()
        {

            const channels = document.querySelectorAll("#channels ul");
            for (let i = 0; i < channels.length; i++) {
                const channel = channels[i];
                channel.addEventListener("click", function(event)
                {
                    main.onClickJoin(event);
                });
            }
        },

        LoadChannels: function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                //Convert JSON to JavaScript object
                const result = JSON.parse(this.responseText); //A responseText-BEN KI KELL CSERÉLNI MINDEN 'null' SZÖVEGET '' -RA!
                const channels = document.getElementById("channels");

                //Clear the temp channel list
                main.Html.Ready = false;
                main.Html.Content = "";

                //Fill the temp channel list
                for (let index = 0; index < result.length; index++)
                {
                    const row = result[index];
                    const dsbld = " disabled";
                    main.Html.Content += `
                <ul>
                    <li>` + row["name"] + `</li>
                    <li>` + row["player_1_ID"] + `</li>
                    <li>` + row["player_2_ID"] + `</li>
                    <button value="` + row["Id"] + `"`;
                    main.Html.Content += (row["status"] === 's')? " disabled" : "";
                    main.Html.Content += `>Csatlakozás</button>
                </ul>`;
                }
                main.Html.Ready = true;
            }
        },

        /*LoadChannels: function()
        {
            main.ConvertResponseToHtml(this);
        },*/

        Init: function()
        {
            //Fields of main
            this.username = "outsider";
            this.password = "outsider";
            this.xhttp = new XMLHttpRequest();

            //Add click event listener to button NEW CHANNEL
            let button = document.querySelector("#head button");
            button.addEventListener("click", function(event)
            {
                main.onClickNew(event);
            });

            //Add click event listener to button SIGN OUT
            button = document.querySelector("footer button");
            button.addEventListener("click", function(event)
            {
                main.onClickSignOut(event);
            });

            //Requesting channel list from server side
            this.xhttp.onreadystatechange = this.LoadChannels;

            this.xhttp.open("POST", "Service/LoadChannels.php", true);
            this.xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            this.xhttp.send( "u=" + this.username + "&p=" + this.password );
        }
    };

    return main;
})();