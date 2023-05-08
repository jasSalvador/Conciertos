/* a las cuentas normales se les asigna un nombre de usuario aleatorio, 
mientras que las cuentas VIP pueden elegirlo. Los datos de cada página de registro deben almacenarse en 
un objeto distinto. El objeto que almacenará los datos de la cuenta VIP, debe heredar ciertos datos de su 
clase padre. Ambos objetos de almacenamiento deben incluir un método cada uno, que muestre la información ingresada al hacer click 
en los botones de cualquiera de las páginas de registro*/

//mostrar/ocultar formularios
$('#vipActive').click(() => {
    $('#formSign').hide();
    $('#formVip').show();
})


$('#signActive').click(() => {
    $('#formVip').hide();
    $('#formSign').show();
})



let users = [];
let usersVip = [];

class Cuentas {
    constructor(name, email, pass) {
        this.name = name; //n° aleatorio
        this.email = email;
        this.pass = pass;
    }

    //mostrar info en modal
    mostrarInfo() {

        $('#modalTitle').text(`Bienvenido ${this.name}`)
        $('#modalBody').text(`Email: ${this.email} Contraseña ${this.pass}`)
        $('#myModal').modal('show')
    }
}


//evento click form SIGN
$('#btnSign').click((event) => {
    event.preventDefault()
    let checkSign = document.getElementById('checkSign')
    if (!checkSign.checked) {
        alert("Debes aceptar los terminos y condiciones.")
    } else {
        let email = $('#emailSign').val()
        let pass = $('#passwordSign').val()
        let nameId = email.split('@')
        let id = Math.floor(Math.random() * 1000)
        let name = nameId[0] + id
        let user = new Cuentas(name, email, pass)

        users.push(user)

        user.mostrarInfo()
    }
});


//usuarios VIP
class Vip extends Cuentas {
    constructor(name, email, pass) {
        super(name, email, pass)
    }

    mostrarInfo() {
        $('#modalTitle').text(`Bienvenido ${this.name}`)
        $('#modalBody').text(`Nombre: ${this.name} Email: ${this.email} Contraseña ${this.pass}`)
        $('#myModal').modal('show')
    }
};


//evento click form VIP
$('#btnVip').click((event) => {
    event.preventDefault()
    let checkVip = document.getElementById('checkVip'); //checkbox
    if (!checkVip.checked) {
        alert("Debes aceptar los términos y condiciones.")
    } else {
        let name = $('#nameVip').val()
        let email = $('#emailVip').val()
        let pass = $('#passwordVip').val()
        let user = new Vip(name, email, pass)

        usersVip.push(user)

        user.mostrarInfo()
    }
});







