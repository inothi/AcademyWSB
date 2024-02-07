function powitajUzytkownika() {
    let greetings = "Dzień dobry";
    let url = location.href;
    let date = new Date();
    let dayName = date.getDay();
    switch (dayName) {
        case 0: dayName = "niedziela"; break;
        case 1: dayName = "poniedziałek"; break;
        case 2: dayName = "wtorek"; break;
        case 3: dayName = "środa"; break;
        case 4: dayName = "czwartek"; break;
        case 5: dayName = "piątek"; break;
        case 6: dayName = "sobota"; break;
    };
    alert(`
        ${greetings}
        
        ${url}
        
        Dzisiaj jest ${dayName}
        `);
};
let welcomeBtn = document.getElementById("powitanie");
welcomeBtn.addEventListener("click", powitajUzytkownika);