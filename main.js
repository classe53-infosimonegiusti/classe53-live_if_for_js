const app = new Vue({
    el: '#root',
    data: {
        /*eta: 20,
        patente: true,
        amici: ['marco', 'giulia', 'francesco'],*/
        miaClasse: ['a', 'b'],

        menuVisibile: true,
        menu: [
            {
                url: 'https://www.google.it',
                nome: 'Google'
            },
            {
                url: 'https://www.microsoft.it',
                nome: 'Microsoft'
            },

        ]
    },
    methods: {
        /*possoGuidare() {
            if (this.eta >= 18 && this.patente) {
                return true;
            }
            return false;
        },
        stampaNomeAmico(indice) {
            alert(this.amici[indice]);
        },*/
        toggleMenu() {
            //se menuVisibile è true, mettilo a false
            //altrimenti, mettilo a true

            this.menuVisibile = !this.menuVisibile;

            /*
            if (this.menuVisibile) {
                this.menuVisibile = false;
            } else {
                this.menuVisibile = true;
            }
            */

        }
    }
});


