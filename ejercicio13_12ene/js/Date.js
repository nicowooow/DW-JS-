class DateEsp extends Date {
  nameDiv;
  week = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  monthsEs = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  constructor(anio, mes, dia, nameDiv = "contenedor") {
    super(anio, mes, dia);
    console.log(nameDiv);
    this.nameDiv = nameDiv;
  }

  toString() {
    let nameday = this.week[this.getDay()];
    let namemonth = this.monthsEs[this.getMonth()];
    const dayNum = this.getDate();

    let salida =
      nameday +
      ", " +
      dayNum +
      " de " +
      namemonth +
      " del " +
      this.getFullYear();

    return salida;
  }

  createDiv() {
    let body = document.querySelector("body");
    let div = document.createElement("DIV");
    div.id = this.nameDiv;
    body.appendChild(div);
    let input = document.createElement("INPUT");
    input.type = "date";
    console.log(
      `${this.getFullYear()}-${this.getMonth()}-${String(this.getDate()).padStart(2, "0")}`,
    );
    // console.log(typeof(`${this.getFullYear()}-${this.getMonth()}-${String(this.getDate()).padStart(2, "0")}`));
    input.name = this.nameDiv
    input.value = `${this.getFullYear()}-${String(this.getMonth()+1).padStart(2, "0")}-${String(this.getDate()).padStart(2, "0")}`;
    input.disabled = true;

    div.appendChild(input);
  }
}
