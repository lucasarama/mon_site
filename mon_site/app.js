const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "whiteTheme", "originTheme");
        switch (e.target.id){
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "white":
                document.body.classList.add("whiteTheme");
                break;
            case "origin":
                document.body.classList.add("originTheme");
                break;
            default:
            null;
        }
    })
})

//******************************************************

